import EventReqButton from '../components/EventButton';
import React from 'react';
import styled from 'styled-components';
import { BASE_AAIS_URL } from '../redux/sagas/sagaConfig';


const erURL = BASE_AAIS_URL+'events/EventReqIntroForm.aspx';


const ERArea = styled.div`
    flex: 1;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    `;

export default class EventReqArea extends React.Component { // eslint-disable-line react/prefer-stateless-function



    render() {
        if (1 == 1) {  // todo: get eventRequestAction to verify guest event request permissions dynamically
            return (
                <ERArea>
                    <EventReqButton as="a" href= {erURL} target="_blank">
                        Request an Event
                    </EventReqButton>
                </ERArea>
            );
        } else {
            return(
                <ERArea>
                </ERArea>
            )
        }
    }
}
