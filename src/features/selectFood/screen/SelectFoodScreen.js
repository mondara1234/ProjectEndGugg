import React from 'react';
import _ from "lodash";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { getUsers, contains } from "./api/index";
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class SelectFoodScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            query: '',
            fullData: []
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
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
      const  data  =_.filter(this.state.fullData, user =>{
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

    //คำสั่งค้นหาฐานข้อมูลโดยเช้ดจากชื่อ
    mondara = (item) => {
        if(item.name.first === 'eva') {
            alert('olooooooo')
        }else{
            alert(item.name.first)
        }
    };

    render() {
        console.log('text:' + this.state.query );
        return (
            <View style={{flex:1}}>
                <SearchBar
                    ref={search => this.search = search}
                    placeholder="กรอกข้อความ"
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
                                subtitle={item.email}
                                avatar={{ uri: item.picture.thumbnail }}
                                containerStyle={{ borderBottomWidth: 0, backgroundColor: '#373a31'}}
                                onPressRightIcon={() => this.mondara(item)}
                                badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                            />
                        )}
                        keyExtractor={item => item.email}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
            </View>
        );
    }
}


SelectFoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'ค้นหาอาหาร'} />,
    headerLeft: <HeaderLeftMenu onPress={() => navigation.navigate('DrawerOpen')} />
});

export default SelectFoodScreen;
