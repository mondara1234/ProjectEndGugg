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
        console.log('navigation:',this.props.navigation.state.routeName);
        console.log('key:',this.props.navigation.state.key);
        return (
            <Container>
                <Text style={styles.headerText}> {'คำนวณการเผาผลานร่างกาย'} </Text>
                <Tabs style={styles.tabSize}>
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

calfoodScreen.navigationOptions  = ({ navigation }) => ({
    headerTitle: <CommonText text={'คำนวณกายออกกำลังกาย'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

const styles = StyleSheet.create({
    headerText:{
        fontSize: 28
    },
    tabSize: {
        flex: 1
    }
});

export default calfoodScreen;
