import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { styles as s } from 'react-native-style-tachyons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation'
import CommonText from '../components/CommonText';
import Trans from './Trans';


class Sidebar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <Content style={[s.bg_white]}>
                    <View style={[s.flx_i, s.jcc, s.aic, s.pt4, s.pb2]}>
                        <Thumbnail source={{uri: 'https://www.rendimento.com.br/wp-content/uploads/2017/12/depoimento-3.png'}} />
                        <CommonText
                            text={'first_name'}
                            weight={'bold'}
                        />
                        <CommonText
                            text={'last_name'}
                            style={styles.textLeftMinus}
                        />
                        <CommonText
                            text={'ตำแหน่ง รอ API'}
                            weight={'light'}
                            size={20}
                        />
                        <CommonText
                            text={'3PProfessional'}
                            weight={'light'}
                            size={20}
                        />
                    </View>
                    <TouchableOpacity style={styles.managerView}>
                        <Icon style={styles.managerIcon} name="user" size={33} color={'white'} />
                        <View style={s.ml3}>
                            <CommonText
                                text={'เมนูสำหรับ'}
                                color={'white'}
                                size={22}
                            />
                            <CommonText
                                text={'Manger'}
                                weight={'bold'}
                                color={'white'}
                                size={22}
                                style={styles.textLeftMinus}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={[s.pl3]}>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                   //     NavigationActions.navigate({ routeName: DASHBOARD })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="home" />
                            <Trans t={'home.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                     //   NavigationActions.navigate({ routeName: TAKE_LEAVE_REQUEST_FIRST_STEP_CREATE })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="envelope" />
                            <Trans t={'take_leave_request.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                     //   NavigationActions.navigate({ routeName: TAKE_LEAVE_REQUEST })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="list" />
                            <Trans t={'take_leave_request.list_title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                    //    NavigationActions.navigate({ routeName: LOCATION })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="location-arrow" />
                            <Trans t={'location.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                    //    NavigationActions.navigate({ routeName: HOLIDAY })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="calendar" />
                            <Trans t={'holiday.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                      //  NavigationActions.navigate({ routeName: QR_PROFILE })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="qrcode" />
                            <Trans t={'user.profile.my_qr_title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                        //NavigationActions.navigate({ routeName: Check_in_map_Screen })
                                    ]
                                })
                            }}
                        >
                            <Icon style={styles.listItemIcon} name="user" />
                            <Trans t={'user.profile.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() =>
                                Alert.alert(
                                    'ยืนยันหน่อยน้าา',
                                    'ต้องการออกจากระบบมั้ยจ๋ะ',
                                    [
                                        {text: 'ออกสิ', onPress: () => this.props.logout.request() },
                                        {text: 'ไม่ดีกว่า'}
                                    ]
                                )
                            }
                        >
                            <Icon style={styles.listItemIcon} name="sign-out" />
                            <Trans t={'user.logout.title'} size={22} style={s.ml2} />
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    managerView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#991b1f'
    },
    managerIcon: {
        width: 50,
        textAlign: 'right'
    },
    textLeftMinus: {
        marginTop: -10,
    },
    listItem: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10
    },
    listItemIcon: {
        width: 30,
        color: '#991b1f',
        fontSize: 20,
    },
});

export default Sidebar;