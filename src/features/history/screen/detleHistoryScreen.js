import React from 'react';
import {View, Text, StyleSheet, FlatList,ActivityIndicator } from 'react-native';
import { Container, Button, Item, Input, Icon, H3, ListItem, Thumbnail, Left, Body  } from 'native-base';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import userHistory from '../api/userHistory';

class detleHistoryScreen extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }
    componentDidMount () {
        this.setState({
            dataSource: userHistory,
            isLoading: false
        })
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{flex: 1 ,width: '100%', backgroundColor: index % 2 == 0 ? "#8ef7ff" : "#ff78f4"}}>
                <ListItem thumbnail >
                    <Body>
                    <H3 style={{fontSize: 16, color: '#020202', marginBottom: 10}}>{ item.history.detile } </H3>
                    </Body>
                </ListItem>
            </View>
        )
    };

    renderSeparator=() =>{
        return(
            <View
                style = {{height: 1 , width: '100%', backgroundColor: '#080808'}}>
            </View>
        )
    };
    render() {
        return ( this.state.isLoading ?
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View> :
                <View style={styles.container}>
                    <View style={styles.viewlocation}>
                        <Text style={{fontSize: 18}}>{'ประวัติการใช้งาน'}</Text>
                        <Text style={{ fontSize: 14, color: '#7a7a7a',}}> {'รับค่าวันที่มาจากหน้าที่กด'} </Text>
                    </View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />


                    <Button  full light >
                        <Text> {'ลบประวัติ'} </Text>
                    </Button>
                </View>
        )
    }
}

detleHistoryScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'ประวัติการใช้งาน'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    viewlocation: {
        width: '100%',
        height: 50 ,
        backgroundColor: '#a8cccd',
        justifyContent: 'center'
    }
});


export default detleHistoryScreen;
