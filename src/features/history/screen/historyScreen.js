import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class HistoryScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 40}}>{'ประวัติการใช้งาน ในแต่ละวัน'}</Text>
            </Container>
        );
    }
}

HistoryScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'ประวัติการใช้งาน'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

export default HistoryScreen;
