import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

class QRScannerRectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topWidth: 0,
            topHeight: 0,
            leftWidth: 0,
        };
    }

    measureTotalSize = (e) => {
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
        if (this.props.isCornerOffset) {
            return this.state.topHeight + this.props.rectHeight - this.props.cornerOffsetSize + 30;
        } else {
            return this.state.topHeight + this.props.rectHeight + 30;
        }
    };

    getBottomMaskHeight = () => {
        if (this.props.isCornerOffset) {
            return this.props.rectHeight + this.state.topHeight - this.props.cornerOffsetSize;
        } else {
            return this.state.topHeight + this.props.rectHeight;
        }
    };

    getSideMaskWidth = () => {
        if (this.props.isCornerOffset) {
            return this.state.leftWidth + this.props.cornerOffsetSize;
        } else {
            return this.state.leftWidth;
        }
    };

    render() {
        return (
            // onLayout={({nativeEvent: e})}
            // คือรับค่า ต่างของหน้าจอมาเก้บไว้ใน ตัวแปร e จะทำงานคล้ายๆ  Dimensionsที่ไว้ดู สเกลของหน้าจอ
            // => this.measureRectPosition(e)
            // คือ การกำหนดค่า e ให้กับ เมดตอด เพื่อที่จะสามารถเรียกใช้ตัวแปร e ได้
            <View
                style={styles.container}
                onLayout={({nativeEvent: e}) => this.measureTotalSize(e)}
            >
                <View
                    style={styles.viewFinder}
                    onLayout={({nativeEvent: e}) => this.measureRectPosition(e)}
                >
                    {/*วิวของกรอบช่องสี่เหลี่ยมที่ใช้แสกน */}
                    <View style={styles.topLeftCorner}/>
                    <View style={styles.topBorder}/>
                    <View style={styles.topRightCorner}/>
                    <View style={styles.rightBorder}/>
                    <View style={styles.bottomLeftCorner}/>
                    <View style={styles.leftBorder}/>
                    <View style={styles.bottomRightCorner}/>
                    <View style={styles.bottomBorder}/>
                </View>

                {/*วิวสีดำรอบกรอบสี่เหลี่ยมที่แสกน */}
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

                {/*ข้อความแสดงด้านล่างกรอบ*/}
                <View style={styles.textContainer}>
                    <Text
                        style={styles.hintText}>{'The QR code of barcode will be detected automaticallt once you have positiooned the code within the guide ines'}</Text>
                </View>
            </View>
        )
    };
}

QRScannerRectView.propTypes = {
    rectHeight: PropTypes.number,
    isCornerOffset: PropTypes.bool,
    cornerOffsetSize: PropTypes.number
};

QRScannerRectView.defaultProps = {
    rectHeight: '',
    isCornerOffset: '',
    cornerOffsetSize: ''
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    viewFinder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 200,
        bottom: 15
    },
    topLeftCorner: {
        position: 'absolute',
        borderColor: '#f9f9f9',
        top: 0,
        left: 0,
        height: 15,
        width: 15,
        borderLeftWidth: 1,
        borderTopWidth: 1

    },
    topBorder: {
        position: 'absolute',
        top: 0,
        width: '100%',
        borderColor: 'rgba(255, 255,255, 0.4)',
        borderTopWidth: 1
    },
    topRightCorner: {
        position: 'absolute',
        borderColor: '#f9f9f9',
        top: 0,
        right: 0,
        height: 15,
        width: 15,
        borderRightWidth: 1,
        borderTopWidth: 1
    },
    rightBorder: {
        position: 'absolute',
        right: 0,
        height:'100%',
        borderColor: 'rgba(255, 255,255, 0.4)',
        borderRightWidth: 1
    },
    bottomLeftCorner: {
        position: 'absolute',
        borderColor: '#f9f9f9',
        bottom: 0,
        left: 0,
        height: 15,
        width: 15,
        borderLeftWidth: 1,
        borderBottomWidth: 1
    },
    leftBorder: {
        position: 'absolute',
        left: 0,
        height:'100%',
        borderColor: 'rgba(255, 255,255, 0.4)',
        borderLeftWidth: 1
    },
    bottomRightCorner: {
        position: 'absolute',
        borderColor: '#f9f9f9',
        bottom: 0,
        right: 0,
        height: 15,
        width: 15,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    bottomBorder: {
        position: 'absolute',
        bottom: 0,
        width:'100%',
        borderColor: 'rgba(255, 255,255, 0.4)',
        borderBottomWidth: 1
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
        bottom: 235
    },
    rightMask: {
        position: 'absolute',
        right: 0,
        backgroundColor: '#0000004D',
        height: 200,
        bottom: 235
    },
    bottomMask: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0000004D'
    },
    textContainer: {
        position: 'absolute',
        paddingHorizontal: 40,
        bottom: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hintText: {
        color: '#fff',
        fontSize: 14,
        backgroundColor:'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default QRScannerRectView;
