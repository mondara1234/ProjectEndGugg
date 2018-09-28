import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class ListFoodScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 40}}>{'การคำนวณ อารหาร ว่าถ้าหากกินไปต้องลดยังไง แล้วต้องคุมอะไรยังไงในแต่ละวัน'}</Text>
            </Container>
        );
    }
}

ListFoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'รายการอาหาร'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

export default ListFoodScreen;
