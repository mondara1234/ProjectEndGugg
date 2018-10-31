import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Container, Button, Tab, Tabs } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import BMRScreen from './TabScreen/BMRScreen';
import REEScreen from './TabScreen/REEScreen';

class calfoodScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 28}}>{'คำนวณการเผาผลานร่างกาย'}</Text>
                <Tabs style={{flex:1}}>
                    <Tab heading="BMR">
                        <BMRScreen />
                    </Tab>
                    <Tab heading="REE">
                        <REEScreen />
                    </Tab>
                    <Tab heading="คำนวฯอาหารที่กินไปต้องลดเท่าไร">
                        <BMRScreen />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

calfoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'คำนวณกายออกกำลังกาย'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    colors: {
        backgroundColor: '#a7aca7',
        width: 70,
        margin: 3
    }
});

export default calfoodScreen;
