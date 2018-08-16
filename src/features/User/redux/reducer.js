import initialState from './initialState';

const reducers = [

];

export default function reducer(state = initialState, action = {}) {
    let newState;
    switch (action.type) {
        case 'FLIGHTS_LOADED':
            return state={//ใช้สำหรับมีข้อมูลเยอะ สามารเลิกค่าที่ต้องเปลี่ยนได้
                ...state,
                server : [...state.server,action.payload]
            };
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    /* istanbul ignore next */
    return reducers.reduce((s, r) => r(s, action), newState);
}
