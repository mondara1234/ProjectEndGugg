import React from 'react';
import {View, Text} from 'react-native';
import {H1} from 'native-base';
import  CommonText from '../../common/components/CommonText';

class FormDateScreen extends React.PureComponent {
    constructor(props){
        super(props)
        this.state ={
            time: '' ,
            dates: '',
        }
    }

    componentDidMount() {
        this.Clock = setInterval( () => this.GetTime(), 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.Clock);
    }

    GetTime() {
        var date, hour, minutes, seconds, day, myday, mydate, month, mymonth, fullTime, fulldate;

        date    = new Date();
        hour    = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        day     = date.getDay() ;
        mydate  = date.getDate() ;
        month   = date.getMonth()+1;

        if(minutes < 10)
        { minutes = '0' + minutes.toString();}
        if(seconds < 10)
        { seconds = '0' + seconds.toString();}
        if(mydate  < 10)
        {     day = '0' + day.toString();}

        if(day == '1'){
            myday = 'จันทร์'
        }else if (day == '2'){
            myday = 'อังคาร'
        }else if (day == '3'){
            myday = 'พุธ'
        }else if (day == '4'){
            myday = 'พฤหัสบดี'
        }else if (day == '5'){
            myday = 'ศุกร์'
        }else if (day == '6'){
            myday = 'เสาร์'
        }else {
            myday = 'อาทิตย์'
        }

        if(month == '1'){
            mymonth = 'ม.ค'
        }else if (month == '2'){
            mymonth = 'ก.พ'
        }else if (month == '3'){
            mymonth = 'มี.ค'
        }else if (month == '4'){
            mymonth = 'เม.ย'
        }else if (month == '5'){
            mymonth = 'พ.ค'
        }else if (month == '6'){
            mymonth = 'มิ.ย'
        } else  if(month == '7'){
            mymonth = 'ก.ค'
        }else if (month == '8'){
            mymonth = 'สิ.ย'
        }else if (month == '9'){
            mymonth = 'ก.ย'
        }else if (month == '10'){
            mymonth = 'ตุ.ค'
        }else if (month == '11'){
            mymonth = 'พ.ย'
        }else {
            mymonth = 'ธ.ค'
        }

        fulldate = 'วัน' + '' + myday.toString() + ' ' + mydate.toString() + ' ' + mymonth.toString();
        fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString();

        this.setState({
            dates: fulldate,
            time: fullTime
        });
    }

    render() {
        return (
            <View>

            <CommonText text={this.state.dates}/>
            <H1 style={{textAlign:'center'}}> {this.state.time} </H1>

            </View>
        )
    }
};

export default FormDateScreen;
