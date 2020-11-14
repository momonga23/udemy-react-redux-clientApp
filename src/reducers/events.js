import {READ_EVENTS} from '../action'
import {CREATE_EVENT} from '../action'
import {DELETE_EVENT} from '../action'
import {READ_EVENT} from '../action'
import {UPDATE_EVENT} from '../action'
import _ from 'lodash'

export default (events = {}, action) =>{
   switch(action.type){
    case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
        delete events[action.id]
        return {...events}
    case READ_EVENT:
        case UPDATE_EVENT:
            case CREATE_EVENT:
                const data= action.response.data
            return {...events,[data.id]:data}
    default:
        return events
    }
}