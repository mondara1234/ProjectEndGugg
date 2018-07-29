import PropTypes from 'prop-types';
import React from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import { styles as s } from 'react-native-style-tachyons';
import { Container, Content, Thumbnail } from 'native-base';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonText from "../components/CommonText";

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
                    </View>
                </Content>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>
            </Container>
        );
    }
}

export default Sideber;