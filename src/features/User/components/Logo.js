import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images } from './images';
class Logo extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Image  style={{width:90, height: 90}}
                        source={Images.logo}
                />
                <Text style={styles.logoText}>{this.props.Title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)',
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default Logo;
