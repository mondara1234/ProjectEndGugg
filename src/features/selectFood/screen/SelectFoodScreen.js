import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class SelectFoodScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 40}}>{'ค้นหาด้วยการกรอกชื่ออาหาร'}</Text>
            </Container>
        );
    }
}

SelectFoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'ค้นหาอาหาร'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

export default SelectFoodScreen;
