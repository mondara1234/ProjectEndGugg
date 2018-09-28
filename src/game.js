import React from 'react';
import { View, Text , Button, FlatList } from 'react-native';

class game extends React.Component{

    constructor(){
        super();
        this.state={
            NumberHolder : []
        }
    }

    mondara(){
        for (let line = 1; line < 60; line++) {
            for (let i = 1; i < 29; i++) {
                let s = (Math.floor((Math.random() * 2) % 2)) ? "/" : "|";
                this.setState({
                    NumberHolder : this.state.NumberHolder + s
                });
                console.log(this.state.NumberHolder)
            }
        }
    };

    _renderItem = ({item}) => {
        return (
            <View>
               <Text>{item}</Text>
            </View>
        )
    };

 render(){

     return(
         <View>
             <Text>{this.state.NumberHolder}</Text>
             <Button title="Random " onPress={() => this.mondara()} />
             <FlatList
                 data={this.state.NumberHolder}
                 renderItem={this._renderItem}
             />
         </View>
     )

 }

}

export default game;