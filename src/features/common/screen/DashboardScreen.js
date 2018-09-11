import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text, Image } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base';
import {HISTORY_SCREEN} from "../../history/router";
import {SELECT_FOOD_SCREEN} from "../../selectFood/router";
import {LIST_FOOD_SCREEN} from "../../listFood/router";
import MenuItem from "../components/MenuItem";
import { getUsers } from "../../selectFood/screen/api";

const cards = [
    {
        text: 'Card 2',
        name: '3',
        image: require('../../../../pulic/assets/images/Boruto.jpg'),
    },
    {
        text: 'Card 4',
        name: 'One',
        image: require('../../../../pulic/assets/images/user.png'),
    },
    {
        text: 'Card One',
        name: '2',
        image: require('../../../../pulic/assets/images/List.jpg'),
    },
];

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
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

    renderItem =(item) => {
      return (
          <Card style={{ elevation: 3 }}>
              <CardItem>
                  <Left>
                      <Thumbnail source={item.image} />
                      <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                      </Body>
                  </Left>
              </CardItem>
              <CardItem cardBody>
                  <Image style={{ height: 100, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
              </CardItem>
          </Card>
      )
    };

    render() {
        return (
            <ImageBackground
                source={require('../../../../pulic/assets/images/Boruto.jpg')}
                style={styles.container}
            >
                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}> {"H O M E"} </Text>
                    </View>
                    <View style={styles.containerDeckSwiper}>
                        <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                            <Icon name="arrow-back" />
                        </Button>
                        <View style={styles.deckSwiperImg}>
                            <DeckSwiper
                                ref={(c) => this._deckSwiper = c}
                                dataSource={cards}
                                renderEmpty={() =>
                                    <View style={{ alignSelf: "center" }}>
                                        <Text>Over</Text>
                                    </View>}
                                renderItem={(item) => this.renderItem(item)}
                            />
                        </View>
                        <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                            <Icon name="arrow-forward" />
                        </Button>
                    </View>
                    <View style={styles.menuContainer}>
                        <MenuItem
                            itemImage={require('../../../../pulic/assets/images/Search.png')}
                            onPress={() => this.props.navigation.navigate( 'SELECT_FOOD_SCREEN' )}
                        />{/*ค้นหาด้วยการกรอกชื่ออาหาร*/}
                        <MenuItem
                            itemImage={require('../../../../pulic/assets/images/Scanner.png')}
                            onPress={() => this.props.navigation.navigate( 'SCANQR_SCREEN' )}
                        />{/*สแกนอาหารแล้วบอก calorie เป็นข้อความพร้อมเสียง*/}
                    </View>
                    <View style={styles.menuContainer}>
                        <MenuItem
                            itemImage={require('../../../../pulic/assets/images/List.jpg')}
                            onPress={() => this.props.navigation.navigate( 'LIST_FOOD_SCREEN' )}
                        />{/*แสดงรายการอาหารทั้งหมดแบบ List*/}
                        <MenuItem
                            itemImage={require('../../../../pulic/assets/images/History.png')}
                            onPress={() => this.props.navigation.navigate( 'HISTORY_SCREEN' )}
                        />{/*ประวัติการใช้งาน ในแต่ละวัน*/}
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

DashboardScreen.navigationOptions  = ({navigation}) => ({
    header: null
});

const windows = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: windows.width,
        height: windows.height
    },
    overlayContainer: {
        width: windows.width,
        height: windows.height,
        backgroundColor: 'rgba(47, 163, 218, 0.4)'
    },
    top: {
        marginTop: 20,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 25,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: 'rgba(255, 55, 255, 0.1)'
    },
    containerDeckSwiper:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20
    },
    deckSwiperImg:{
        flex: 1,
        height: 300
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    }

});

export default DashboardScreen;
