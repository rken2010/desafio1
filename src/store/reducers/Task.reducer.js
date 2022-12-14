import { ADD_TASK } from "../actions/addTask.action"
import { SELECT_PRIORITY } from "../actions/priority.action"

const initialState = { 
    task: [],
    selected:null 
}

const TaskReducer = (state= initialState , action) => { 
    switch(action.type) {
        case SELECT_PRIORITY:
            const searchPriority = state.task.find( task => task.priorityID === action.priority)
        case ADD_TASK:
    }
 }

export default TaskReducer