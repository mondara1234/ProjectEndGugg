/*UserLoginFunction = () =>{
    fetch('http://192.168.1.30/My_SQL/ShowAllDataList.php').then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            }, function() {
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
var serverdata=[this.props.dataSource];*/

import {CLEAR_COUNTER, ADDDATA_COUNTER} from "../actions/TypesActions";

const initialState={
    serverdataSource:[],
    value:0
};
export default (state=initialState,action)=>{
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
        default:
            return state;
    }

}
