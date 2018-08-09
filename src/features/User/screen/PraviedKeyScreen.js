import React from "react";
import { Keyboard, View, StyleSheet, TouchableOpacity, Alert, Dimensions, DeviceEventEmitter } from 'react-native';
import { Container,Content, Button } from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';
import CommonText from "../../common/components/CommonText";
import VirtualKeyboard from '../components/VirtualKeyboard';

class PraviedKeyScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            textkey: '',
            passcode: [],
            oo: []
        };
    }

    _onFinishCheckingCode(isValid, code) {
        console.log(code);
        if (this.state.code == '') {
            Alert.alert(
                'Confirmation Code',
                'Set the code successfully!',
                [{text: 'OK'}],
                { cancelable: false }
            );
        }else if (!isValid) {
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                { cancelable: false }
            );
        } else {
            this.setState({ code: code });
            Alert.alert(
                'Confirmation Code',
                'Successful!',
                [{text: 'OK'}],
                { cancelable: false }
            );
        }
    }

    _checkText = (val) => {
        console.log(this.state.passcode.length);
        let checkTexts = [];
        if(val === 'back'){
            this.setState({
                passcode: [
                    ...this.state.passcode,val
                ]
            })
        }else {
            const copyArr = [...this.state.passcode];
            copyArr.pop();
            this.setState({
                passcode: copyArr
            });
        }
        this.setState({ passcode: checkTexts });
        console.log('checkTexts='+' '+checkTexts);
        console.log('passcode='+' '+this.state.passcode);
    }

    render() {
        const oo = [];

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
                        <View style={[styles.checkView,{backgroundColor: this.state.passcode[5] ? 'black' : 'white'}]} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            oo: [
                                ...this.state.oo,8
                            ]
                        });
                    }}
                >
                    <CommonText text={'11111'} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        const copyArr = [...this.state.oo];
                        copyArr.pop();
                        this.setState({
                            oo: copyArr
                        });
                    }}
                    style={{marginTop: 80}}
                >
                    <CommonText text={'11111'} />
                </TouchableOpacity>
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
    containerCodeInput: {
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderCodeInput: {
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        color: '#000'
    }
});

export default PraviedKeyScreen;
