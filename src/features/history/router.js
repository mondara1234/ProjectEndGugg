import historyScreen from "./screen/historyScreen";
import detleHistoryScreen from "./screen/detleHistoryScreen";

export const HISTORY_SCREEN = 'HISTORY_SCREEN';
export const DETLEHISTORY_SCREEN = 'DETLEHISTORY_SCREEN';

export const historyRouter = {
    [HISTORY_SCREEN]: {
        screen: historyScreen
    },
    [DETLEHISTORY_SCREEN]: {
        screen: detleHistoryScreen
    }
};
