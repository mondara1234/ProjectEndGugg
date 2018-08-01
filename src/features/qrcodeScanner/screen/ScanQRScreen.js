import React, { Component } from 'react';
import { Linking }  from 'react-native';
import { Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRScannerRectView from '../components/QRScannerRectView';

class ScanQRScreen extends Component {

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
                            rectHeight={200}
                            cornerBorderWidth={4}
                            cornerBorderLength={20}
                            cornerOffsetSize={0}
                            isCornerOffset={false}
                            hintText={'kakzadsr'}
                            hintTextStyle={{color: '#fff', fontSize: 14,backgroundColor:'transparent'}}
                            hintTextPosition={130}
                        />
                    }
                />
        );
    }
}

ScanQRScreen.navigationOptions  = ({navigation}) => ({
    header: null
});

export default ScanQRScreen;
