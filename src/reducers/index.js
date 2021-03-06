import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from "./reducer_login"
import CreateBrandReducer from "./reducer_create_brand"
import SearchReducer from "./reducer_search"
import QAReducer from "./reducer_qa"


const rootReducer = combineReducers({
  login: LoginReducer,
  createBrand: CreateBrandReducer,
  search: SearchReducer,
  qa: QAReducer,
  form: formReducer
});

export default rootReducer;
