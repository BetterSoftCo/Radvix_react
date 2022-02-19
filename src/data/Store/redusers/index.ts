import {combineReducers} from 'redux'
import userRole from './user_role_reduser'
import userInfo from './user_info_reduser'
import settingApp from './setting_reduser'
const rootReducer = combineReducers({
    userRole,
    userInfo,
    settingApp
    
})
export default rootReducer