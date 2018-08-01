import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const QRScannerRectView  = (props) => {
        this.state = {
            topWidth: 0,
            topHeight: 0,
            leftWidth: 0,
        };

    getCornerSize = () => {
        return ({
            height: props.cornerBorderLength,
            width: props.cornerBorderLength,
        });
    };

    measureTotalSize=(e)=>{
        let totalSize = e.layout;
        this.setState({
            topWidth: totalSize.width,
        })
    };

    measureRectPosition = (e) => {
        let rectSize = e.layout;
        this.setState({
            topHeight: rectSize.y,
            leftWidth: rectSize.x,
        })
    };

    getTopMaskHeight = () => {
        if (props.isCornerOffset) {
            return this.state.topHeight + props.rectHeight - props.cornerOffsetSize;
        } else {
            return this.state.topHeight + props.rectHeight;
        }
    };

    getBottomMaskHeight = () => {
        if (props.isCornerOffset) {
            return props.rectHeight + this.state.topHeight - props.cornerOffsetSize;
        } else {
            return this.state.topHeight + props.rectHeight;
        }
    };

    getSideMaskWidth = () => {
        if (props.isCornerOffset) {
            return this.state.leftWidth + props.cornerOffsetSize;
        } else {
            return this.state.leftWidth;
        }
    };

    return (
            <View style={styles.container} onLayout={({nativeEvent: e}) => this.measureTotalSize(e)}>

                <View style={styles.viewfinder} onLayout={({nativeEvent: e}) => this.measureRectPosition(e)}>

                    <View style={[
                        this.getCornerSize(),
                        styles.topLeftCorner,
                        {
                            borderLeftWidth: props.cornerBorderWidth,
                            borderTopWidth: props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerSize(),
                        styles.topRightCorner,
                        {
                            borderRightWidth: props.cornerBorderWidth,
                            borderTopWidth: props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerSize(),
                        styles.bottomLeftCorner,
                        {
                            borderLeftWidth: props.cornerBorderWidth,
                            borderBottomWidth: props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerSize(),
                        styles.bottomRightCorner,
                        {
                            borderRightWidth: props.cornerBorderWidth,
                            borderBottomWidth: props.cornerBorderWidth,
                        }
                    ]}/>
                </View>

                <View style={[
                    styles.topMask,
                    {
                        bottom: this.getTopMaskHeight(),
                        width: this.state.topWidth,
                    }
                ]}/>

                <View style={[
                    styles.leftMask,
                    {
                        width: this.getSideMaskWidth(),
                    }
                ]}/>

                <View style={[
                    styles.rightMask,
                    {
                        width: this.getSideMaskWidth(),
                    }]}/>

                <View style={[
                    styles.bottomMask,
                    {
                        top: this.getBottomMaskHeight(),
                        width: this.state.topWidth,
                    }]}/>


                <View style={{position: 'absolute', bottom: props.hintTextPosition}}>
                    <Text style={props.hintTextStyle}>{props.hintText}</Text>
                </View>

            </View>
        )
};

QRScannerRectView.propTypes = {
    rectHeight: PropTypes.number,
    cornerBorderWidth: PropTypes.number,
    cornerBorderLength: PropTypes.number,
    isCornerOffset: PropTypes.bool,
    cornerOffsetSize: PropTypes.number,
    hintText: PropTypes.string,
    hintTextStyle: PropTypes.object,
    hintTextPosition: PropTypes.number

};

QRScannerRectView.defaultProps = {
    rectHeight: '',
    cornerBorderWidth: '',
    cornerBorderLength: '',
    isCornerOffset: '',
    cornerOffsetSize: '',
    hintText: '',
    hintTextStyle: '',
    hintTextPosition: ''
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    viewfinder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 200,
    },
    topLeftCorner: {
        position: 'absolute',
        borderColor: '#22ff00',
        top: 0,
        left: 0
    },
    topRightCorner: {
        position: 'absolute',
        borderColor: '#22ff00',
        top: 0,
        right: 0
    },
    bottomLeftCorner: {
        position: 'absolute',
        borderColor: '#22ff00',
        bottom: 0,
        left: 0
    },
    bottomRightCorner: {
        position: 'absolute',
        borderColor: '#22ff00',
        bottom: 0,
        right: 0
    },
    topMask: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#0000004D'
    },
    leftMask: {
        position: 'absolute',
        left: 0,
        backgroundColor: '#0000004D',
        height: 200,
    },
    rightMask: {
        position: 'absolute',
        right: 0,
        backgroundColor: '#0000004D',
        height: 200,
    },
    bottomMask: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0000004D'
    }
});

export default QRScannerRectView;
