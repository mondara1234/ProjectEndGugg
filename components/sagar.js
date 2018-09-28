import { put, takeLatest, all } from 'redux-saga/effects';
import {FETCH_FLIGHT} from "./actions/TypesActions";

function* fetchNews() {
    yield put({ type: "NEWS_RECEIVED", json: "'qqq", });
}
function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}