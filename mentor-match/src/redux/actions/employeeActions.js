import axios from 'axios'

const DATA_SERVER = 'http://localhost:3001/data'

export function changeStateByNestedKey(key1, key2, val) {
    return {
        type: 'changeStateByKey',
        key1,
        key2,
        val,
    }
}

export function changeStateByKey(key, val) {
    return {
        type: 'changeStateByKey',
        key,
        val,
    }
}

export function setError(msg) {
    return {
        type: 'setError',
        msg
    }
}

export function getEmployees() {
    return function(dispatch) {
        axios.get(DATA_SERVER).then(response => {
            console.log("response ", response.data);
            dispatch(changeStateByKey('employees', response.data))
        })
    }
}