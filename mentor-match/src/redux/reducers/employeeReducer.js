import employeeState from '../state/state'


function employeeReducer(state = employeeState, action) {
    let updatedState = { ...state }
    switch (action.type) {
        case 'changeStateByNestedKey':
            updatedState[action.key1][action.key2] = action.val;
            break;
        case 'appendToStateByNestedKey':
            updatedState[action.key1][action.key2].push(action.val);
            break;
        case 'changeStateByKey':
            updatedState[action.key] = action.val;
            break;
        case 'setError':
            updatedState.error = action.msg;
            break;
        case 'deleteByIndex':
            console.log('in delete key1 key2 index', updatedState[action.key1][action.key2]);
            updatedState[action.key1][action.key2].splice(action.index, 1)
            break;
    }


    return updatedState

}

export default employeeReducer