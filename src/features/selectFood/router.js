import SelectFoodScreen from "./screen/SelectFoodScreen";
import FoodShowDetailScreen from "./screen/FoodShowDetailScreen"
import HowToFoodScreen from "./screen/HowToFoodScreen"

export const SELECT_FOOD_SCREEN = 'SELECT_FOOD_SCREEN';
export const FOOD_SHOW_DETAIL_SCREEN = 'FOOD_SHOW_DETAIL_SCREEN';
export const HOW_TO_FOOD_SCREEN = 'HOW_TO_FOOD_SCREEN';

export const SelectFoodRouter = {
    [SELECT_FOOD_SCREEN]: {
        screen: SelectFoodScreen
    },
    [FOOD_SHOW_DETAIL_SCREEN]: {
        screen: FoodShowDetailScreen
    },
    [HOW_TO_FOOD_SCREEN]: {
        screen: HowToFoodScreen
    }
};
