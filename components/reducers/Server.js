
import {CLEAR_COUNTER, ADDDATA_COUNTER, FETCHDATA, FETCH_FLIGHT} from "../actions/TypesActions";

const initialState={
    serverdataSource: [],
    value: 0,
    loading: false
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
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, serverdataSource: action.json, loading: false };
        case FETCH_FLIGHT:
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                serverdataSource : [...state.serverdataSource, action.payload.data]
            };
        default:
            return state;
    }

}
