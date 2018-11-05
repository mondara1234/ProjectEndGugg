
import React from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import { styles as s } from 'react-native-style-tachyons';
import { Container, Content, Thumbnail, ListItem, Left, Body } from 'native-base';
import { Alert, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import themeVariables from '../../../../native-base-theme/variables/platform';
import {DASHBOARD} from "../../common/router";
import {PROFILE_LIST} from "../../User/router";
import {SELECT_FOOD_SCREEN} from "../../selectFood/router";
import {HISTORY_SCREEN} from "../../history/router";
import {SCANQR_SCREEN} from "../../qrcodeScanner/router";
import {CAL_FOOD_SCREEN} from "../../calFood/router";
import {bindActionCreators} from "redux";
import * as API from "../../User/api/api";
import { APP_VERSION_TEXT } from '../../../common/constants';
import {connect} from "react-redux";
import CommonText from '../../common/components/CommonText';

class Sideber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuActive: 'home',
        };
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // One possible fix...
    //     const routeName = this.props.routerName;
    //     if (this.state.screebSideber !== routeName ) {
    //         this.setState({ screebSideber: routeName });
    //     }
    // }

    _renderItem = ({item}) => {
        const isActive = this.state.menuActive === item.name;
        const fontColor = isActive ? '#fff' : '#2a9998';
        const isAndroid = themeVariables.platform === 'android';
        const { navigate } = this.props.navigation;

        return (
            <ListItem
                style={[
                    styles.listItem,
                    s.ml0,
                    {borderBottomWidth: item.name === 'logout' ? 0 : 1, backgroundColor: isActive ? '#2a9998' : '#fff'}
                ]}
                icon
                onPress={() => {
                    this.setState({menuActive: item.name});

                    if (item.name === 'logout') {
                        Alert.alert(
                            'ออกจากระบบ',
                            'ต้องการออกจากระบบ ?',
                            [
                                {text: 'ตกลง', onPress: () => alert('vvvvv')},
                                {text: 'ยกเลิก'}
                            ]
                        )
                    } else {
                        navigate({
                            routeName: `${item.route}`,
                            params:  item.params
                        })
                        /*this.props.NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({
                                    routeName: item.route,
                                    params:  item.params
                                })
                            ]
                        }) //มาทำแบบนี้ให้ได้*/
                    }
                }}
            >
                <Left>
                    <Icon
                        style={[styles.listItemIcon, {color: fontColor}]}
                        name={item.icon}
                    />
                </Left>
                <Body style={s.b__transparent}>
                <CommonText text={`${item.name}.title`} style={[styles.fontBase, s.ml2, {color: fontColor}]} weight={isAndroid ? 'bold' : null} />
                </Body>
            </ListItem>
        )
    }

    render () {
        //const { first_name, last_name, employee_id, manager } = this.props.users;
        const profileImage = 'https://randomuser.me/api/portraits/thumb/men/97.jpg';

        const menus = [
            {name: 'home', icon: 'home', route: DASHBOARD},
            {name: 'scanQRcode', icon: 'camera', route: SCANQR_SCREEN},
            {name: 'คำนวณ', icon: 'list', route: CAL_FOOD_SCREEN, params: {isRootPage: true}},
            {name: 'ประวัติการใช้งาน', icon: 'history', route: HISTORY_SCREEN, params: {isRootPage: true}},
            {name: 'ค้นหาอาหาร', icon: 'search', route: SELECT_FOOD_SCREEN},
            {name: 'user_profile', icon: 'user-circle', route: PROFILE_LIST},
            {name: 'logout', icon: 'sign-out-alt', route: null}
        ];

        return (
            <Container>
                <TouchableOpacity
                    style={styles.info}
                    onPress={() => {
                        this.props.NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName: PROFILE_LIST})
                            ]
                        })
                    }}
                >
                    <Thumbnail
                        source={
                            profileImage
                                ? {uri: profileImage}
                                : require('../../../../pulic/assets/images/user-default.png')

                        }
                        style={styles.userThumb}
                    />
                    <CommonText
                        text={'first_name'}
                        style={[styles.fontBase, s.b]}
                    />
                    <CommonText
                        text={'last_name'}
                        style={[styles.fontBase, styles.textLeftMinus]}
                    />
                    <CommonText
                        text={`รหัสพนักงาน: ${'employee_id'}`}
                        style={[styles.fontBase, s.fw3, {fontSize: 16}]}
                    />
                </TouchableOpacity>
                <Content style={[s.bg_white]}>
                    <FlatList
                        data={menus}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Content>
                <View style={styles.footer}>
                    <CommonText text={'กั้ก จำกัด'} style={styles.footerFont} />
                    <CommonText text={`version ${APP_VERSION_TEXT}`} style={[styles.footerFont, {marginTop: -5}]} />
                </View>
            </Container>
        );
                      {/*  <TouchableOpacity
                            style={[styles.listItem,{backgroundColor: this.state.screebSideber === 'QRCODE' ? 'rgba(111, 165, 255, 0.5)' : null}]}
                            onPress={() => {
                                navigate('QRCODE_SCREEN');
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="qrcode" />
                            <Text style={styles.styleNameicon}> {'QR Code'} </Text>
                        </TouchableOpacity>*/}
    }
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    managerView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    managerIcon: {
        width: 50,
        textAlign: 'right',
        fontSize: 24,
        color: '#000',
    },
    textLeftMinus: {
        marginTop: -5,
        fontSize: 18,
    },
    listItem: {
        flexDirection: 'row',
        paddingLeft: 30,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        alignItems: 'center',
    },
    listItemIcon: {
        width: 30,
        color: '#991b1f',
        fontSize: 24,
    },
    footer: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        height: 50,
    },
    footerFont: {
        fontSize: 16,
        fontWeight: '300',
    },
    userThumb: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    fontBase: {
        color: '#991b1f',
        fontSize: 22,
        fontWeight: themeVariables.platform === 'ios' ? '600' : null
    }
});

function mapStateToProps(state) {
    return{
        routerName : state.routeName
    };
}

export default connect(
    mapStateToProps,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
        Flights_DATA: bindActionCreators(API.fetchTodo, dispatch),
    })
)(Sideber);