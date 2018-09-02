import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';
import { Container } from 'native-base';
import MenuItem from '../components/MenuItem';
import {HISTORY_SCREEN} from "../../history/router";
import {SELECT_FOOD_SCREEN} from "../../selectFood/router";
import {LIST_FOOD_SCREEN} from "../../listFood/router";

class DashboardScreen extends React.Component {

    render() {
        return (
            <Container>
                <ImageBackground
                    source={require('../../../../pulic/assets/images/Boruto.jpg')}
                    style={styles.container}
                >
                    <View style={styles.overlayContainer}>
                        <View style={styles.top}>
                            <Text style={styles.header}> {"H O M E"} </Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <MenuItem
                                itemImage={require('../../../../pulic/assets/images/Search.png')}
                                onPress={() => {this.props.navigation.navigate( 'SELECT_FOOD_SCREEN' )}}
                            />{/*ค้นหาด้วยการกรอกชื่ออาหาร*/}
                            <MenuItem
                                itemImage={require('../../../../pulic/assets/images/Scanner.png')}
                                onPress={() => {this.props.navigation.navigate( 'SCANQR_SCREEN' )}}
                            />{/*สแกนอาหารแล้วบอก calorie เป็นข้อความพร้อมเสียง*/}
                            <MenuItem
                                itemImage={require('../../../../pulic/assets/images/List.jpg')}
                                onPress={() => {this.props.navigation.navigate( 'LIST_FOOD_SCREEN' )}}
                            />{/*แสดงรายการอาหารทั้งหมดแบบ List*/}
                            <MenuItem
                                itemImage={require('../../../../pulic/assets/images/History.png')}
                                onPress={() => {this.props.navigation.navigate( 'HISTORY_SCREEN' )}}
                            />{/*ประวัติการใช้งาน ในแต่ละวัน*/}
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

DashboardScreen.navigationOptions  = ({navigation}) => ({
    header: null
});

const windows = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windows.width,
        height: windows.height
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47, 163, 218, 0.4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 30,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'rgba(255, 55, 255, 0.1)'
    },
    menuContainer: {
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'

    }

});

export default DashboardScreen;
