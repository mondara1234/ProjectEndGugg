import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList,ActivityIndicator} from 'react-native';
import { Button, Item, Input, Icon, List,H3,ListItem, Left, Thumbnail, Body  } from 'native-base';
import  CommonText from '../../common/components/CommonText';

class FormLiteScreen extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    componentDidMount () {
       var url = 'http://www.json-generator.com/api/json/get/cfOmgHmYMO?indent=2'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.Inbizth_array,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }



    _renderItem = ({item,index}) => {
        return (
            <View style={{flex: 1 ,width: '100%', backgroundColor: index % 2 == 0 ? "#8ef7ff" : "#ff78f4"}}>
                <ListItem thumbnail >
                    <Left>
                        <Thumbnail source={{uri: item.image}}  style={{ width: 60, height: 60, margin: 5}} />
                    </Left>
                    <Body>
                        <H3 style={{fontSize: 16, color: '#020202', marginBottom: 10}}>{item.title} </H3>
                        <Text style={{ fontSize: 14, color: '#7a7a7a',}}> {item.author} </Text>
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
    }

    render() {
        return ( this.state.isLoading ?
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View> :
            <View style={styles.container}>
                <View style={styles.viewlocation}>
                    <CommonText text={'สถานที่ใกล้เคียง'} />
                </View>

                <Item>
                    <Icon active name="search" />
                    <Input style={{paddingLeft:30}} placeholder="ค้นหาสถานที่ใกล้เคียง" />
                </Item>

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />


                <Button  full light >
                    <CommonText text={' เพิ่มพิกัดใหม่'} />
                </Button>
            </View>
        )
    }
}


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

export default FormLiteScreen;
