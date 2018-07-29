import React from 'react';
import  {Text,Alert} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

class FormButtonGroup extends React.PureComponent {
    constructor () {
        super()
        this.state = {
            selectedIndex: 3

        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        Alert.alert(
            'Alert Title',
            'INBITZTH',
            [   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'มึงจะกดไหม', onPress: () =>  Alert.alert(
                        'กดOKแล้ว')},
            ],
            { cancelable: false,
            tintColor:'#ff5234'}
        )
    }


    render() {
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const { selectedIndex } = this.state
        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 30, backgroundColor: "#f2f2f2"}}
                selectedButtonStyle={{backgroundColor: "#ff2525"}}
                 />
        )
    }
};
const
    component1 = () => <Text>Hello</Text>
const
    component2 = () => <Text>World</Text>
const
    component3 = () => <Text>ButtonGroup</Text>

export default FormButtonGroup;
