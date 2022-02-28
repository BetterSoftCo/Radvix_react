import {combineReducers} from 'redux'
import userRole from './user_role_reduser'
import userInfo from './user_info_reduser'
import settingApp from './setting_reduser'
import ResearchId from './research_id'
const rootReducer = combineReducers({
    userRole,
    userInfo,
    settingApp,
    ResearchId
    
})
export default rootReducer