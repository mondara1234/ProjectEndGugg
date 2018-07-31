import React, { Component } from 'react';
import
{
    Linking,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class QRScannerRectView extends Component {
    static defaultProps = {
        rectHeight: 200,
        cornerColor: '#22ff00',
        cornerBorderWidth: 4,
        cornerBorderLength: 20,
        cornerOffsetSize: 0,
        isCornerOffset: false,
        hintText: 'kakzadsr',
        hintTextStyle: {color: '#fff', fontSize: 14,backgroundColor:'transparent'},
        hintTextPosition: 130
    };

    constructor(props) {
        super(props);
        this.state = {
            topWidth: 0,
            topHeight: 0,
            leftWidth: 0,
        }
    }

    getCornerColor() {
        return ({
            borderColor: this.props.cornerColor,
        });
    }

    //获取扫描框转角的大小
    getCornerSize() {
        return ({
            height: this.props.cornerBorderLength,
            width: this.props.cornerBorderLength,
        });
    }

    measureTotalSize(e) {
        let totalSize = e.layout;
        this.setState({
            topWidth: totalSize.width,
        })
    }

    measureRectPosition(e) {
        let rectSize = e.layout;
        this.setState({
            topHeight: rectSize.y,
            leftWidth: rectSize.x,
        })
    }

    getTopMaskHeight() {
        if (this.props.isCornerOffset) {
            return this.state.topHeight + this.props.rectHeight - this.props.cornerOffsetSize;
        } else {
            return this.state.topHeight + this.props.rectHeight;
        }
    }

    getBottomMaskHeight() {
        if (this.props.isCornerOffset) {
            return this.props.rectHeight + this.state.topHeight - this.props.cornerOffsetSize;
        } else {
            return this.state.topHeight + this.props.rectHeight;
        }
    }

    getSideMaskWidth() {
        if (this.props.isCornerOffset) {
            return this.state.leftWidth + this.props.cornerOffsetSize;
        } else {
            return this.state.leftWidth;
        }
    }


    render() {

        return (
            <View style={styles.container} onLayout={({nativeEvent: e}) => this.measureTotalSize(e)}>

                <View style={styles.viewfinder} onLayout={({nativeEvent: e}) => this.measureRectPosition(e)}>

                    <View style={[
                        this.getCornerColor(),
                        this.getCornerSize(),
                        styles.topLeftCorner,
                        {
                            borderLeftWidth: this.props.cornerBorderWidth,
                            borderTopWidth: this.props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerColor(),
                        this.getCornerSize(),
                        styles.topRightCorner,
                        {
                            borderRightWidth: this.props.cornerBorderWidth,
                            borderTopWidth: this.props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerColor(),
                        this.getCornerSize(),
                        styles.bottomLeftCorner,
                        {
                            borderLeftWidth: this.props.cornerBorderWidth,
                            borderBottomWidth: this.props.cornerBorderWidth,
                        }
                    ]}/>

                    <View style={[
                        this.getCornerColor(),
                        this.getCornerSize(),
                        styles.bottomRightCorner,
                        {
                            borderRightWidth: this.props.cornerBorderWidth,
                            borderBottomWidth: this.props.cornerBorderWidth,
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


                <View style={{position: 'absolute', bottom: this.props.hintTextPosition}}>
                    <Text style={this.props.hintTextStyle}>{this.props.hintText}</Text>
                </View>

            </View>
        );
    }
}

class ScanQRScreen extends Component {
    static propTypes = {
        rectHeight: PropTypes.number,
        cornerColor: PropTypes.string,
        cornerBorderWidth: PropTypes.number,
        cornerBorderLength: PropTypes.number,
        isCornerOffset: PropTypes.bool,//边角是否偏移
        cornerOffsetSize: PropTypes.number,
        hintText: PropTypes.string,
        hintTextStyle: PropTypes.object,
        hintTextPosition: PropTypes.number
    };

    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('\n' + 'เกิดข้อผิดพลาด', err));
    }

    render() {

        const SCREEN_HEIGHT = Dimensions.get("window").height;

        return (
                <QRCodeScanner
                    onRead={this.onSuccess}
                    cameraStyle={{ height: SCREEN_HEIGHT }}
                    showMarker={true}
                    customMarker={
                        <QRScannerRectView
                            rectHeight={this.props.rectHeight}
                            cornerColor={this.props.cornerColor}
                            cornerBorderWidth={this.props.cornerBorderWidth}
                            cornerBorderLength={this.props.cornerBorderLength}
                            cornerOffsetSize={this.props.cornerOffsetSize}
                            isCornerOffset={this.props.isCornerOffset}
                            hintText={this.props.hintText}
                            hintTextStyle={this.props.hintTextStyle}
                            hintTextPosition={this.props.hintTextPosition}
                        />
                    }
                />
        );
    }
}

ScanQRScreen.navigationOptions  = ({navigation}) => ({
    header: null
});


const styles = StyleSheet.create({
    buttonsContainer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
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
        top: 0,
        left: 0
    },
    topRightCorner: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    bottomLeftCorner: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    bottomRightCorner: {
        position: 'absolute',
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
    },
    viewMarker: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000004D'
    }
});

export default ScanQRScreen;
