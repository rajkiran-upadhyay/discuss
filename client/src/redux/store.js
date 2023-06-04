import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';//to sync extension with redux
import thunk from 'redux-thunk'
import { todosReducers } from './reducers/todosReducer';
import {tabReducer} from './reducers/tabReducer';

//const r=[4,6,8]
//c.l(...r)
//4 6 8
const reducer= combineReducers({
    todos: todosReducers,
    currentTab:tabReducer//another slice
});

const middleware=[thunk]//thunk looks at every dispatch action that passess through our application.
const store= createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);//1st arg is reducer and second is a middleware
export default store;
