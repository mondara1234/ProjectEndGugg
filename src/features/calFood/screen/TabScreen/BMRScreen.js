import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Container, Content, Picker, Form } from 'native-base';

class BMRScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            kk: '',
            tt: '',
            age: '',
            sex: 'Select',
            BMR: '', //คำนวณBMR ไม่รวม การออกกกำลังกาย
            sum: '',  //คำนวณTEDD BMR * การออกกกำลังกาย
        }
    }

    onValueChangeSex(value: string) { //รับค่า value จาก dropdown ของ SEX
        this.setState({
            sex: value
        });
    }

    calFunction = () =>{
        let kk = this.state.kk; // น้ำหนัก
        let tt = this.state.tt; //ส/่วนสูง
        let age = this.state.age; //อายุ
        const sex = this.state.sex; //เพศ

        if(kk === ''||tt === ''||age === '') {
            alert('กรุณากรอกข้อมูลให้ครบ')
        }else if(sex === 'Select'){
            alert('กรุณาเลือกเพศ')
        }else if(sex === 'man'){
            let BMR_man = 66 + (13.7 * kk)+(5 * tt) - (6.8 * age);
            this.setState({
                BMR: BMR_man
            });
        }else if(sex === 'gral') {
            let BMR_gral = 665 + (9.6 * kk) + (1.8 * tt) - (4.7 * age);

            this.setState({
                BMR: BMR_gral
            });
        }
    };

    render() {
        return (
            <Container>
                <Text style={styles.headerText}>{'คำนวณพลังงานที่ร่างกายต้องการในแต่ละวัน'}</Text>
                <View style={styles.containerView}>
                    <Content>
                    <View style={styles.container}>
                        <Text style={styles.textTitle}> {'น้ำหนัก'} </Text>
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid= "rgba(0,0,0,0)"
                               placeholder= "น้ำหนักของคุณ"
                               placeholderTextColor = "#000000"
                               selectionColor= "#000000"
                               keyboardType= "number"//ใช้ไม่ถูก
                               onChangeText={kk =>this.setState({ kk })}
                    />
                        <Text  style={{fontSize: 18}}> {'กิโลกรัม'} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textTitle}> {'ส่วนสูง'} </Text>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid= "rgba(0,0,0,0)"
                                   placeholder= "ส่วนสูงของคุณ"
                                   placeholderTextColor = "#000000"
                                   selectionColor= "#000000"
                                   keyboardType= "number"//ใช้ไม่ถูก
                                   onChangeText={tt =>this.setState({ tt })}
                        />
                        <Text style={{fontSize: 18}}> {'เซนติเมตร'} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textTitle}> {'อายุ'} </Text>
                        <TextInput style={[styles.inputBox,{marginLeft: 40}]}
                                   underlineColorAndroid= "'rgba(0,0,0,0)"
                                   placeholder= "อายุของคุณ"
                                   placeholderTextColor= "#000000"
                                   selectionColor= "#000000"
                                   keyboardType= "number"//ใช้ไม่ถูก
                                   onChangeText= {age =>this.setState({ age })}
                        />
                        <Text style={{fontSize: 18}}> {'ปี'} </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textTitle}> {'เพศ'} </Text>
                        <Form>
                            <Picker
                                mode="dropdown"
                                style={{ width: 150, marginLeft: 40}}
                                selectedValue={ this.state.sex }
                                onValueChange={ this.onValueChangeSex.bind(this) }
                            >
                                <Picker.Item value="Select" label= "กรุณาเลือกเพศ" />
                                <Picker.Item value="man"    label= "ชาย" />
                                <Picker.Item value="gral"   label= "หญิง" />
                            </Picker>
                        </Form>
                    </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button} onPress={this.calFunction}>
                                <Text style={styles.buttonText}> {'คำนวณ'} </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize: 15}}> {'พลังงานที่ร่างกายต้องการ(ไม่นับออกกำลังกาย) : '} </Text>
                        <View style={styles.container}>
                            <Text style={styles.textsum}>  {this.state.BMR} </Text>
                            <Text style={{fontSize: 15}}> {'แคลรอรี่'} </Text>
                        </View>
                    </Content>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerView : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colors: {
        backgroundColor: '#a7aca7',
        width: 70,
        margin: 3
    },
    inputBox: {
        width: 130,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#d0001b',
        marginVertical: 10,
        marginHorizontal: 20
    },
    buttonView:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    textTitle: {
        fontSize: 18,
        marginLeft: 20
    },
    textsum: {
        fontSize: 18,
        marginHorizontal: 10,
        borderWidth: 1,
        width: 150,
        height: 40
    },
    headerText:{
        fontSize: 22
    },

});

export default BMRScreen;
