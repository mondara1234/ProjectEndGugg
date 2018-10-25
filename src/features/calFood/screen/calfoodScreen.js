import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Container, Button, Tab, Tabs } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import BMRScreen from './BMRScreen';

class calfoodScreen extends React.PureComponent {

    render() {
        return (
            <Container>
                <Text style={{fontSize: 28}}>{'คำนวณการเผาผลานร่างกาย'}</Text>
                <View style={styles.container}>
                    <Button style={styles.colors}>
                    <IconFontAwesome
                        size={20}
                        color={'#ff94b8'}
                        name={'qrcode'}
                    />
                    <Text>{'BMR'}</Text>
                </Button>
                    <Button style={styles.colors}>
                        <IconFontAwesome
                            size={20}
                            color={'#ff94b8'}
                            name={'qrcode'}
                        />
                        <Text>{'REE'}</Text>
                    </Button>
                    <Button style={styles.colors}>
                        <IconFontAwesome
                            size={20}
                            color={'#ff94b8'}
                            name={'qrcode'}
                        />
                        <Text>{'TDEE'}</Text>
                    </Button>
                    <Button style={styles.colors}>
                        <IconFontAwesome
                            size={20}
                            color={'#ff94b8'}
                            name={'qrcode'}
                        />
                        <Text>{'อื่นๆ'}</Text>
                    </Button>
                </View>
                <Tabs style={{flex:1}}>
                    <Tab heading="BMR">
                        <BMRScreen />
                    </Tab>
                    <Tab heading="REE">
                        <BMRScreen />
                    </Tab>
                    <Tab heading="TDEE">
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
