import CalListFoodScreen from "./screen/calListFoodScreen";
import CalFoodScreen from "./screen/calfoodScreen";

export const CALLIST_FOOD_SCREEN = 'CALLIST_FOOD_SCREEN';
export const CAL_FOOD_SCREEN = 'CAL_FOOD_SCREEN';

export const calFoodRouter = {
    [CALLIST_FOOD_SCREEN]: {
        screen: CalListFoodScreen
    },
    [CAL_FOOD_SCREEN]: {
        screen: CalFoodScreen
    }
};
