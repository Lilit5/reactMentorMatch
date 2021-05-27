import employeeState from '../state/state'


function employeeReducer(state = employeeState, action) {
    let updatedState = { ...state }
    switch (action.type) {
        case 'changeStateByNestedKey':
            // console.log("key1 key2 val",action.key1,action.key2,action.val);
            // console.log("updatedState ---- ", updatedState);
            updatedState[action.key1][action.key2] = action.val;
            break;
        case 'changeStateByKey':
            // console.log("key val",action.key,action.val);
            updatedState[action.key] = action.val;
            break;
        case 'setError':
            updatedState.error = action.msg;
            break;
    }


    return updatedState

}

export default employeeReducer