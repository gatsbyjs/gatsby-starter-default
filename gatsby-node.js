const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;

    // fetch all event data from Astra Facade api
    // const fetchEventData = () => axios.get('');
    const fetchEventData = () => axios.get(`http://localhost:3000/activities/all`);

    // await for results
    const eventResult = await fetchEventData();

    // map into event results and create nodes
    eventResult.data.map((event, i) => {
        
        // Create node object for event
        const eventNode = {
            // Required fields
            id: `${'event ' + i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `EventInfo`, // name of the graphQL query --> allEventInfo {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],
                    
            // Other fields that you want to query with graphQl
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

        // console.log('#### found one ' + JSON.stringify(event) + '#######');
        console.log('#### found one ' + JSON.stringify(eventNode) + '#######');
        
        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(eventNode))
            .digest(`hex`);
        // add it to eventNode
        eventNode.internal.contentDigest = contentDigest;
        
        // Create node with the gatsby createNode() API
        createNode(eventNode);  
        
    });

    return;
}