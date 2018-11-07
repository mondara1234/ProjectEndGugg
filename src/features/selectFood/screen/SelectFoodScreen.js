import React from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import { getNews, getRouteName } from "../../User/redux/actions";
import * as API from "../../User/api/api";
import { FOOD_SHOW_DETAIL_SCREEN } from "../router";
import { getUsers, contains } from "./api/index";

class SelectFoodScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            error: null,
            data: [],
            fullData: [],
            query: '',
            select: 'select'
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
        const screen = 'SELECT_FOOD_SCREEN';
        this.props.RouteName(screen);
    }

    //คำสั่งส่งค่าtextไปทำงานกับData
    makeRemoteRequest = () => {
        this.setState({ loading: true });

        getUsers(20, this.state.query)
            .then(users => {
                this.setState({
                    loading: false,
                    data: users,
                    fullData: users
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    //คำสั่งกรอกข้อความแล้วหาเลย
    handleSearch = text => {
      const formatQuery = text.toLowerCase();
      const data =_.filter(this.state.fullData, user =>{
          return contains(user, formatQuery);
    });
        this.setState({query: formatQuery, data}, () => this.makeRemoteRequest());
    };

    // เส้นบรรทัด
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#d0001b",
                    marginLeft: "14%"
                }}
            />
        );
    };

    buttonPress(item) {
        console.log('called',item);

        {this.props.navigation.navigate({
            routeName: 'FOOD_SHOW_DETAIL_SCREEN' ,
            params: {
                data: item,
                otherParam: 'อื่นๆ'
            }
        })}
    }

    render() {
        console.log('text:' + this.state.query );
        console.log('navigation:',this.props.navigation.state.routeName);
        console.log('key:',this.props.navigation.state.key);

        return (
            <View style={{flex:1}}>
                <SearchBar
                    ref={search => this.search = search}
                    placeholder="ชื่ออาหาร"
                    round
                    showLoadingIcon={this.state.query ? true : false}
                    clearIcon={{ color: 'red' }}
                    onChangeText={this.handleSearch}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            titleStyle={{ color: 'white', fontWeight: 'bold' }}
                            subtitleStyle={{ color: 'white' }}
                            subtitle={item.calorie}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0, backgroundColor: '#373a31'}}
                            onPressRightIcon={(item) => this.buttonPress(item)}
                            badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                        />
                    )}
                    keyExtractor={item => item.calorie}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

SelectFoodScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: <CommonText text= {'ค้นหาอาหารมีฟังชั่น adminแก้ไขข้อมูลได้'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

function mapStateToProps(state) {
    return{
        servers: state.data
    };
}

export default connect(mapStateToProps,
    (dispatch) => ({
        FETCH_DATA: bindActionCreators(getNews, dispatch),
        RouteName: bindActionCreators(getRouteName, dispatch),
    })
)(SelectFoodScreen);
