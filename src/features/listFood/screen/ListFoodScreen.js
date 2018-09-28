import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class ListFoodScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 40}}>{'แสดงรายการอาหารทั้งหมดแบบ List ให้ Admint แก้ไขได้s'}</Text>
            </Container>
        );
    }
}

ListFoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'รายการอาหาร'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

export default ListFoodScreen;
