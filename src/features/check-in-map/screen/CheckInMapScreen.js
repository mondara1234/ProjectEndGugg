import React from 'react';
import { Container } from 'native-base';
import  FormDateScreen from '../forms/FormDateScreen';
import  FormLiteScreen from '../forms/FormLiteScreen';
import  FormButtonGroup from '../forms/FromButtonGroup';

class CheckInMapScreen extends React.PureComponent {


    render() {
        return (
            <Container>
                    <FormDateScreen/>
                    <FormLiteScreen/>
                    <FormButtonGroup/>
            </Container>
        );
    }
}

export default CheckInMapScreen;
