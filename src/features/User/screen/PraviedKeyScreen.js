import React from "react";
import { Keyboard, View, StyleSheet, TouchableOpacity, Alert, Dimensions, DeviceEventEmitter } from 'react-native';
import { Container,Content, Button } from 'native-base';
import CommonText from "../../common/components/CommonText";
import VirtualKeyboard from '../components/VirtualKeyboard';

class PraviedKeyScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            passcode: []
        };
    }

    _onFinishCheckingCode() {
        let checkData = '123456';   //'เช็ดกฟะฟมีค่าไหม';
        let checkPass = this.state.passcode[0]+
                        this.state.passcode[1]+
                        this.state.passcode[2]+
                        this.state.passcode[3]+
                        this.state.passcode[4]+
                        this.state.passcode[5];

        if (checkData === '') {
            Alert.alert(
                'Confirmation Code',
                'Set the code successfully!',
                [{text: 'OK'}],
                this.setState({
                    passcode: []
                })
            );
        }else if (checkPass === checkData) {
            Alert.alert(
                'Confirmation Code',
                'Successful!',
                [{text: 'OK'}],
                this.setState({
                    passcode: []
                })
            );
        } else {
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                this.setState({
                    passcode: []
                })
            );
        }
    }

    _checkText = (val) => {
        if(val !== 'back'){
            const addPass = [...this.state.passcode];
            addPass.push(val);
           this.setState({
                passcode: addPass
            });
        }else {
            const copyArr = [...this.state.passcode];
            copyArr.pop();
            this.setState({
                passcode: copyArr
            });
        }
    };

    render() {
        const checkText = this.state.passcode[5] ? this._onFinishCheckingCode() : '';
        return (
            <Container style={styles.container}>
                <CommonText text={'กรอกรหัสส่วนตัว'} size={50} />
                <View style={styles.borderWrapper}>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[0] ? 'black' : 'white'}]} />
                    </View>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[1] ? 'black' : 'white'}]} />
                    </View>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[2] ? 'black' : 'white'}]} />
                    </View>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[3] ? 'black' : 'white'}]} />
                    </View>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[4] ? 'black' : 'white'}]} />
                    </View>
                    <View style={styles.borderView}>
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[5] ? 'black': 'white'}]} >
                        </View>
                    </View>
                </View>
                <View style={styles.viewKeyboard}>
                    <VirtualKeyboard
                        pressMode={'string'}
                        color={'gray'}
                        applyBackspaceTint={true}
                        decimal={false}
                        onPress={(val) => this._checkText(val)}
                    />
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60
    },
    borderWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: 280,
        height: 60,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 50

    },
    borderView:{
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor:'black',
        marginRight:10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkView:{
        width: 20,
        height: 20,
        borderRadius: 50
    },
    viewKeyboard:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: '10%'
    }
});

export default PraviedKeyScreen;
