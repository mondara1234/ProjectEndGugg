import React from 'react';
import { View, Text, StyleSheet, FlatList,ActivityIndicator } from 'react-native';
import { Container, Button, H3, ListItem, Body } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import userHistory from '../api/userHistory';
import CommonText from '_features/common/components/CommonText';
import HeaderLeftMenu from '_features/common/components/HeaderLeftMenu';
import { DASHBOARD } from '_features/common/router';

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
                    <H3 style={{fontSize: 16, color: '#020202', marginBottom: 10}}> {item.history.detile} </H3>
                    </Body>
                </ListItem>
            </View>
        )
    };

    renderSeparator = () => {
        return(
            <View
                style = {{height: 1 , width: '100%', backgroundColor: '#080808'}}>
            </View>
        )
    };

    render() {
        return (
            this.state.isLoading ?
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                : <View style={styles.container}>
                    <View style={styles.viewlocation}>
                        <Text style={{fontSize: 18}}> {'ประวัติการใช้งาน'} </Text>
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

detleHistoryScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: <CommonText text= {'ประวัติการใช้งาน'} />,
    headerRight: <HeaderLeftMenu
        icon={'home'}
        onPress={()=> {
            navigation.dispatch(
                NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: DASHBOARD })
                    ]
                })
            );
        }}
    />
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


export default connect (
    null,
    (dispatch) => ({
        navigationActions: bindActionCreators(NavigationActions, dispatch)
    })
)(detleHistoryScreen);
