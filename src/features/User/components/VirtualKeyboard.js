import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont5 from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class VirtualKeyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    Backspace() {
        return (
            <TouchableOpacity accessibilityLabel='backspace' style={styles.backspace} onPress={() => { this.onPress('back') }}>
                <IconFont5
                    size={33}
                    resizeMode='contain' style={this.props.applyBackspaceTint && ({ tintColor: this.props.color })}
                    name="md-backspace"
                />
            </TouchableOpacity>
        );
    }

    //รูปแบบแสดงของปุ่ม
    Cell(symbol) {
        return (
            <TouchableOpacity style={styles.cell} key={symbol} accessibilityLabel={symbol.toString()}
                              onPress={() => { this.onPress(symbol.toString()) }}>
                <Text style={[styles.number, { color: this.props.color }]}>{symbol}</Text>
            </TouchableOpacity>
        );
    }
    //คำสั่งแสดงปุุ่มตามตัวเลขได้รับมา
    Row(numbersArray) {
      //  console.log('numbersArray='+ numbersArray);
        let cells = numbersArray.map((val) => this.Cell(val));
        return (
            <View style={styles.row}>
                {cells}
            </View>
        );
    }


    onPress(val) {
       // console.log('val='+ val);
        if (this.props.pressMode === 'string') {
            let curText = this.state.text;
            if (isNaN(val)) {
                if (val === 'back') {
                    curText = curText.slice(0, -1);
                } else {
                    curText += val;
                }
            } else {
                curText += val;
            }
            this.setState({ text: curText });
            this.props.onPress(curText);
          //  console.log('curText='+ curText);
        } else {
            this.props.onPress(val);
        }
    }

        render() {
                return (
                    <View style={styles.container}>
                        {this.Row([1, 2, 3])}
                        {this.Row([4, 5, 6])}
                        {this.Row([7, 8, 9])}
                        <View style={styles.row}>
                            {this.props.decimal ? this.Cell('.') : <View style={{flex: 1}}/>}
                            {this.Cell(0)}
                            {this.Backspace()}
                        </View>
                    </View>
                );
            }
        }

VirtualKeyboard.propTypes = {
    pressMode: PropTypes.oneOf(['string', 'char']),
    color: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    applyBackspaceTint: PropTypes.bool,
    decimal: PropTypes.bool
};

VirtualKeyboard.defaultProps = {
    pressMode: '',
    color: '',
    applyBackspaceTint: true,
    decimal: false,
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 30,
        alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        marginTop: 15
    },
    number: {
        fontSize: 25,
        textAlign: 'center'
    },
    backspace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cell: {
        flex: 1,
        justifyContent: 'center'
    },
});

export  default VirtualKeyboard;
