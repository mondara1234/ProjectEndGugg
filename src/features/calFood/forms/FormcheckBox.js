import React, { Component } from 'react';
import { Platform, View, Text, CheckBox } from 'react-native';

let tempCheckValues = [];
class FormcheckBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkBoxChecked: []
        }
    }

    checkBoxChanged(id, value) {

        this.setState({
            checkBoxChecked: tempCheckValues
        })

        let tempCheckBoxChecked = this.state.checkBoxChecked;
        tempCheckBoxChecked[id] = !value;

        this.setState({
            checkBoxChecked: tempCheckBoxChecked
        })

    }

    render() {

        const products = [{
            id: 1,
            value:'ชาย'
        },
            {
                id: 2,
                value: 'หญิง'
            }];

        return (

            products.map((val) => {

                    { tempCheckValues[val.id] = false }

                    return (
                        <View style={{width: 250, height: 80}}>
                            <View key={val.id} style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    value={this.state.checkBoxChecked[val.id]}
                                    onValueChange={() => this.checkBoxChanged(val.id, this.state.checkBoxChecked[val.id])}
                                />
                                <Text>{val.value}</Text>
                            </View >
                        </View>

                    )

                }

            )

        );
    }
}

export default FormcheckBox;
