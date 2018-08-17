import React,{Component} from 'react';
import { StyleSheet,Text,TextInput,View,Button} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {counterIncrement, counterDecrement, counterClear, counterSet,countermodara} from './actions/index';

class Testcount extends Component{
    constructor(props){
        super(props);
        this.state={
          count: ''
        };
        this.onChengeText = this.onChengeText.bind(this);
    }

    onChengeText(number){
        const count = parseInt(number);
        this.props.SET_COUNTER(count);
        this.setState({count});
    }
    onClear(){
        this.props.CLEAR_COUNTER();
        this.setState({count : ''});
    }
    testIMG(){
        let cars = ["icon", "logo1", "user"];
        let text = "";
        let i;
        for (i = 0; i < cars.length; i++) {
            text += cars[i] + '\n';//+= เอาค่ามารวมกันยาวๆ
        }
        console.log(text);
    }
    testText(){
        let cars = ["icon", "logo1", "user"];
        let text = "";
        let i;
        for (i = 0; i < cars.length; i++) {
            text = cars[i]; //= เอามาทีละค่า
            this.props.ADDDATA_COUNTER(text)
        }
        console.log(text);
    }
        render(){
        console.log(this.props);
        const {container, countViewStyle, welcome, instructions} = styles;
        const data = this.props.server.serverdataSource[0];
        const data1 = this.props.server.serverdataSource[1];
        const data2 = this.props.server.serverdataSource[2];
        return(
            <View style={container}>
                <Button  onPress={()=>this.testText()} title="ShowData"/>
                <Text style={welcome}>array[0]: {data}</Text>
                <Text style={welcome}>array[1]: {data1}</Text>
                <Text style={welcome}>array[2]: {data2}</Text>
                <TextInput style={{width: 80, height:40, borderWidth:1}}
                           onChangeText={this.onChengeText}
                           value={this.state.count.toString()}
                />
                <View style={countViewStyle}>
                    <Button  onPress={this.props.INCRENENT_COUNTER} title="+"/>
                    <Text style={[welcome,{width: 80}]}> {this.props.count}</Text>
                    <Button  onPress={this.props.DECREMENT_COUNTER} title="-"/>
                </View>
                <Button  onPress={this.onClear} title="Clear"/>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"#97aeb0"
   },
    welcome:{
       fontSize: 20,
       textAlign:"center",
       marginVertical: 10
    },
    instructions:{
       textAlign:"center",
        backgroundColor:"#a8cccd",
        marginBottom:5
    },
    countViewStyle:{
       flexDirection:"row"
    }
});

function mapStateToProps(state) {
    return{
        count: state.counterreducer,
        server: state.serverreducer
    };
}

export default connect(mapStateToProps,
    (dispatch) => ({
        ADDDATA_COUNTER: bindActionCreators(countermodara, dispatch),
        NCRENENT_COUNTER: bindActionCreators(counterIncrement, dispatch),
        INCRENENT_COUNTER: bindActionCreators(counterIncrement, dispatch),
        DECREMENT_COUNTER: bindActionCreators(counterDecrement, dispatch),
        CLEAR_COUNTER: bindActionCreators(counterClear, dispatch),
        SET_COUNTER: bindActionCreators(counterSet, dispatch)
    })
)(Testcount);
