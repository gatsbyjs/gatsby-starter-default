const axios = require('axios');
const crypto = require('crypto');


exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;

    // fetch all event data from Astra Facade api
    // const fetchEventData = () => axios.get('');
    const fetchEventData = () => axios.get(`http://localhost:3000/activities/all`);

    // await for results
    const eventResult = await fetchEventData();

    // an array to track event types so we don't duplicate them ad we traverse the event map
    var eventTypeIndices = [];

    // map into event results and create nodes
    eventResult.data.map((event, i) => {
        
        // Create node object for event
        const eventNode = {
            // Required fields
            id: `${'event ' + i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `EventInfo`, // name of the graphQL query --> allEventInfo {}
                // contentDigest is requred but will be created at end
            },
            children: [],
            astraId: event.activityId,
            name: event.activityName,
            date: {
                start: event.startDate,
                startTime: event.startDateTime,
                endTime: event.endDateTime,
            },
            location: {
                campus: event.campusName,
                building: event.buildingCode,
                room: event.roomNumber,
                description: event.locationName,
            },
            typeCode: event.activityTypeCode,
            instructor: 'not yet available',
            days: 'not yet available',
            canView: 'not yet available',
        }        
        // Get content digest of node. (Required field)
        const eventDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(eventNode))
            .digest(`hex`);
        // add it to eventNode
        eventNode.internal.contentDigest = eventDigest;
        
        // Create node with the gatsby createNode() API
        createNode(eventNode);  

        // if the event type is not already known, let's create that node also
        if (0 > eventTypeIndices.indexOf(event.activityTypeCode)) {        

            const eventTypeNode = {
                id: `${'activity type ' + i}`,
                parent: `__SOURCE__`,
                internal: {
                    type: `EventType`, // name of the graphQL query --> allEventType {}
                    // contentDigest is requred but will be created at end
                }, 
                children: [], 
                type: {
                    code: event.activityTypeCode,
                    description: 'Ryan Event Type', 
                },           
            }
            // Get content digest of node. (Required field)
            const eventTypeDigest = crypto
                .createHash(`md5`)
                .update(JSON.stringify(eventTypeNode))
                .digest(`hex`);
                // add it to eventNode
                eventTypeNode.internal.contentDigest = eventTypeDigest;

            // use type code as unique index to avoid duplicates downstream
            eventTypeIndices.push(eventTypeNode.type.code);                                    
            createNode(eventTypeNode);  
        }
    });
    return;
}