
import React from 'react';
import {NavigationActions} from 'react-navigation';
import { styles as s } from 'react-native-style-tachyons';
import { Container, Content, H3, Left, Thumbnail, Right } from 'native-base';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SideMenu.style';
import {SELECT_FOOD_SCREEN} from "../../selectFood/router";
import {HISTORY_SCREEN} from "../../history/router";
import {LIST_FOOD_SCREEN} from "../../listFood/router";

class Sideber extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { navigate } = this.props.navigation;

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
                            <Right>
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
                            style={styles.listItem}
                            onPress={() => {
                                navigate('DASHBOARD')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="home" />
                            <Text style={styles.styleNameicon}> {'หน้าหลัก'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('QRCODE_SCREEN')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="user" />
                            <Text style={styles.styleNameicon}> {'User'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('SELECT_FOOD_SCREEN')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="search" />
                            <Text style={styles.styleNameicon}> {'ค้นหาอาหาร'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('SCANQR_SCREEN')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="camera" />
                            <Text style={styles.styleNameicon}> {'สแกนQRcode'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('LIST_FOOD_SCREEN')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="list" />
                            <Text style={styles.styleNameicon}> {'List'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('HISTORY_SCREEN')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="history" />
                            <Text style={styles.styleNameicon}> {'ประวัติการใช้งาน'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                navigate('QRCODE_SCREEN')
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

export default Sideber;