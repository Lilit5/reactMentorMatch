import { createUseStyles } from 'react-jss'

export const generalStyles = createUseStyles({
    btn: {
        border: 'none',
        padding: '8px 16px',
        outline: 'none',
        backgroundColor: 'gray',
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'darkgray',
            cursor: 'pointer'
        }
    },
    input: {
        border: 'none',
        borderBottom: '2px solid lightgray',
        padding: '8px 16px',
        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '2px solid #742adb'
        }
    },
    noListDecoration: {
        listStyleType: 'none',
    },
    flexVertical: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    warning: {
        border: '1px solid orange',
        padding: '8px 16px',
        borderRadius: '8%',
        color: 'grey',
        '&:before': {
            content: "'⚠ '",
            display: 'block',
        }
    },
    info: {
        border: '2px solid lightblue',
        padding: '8px 16px',
        borderRadius: '8%',
        color: 'grey',
        '&:before': {
            content: "'ℹ️ '",
            display: 'block',
        }
    },
    container: {
        padding: '16px 32px',
        width: '70%',
    }
})