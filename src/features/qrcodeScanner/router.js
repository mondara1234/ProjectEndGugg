import barcodeScreen from "./screen/qrcodeScreen";


export const QRCODE_SCREEN = 'QRCODE_SCREEN';


export const qrcodeRouter = {
    [QRCODE_SCREEN]: {
        screen: barcodeScreen
    }
};
