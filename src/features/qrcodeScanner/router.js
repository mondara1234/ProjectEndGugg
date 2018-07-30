import QRCodesScreen from "./screen/QRCodesScreen";
import ScanQRScreen from "./screen/ScanQRScreen";


export const QRCODE_SCREEN = 'QRCODE_SCREEN';
export const SCANQR_SCREEN = 'SCANQR_SCREEN';


export const qrcodeRouter = {
    [QRCODE_SCREEN]: {
        screen: QRCodesScreen
    },
    [SCANQR_SCREEN]: {
        screen: ScanQRScreen
    }
};
