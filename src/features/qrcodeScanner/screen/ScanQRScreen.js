import React, { Component } from 'react';
import { Linking, Dimensions }  from 'react-native';
import Toast from 'react-native-simple-toast';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRScannerRectView from '../components/QRScannerRectView';

class ScanQRScreen extends Component {
    onSuccess(e) {
            Linking
                .openURL(e.data)
                .catch(
                    Toast.show('Type: ' + e.type + '\nData: ' + e.data)
                );
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
                        cornerOffsetSize={0}
                        isCornerOffset={false}
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
