
import {CLEAR_COUNTER, ADDDATA_COUNTER} from "../actions/TypesActions";

state = {
    isLoading: true,
    dataSource: []
}

componentDidMount = () => {
    return fetch('http://192.168.1.33/My_SQL/ShowAllDataList.php').then((response) => response.json())
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

const initialState={
    serverdataSource:this.state.dataSource
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
