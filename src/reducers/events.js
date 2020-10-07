import {READ_EVENTS} from '../action'
import {CREATE_EVENT} from '../action'
import _ from 'lodash'

export default (state = {}, action) =>{
   switch(action.type){
    case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
        default:
        return state
    }
}