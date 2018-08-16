
import {CLEAR_COUNTER, ADDDATA_COUNTER} from "../actions/TypesActions";

const initialState={
    serverdataSource: {},
    value: 0
};

export default (state = initialState,action)=>{
    switch (action.type){
        case ADDDATA_COUNTER:
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                 serverdataSource : [...state.serverdataSource,action.dataarray]
             };
        case CLEAR_COUNTER:
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                serverdataSource : []
            };
        case 'FLIGHTS_LOADED':
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                serverdataSource : [...state.serverdataSource, action.payload]
            };
        case 'FLIGHTS_LOADED_FAILED':
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                serverdataSource : [...state.serverdataSource, action.payload]
            };
        default:
            return state;
    }

}
