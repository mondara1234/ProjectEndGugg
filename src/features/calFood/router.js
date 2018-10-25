import ListFoodScreen from "./screen/ListFoodScreen";
import CalFoodScreen from "./screen/calfoodScreen";

export const LIST_FOOD_SCREEN = 'LIST_FOOD_SCREEN';
export const CAL_FOOD_SCREEN = 'CAL_FOOD_SCREEN';

export const calFoodRouter = {
    [LIST_FOOD_SCREEN]: {
        screen: ListFoodScreen
    },
    [CAL_FOOD_SCREEN]: {
        screen: CalFoodScreen
    }
};
