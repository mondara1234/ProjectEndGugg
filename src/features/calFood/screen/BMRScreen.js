import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Container, Content, Picker, Form } from 'native-base';

class BMRScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            kk: '',
            tt: '',
            sex: 'Select',
            age: '',
            BMR: 'แสดงผล',
            selected: undefined
        }
    }

    onValueChange(value: string) {
        this.setState({
            sex: value
        });
    }

    calFunction = () =>{
        let kk = this.state.kk ;
        let tt = this.state.tt ;
        let age = this.state.age ;
        const sex = this.state.sex ;

        if(sex === 'man'){
            const BMR_man = 66 + (13.7 * kk)+(5 * tt) - (6.8 * age);
            this.setState({
                BMR: BMR_man
            });
        }else if(sex === 'gral') {
            const BMR_gral = 665 + (9.6 * kk) + (1.8 * tt) - (4.7 * age);
            this.setState({
                BMR: BMR_gral
            });
        }else if(sex === 'Select'){
            alert('กรุณาเลือกเพศด้วยครับ')
        }

    };

    render() {
        return (
            <Container>
                <Text style={{fontSize: 22}}>{'คำนวณพลังงานที่ร่างกายต้องการในแต่ละวัน'}</Text>
                <View style={styles.containerView}>
                    <Content>
                    <View style={styles.container}>
                        <Text style={{fontSize: 22}}>{'น้ำหนัก'}</Text>
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="น้ำหนักของคุณ"
                               placeholderTextColor = "#000000"
                               selectionColor="#000000"
                               keyboardType="number"
                               onChangeText={kk =>this.setState({kk})}
                    />
                        <Text  style={{fontSize: 22}}>{'กิโลกรัม'}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={{fontSize: 22}}>{'ส่วนสูง'}</Text>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="ส่วนสูงของคุณ"
                                   placeholderTextColor = "#000000"
                                   selectionColor="#000000"
                                   keyboardType="number"
                                   onChangeText={tt =>this.setState({tt})}
                        />
                        <Text style={{fontSize: 22}}>{'เซนติเมตร'}</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={{fontSize: 22}}>{'อายุ'}</Text>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="อายุของคุณ"
                                   placeholderTextColor = "#000000"
                                   selectionColor="#000000"
                                   keyboardType="number"
                                   onChangeText={age =>this.setState({age})}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={{fontSize: 22}}>{'เพศ'}</Text>
                        <Form>
                            <Picker
                                mode="dropdown"
                                style={{ width: 200 }}
                                selectedValue={this.state.sex}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="กรุณาเลือกเพศ" value="Select" />
                                <Picker.Item label="ชาย" value="man" />
                                <Picker.Item label="หญิง" value="gral" />
                            </Picker>
                        </Form>
                    </View>
                        <Text style={{fontSize: 22}}>{this.state.sex}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 15}}>{'พลังงานที่ร่างกายต้องการ : '}</Text>
                            <Text style={{fontSize: 18}}>{this.state.BMR}</Text>
                        </View>
                    <TouchableOpacity style={styles.button} onPress={this.calFunction}>
                        <Text style={styles.buttonText} > {'คำนวณ'} </Text>
                    </TouchableOpacity>
                    </Content>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerView : {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    colors: {
        backgroundColor: '#a7aca7',
        width: 70,
        margin: 3
    },
    inputBox: {
        width: 100,
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#d0001b',
        marginVertical: 10,
        marginHorizontal: 20
    },
    button: {
        width:150,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});

export default BMRScreen;
