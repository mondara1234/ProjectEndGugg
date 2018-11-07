import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Button, Item, Input, Icon, H3, Body, Card, CardItem } from 'native-base';
import CommonText from '_features/common/components/CommonText';
import HeaderLeftMenu from '_features/common/components/HeaderLeftMenu';
import userHistory from '../api/userHistory';
import { DETLEHISTORY_SCREEN } from "../router";

class HistoryScreen extends React.PureComponent {
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
            <Card style={{flex: 1 ,width: '100%', backgroundColor: index % 2 == 0 ? "#8ef7ff" : "#ff78f4"}}>
                <CardItem button
                          onPress={() =>
                              this.props.navigation.navigate(
                                  'DETLEHISTORY_SCREEN',
                                  {mondara: item.dayhistory}
                              )
                          }
                >
                    <Body>
                        <H3 style={{fontSize: 16, color: '#020202', marginBottom: 10}}> { item.user.name } </H3>
                        <Text style={{ fontSize: 14, color: '#7a7a7a',}}> {item.dayhistory} </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    };

    render() {
        return (
            this.state.isLoading ?
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator
                        size="large"
                        color="#330066"
                        animating
                    />
                </View>
                : <View style={styles.container}>
                    <View style={styles.viewlocation}>
                        <Text style={{fontSize: 18}}> {'ประวัติการใช้งาน'} </Text>
                    </View>
                    <Item>
                        <Icon active name="search" />
                        <Input style={{paddingLeft:30}} placeholder="ค้นหาวันที่ xx/xx/xxxx" />
                    </Item>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                    />
                    <Button  full light >
                        <Text> {'ลบประวิติ'} </Text>
                    </Button>
                </View>
        )
    }
}

HistoryScreen.navigationOptions = ({navigation}) => ({
    headerTitle: <CommonText text= {'ประวัติการใช้งาน'} />,
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

export default HistoryScreen;
