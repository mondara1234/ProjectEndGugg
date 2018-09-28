
import React from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import { styles as s } from 'react-native-style-tachyons';
import { Container, Content, H3, Left, Thumbnail, Right } from 'native-base';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SideMenu.style';
import {SELECT_FOOD_SCREEN} from "../../selectFood/router";
import {HISTORY_SCREEN} from "../../history/router";
import {LIST_FOOD_SCREEN} from "../../listFood/router";
import SelectFoodScreen from '../../selectFood/screen/SelectFoodScreen';
import DashboardScreen from '../screen/DashboardScreen';
import {getNews} from "../../User/redux/actions";
import {bindActionCreators} from "redux";
import * as API from "../../User/api/api";
import {connect} from "react-redux";

class Sideber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           screebSideber: ''
        };
    }


    componentDidUpdate(prevProps, prevState) {
        // One possible fix...
        const routeName = this.props.routerName;
        if (this.state.screebSideber !== routeName ) {
            this.setState({ screebSideber: routeName });
        }
    }


    render () {
        const { navigate } = this.props.navigation;

        console.log('screen', this.state.screebSideber);
        return (
            <Container>
                <Content>
                    <TouchableOpacity
                        style={styles.listCompany}
                        disabled={true}
                    >
                        <View style={styles.viewCompany}>
                            <Thumbnail
                                square
                                source={require('../../../../pulic/assets/images/logo1.png')}
                                style={styles.styleLogo}
                            />
                            <H3 style={styles.styleH3}> {'Company'} </H3>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={true}>
                        <View style={styles.viewCompany}>
                            <Left>
                                <Thumbnail
                                    source={{uri: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png'}}
                                    style={styles.styleImage}
                                />
                            </Left>
                            <Right badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}>
                                <Text style={styles.styleUser}> {'first_name'}   {'last_name'} </Text>
                                <Text style={styles.styleUser}> {'กำลังใช้งาน'} </Text>
                            </Right>
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.managerView}
                            disabled={true}
                        >
                            <Icon
                                style={styles.managerIcon}
                                name="user"
                                size={33}
                                olor={'white'}
                            />
                            <View style={s.ml3}>
                                <Text style={styles.styleMune}> {'เมนู'} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor:  this.state.screebSideber === 'DASHBOARD' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('DASHBOARD');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="home" />
                            <Text style={styles.styleNameicon}> {'หน้าหลัก'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'QR' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('QRCODE_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="user" />
                            <Text style={styles.styleNameicon}> {'User'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor:  this.state.screebSideber === 'SELECT_FOOD_SCREEN' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('SELECT_FOOD_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="search" />
                            <Text style={styles.styleNameicon}> {'ค้นหาอาหาร'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'SCANQR' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('SCANQR_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="camera" />
                            <Text style={styles.styleNameicon}> {'สแกนQRcode'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'LIST' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('LIST_FOOD_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="list" />
                            <Text style={styles.styleNameicon}> {'List'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'HISTORY' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('HISTORY_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="history" />
                            <Text style={styles.styleNameicon}> {'ประวัติการใช้งาน'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'QRCODE' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('QRCODE_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="qrcode" />
                            <Text style={styles.styleNameicon}> {'QR Code'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() =>
                                Alert.alert(
                                    'ออกจากระบบ',
                                    'คุณต้องการออกจากระบบหรือไม่',
                                    [
                                        {text: 'ต้องการ' },
                                        {text: 'ต้องการ'}
                                    ]
                                )
                            }
                        >
                            <Icon style={styles.listItemIcon} name="sign-out" />
                            <Text style={styles.styleNameicon}> {'ออกจากระบบ'} </Text>
                        </TouchableOpacity>
                </Content>
                <View style={styles.footerContainer}>
                    <Text> {'ติดต่อกับเรา'} </Text>
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        routerName : state.routeName
    };
}

export default connect(
    mapStateToProps,
    (dispatch) => ({
        Flights_DATA: bindActionCreators(API.fetchTodo, dispatch),
    })
)(Sideber);