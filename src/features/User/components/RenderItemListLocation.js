import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, Alert} from "react-native";
import { Card, CardItem, Body, Right } from 'native-base';
import CommonText from '../../common/components/CommonText';

const RenderItemListLocation = (props) => {
    let dii = props.checkNamber;
    return (
        <Card>
            <CardItem
                button
                disabled={dii}
                style={[styles.styleCardButton,{backgroundColor: dii === true ? "#c1bfe2" : "#6dffff"}]}
                onPress={() =>{dii === true ?
                    Alert.alert(
                        'Alert Title',
                        'INBITZTH',
                        [   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'มึงจะกดไหม', onPress: () =>  Alert.alert(
                                    'กดOKแล้ว')},
                        ],
                        { cancelable: false,
                            tintColor:'#ff5234'})  :
                    props.navigate(props.checkType,{
                        ID: props.item.ID
                    })
                }}
            >
                <CardItem style={styles.styleCardItem}>
                    <Body>
                        <Image
                            source={{uri: props.item.name}}
                            style={styles.stylePicture}
                        />
                        <CommonText
                            text={props.item.email}
                            size={28}
                            style={styles.styleCommonText}
                        />
                        <CommonText
                            text={props.item.password}
                            style={styles.styleCommonText}
                        />
                        <Right>
                            <CommonText
                                text={props.item.number}
                                style={styles.styleCommonText}
                            />
                        </Right>
                    </Body>
                </CardItem>
            </CardItem>
        </Card>
    )
};

RenderItemListLocation.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    checkType: PropTypes.string,
    navigate: PropTypes.function,
    checkNamber: PropTypes.boolean

};

RenderItemListLocation.defaultProps = {
    checkType: '',
    navigate: '',
    checkNamber: ''
};


const styles = StyleSheet.create({
    stylePicture: {
        width: '100%',
        height: 200,
        marginBottom: 5
    },
    styleCommonText: {
        paddingLeft: 25
    },
    styleCardItem: {
        backgroundColor: 'rgba(255,255,255, 0)',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    styleCardButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default RenderItemListLocation;
