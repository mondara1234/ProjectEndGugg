import PropTypes from 'prop-types';
import React from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import { styles as s } from 'react-native-style-tachyons';
import { Container, Content, H3,ListItem, Left, Thumbnail, Right, Body } from 'native-base';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DASHBOARD } from '../router';

class Sideber extends React.Component {
    constructor(props) {
        super(props);
    }
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render () {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <View style={[s.flx_i, s.jcc, s.aic, s.pt4, s.pb2]}>
                            <ListItem thumbnail
                                      style={styles.listCompany}>
                                <Thumbnail
                                    square
                                    source={require('../../../../pulic/assets/images/logo1.png')}
                                    style={{ width: 30, height: 30, margin: 5}}
                                />
                                <H3 style={{fontSize: 16, color: '#020202', marginBottom: 10}}> {'Company'} </H3>
                            </ListItem>
                            <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail
                                            source={{uri: 'https://www.rendimento.com.br/wp-content/uploads/2017/12/depoimento-3.png'}}
                                            style={{ width: 60, height: 60, margin: 5}}
                                        />
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 14, color: '#7a7a7a',}}> {'first_name'} {'last_name'}</Text>
                                        <Text style={{ fontSize: 14, color: '#7a7a7a',}}> {'กำลังใช้งาน'} </Text>
                                    </Right>
                            </ListItem>
                        </View>
                        <TouchableOpacity style={styles.managerView}>
                            <Icon style={styles.managerIcon} name="user" size={33} color={'white'} />
                            <View style={s.ml3}>
                                <Text style={{fontSize: 16, color: '#020202', marginLeft: 10}}> {'เมนู'} </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen('DASHBOARD')
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="home" />
                            <Text> {'หน้าหลัก'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen(DASHBOARD)
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="user" />
                            <Text> {'User'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen({ routeName: DASHBOARD })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="envelope" />
                            <Text> {'กล่องข้อความ'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen({ routeName: DASHBOARD })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="list" />
                            <Text> {'List'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen({ routeName: DASHBOARD })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="location-arrow" />
                            <Text> {'Map'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen({ routeName: DASHBOARD })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="calendar" />
                            <Text> {'เวลา'} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigateToScreen({ routeName: DASHBOARD })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="qrcode" />
                            <Text> {'QR Code'} </Text>
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
                            <Text> {'ออกจากระบบ'} </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
                <View style={styles.footerContainer}>
                    <Text>{'ติดต่อกับเรา'}</Text>
                </View>
            </Container>
        );
    }
}

export default Sideber;