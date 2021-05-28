import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    flexHorizontal: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    list: {
        listStyleType: 'none',
        height: '70px',
        backgroundColor: '#742adb',
        '& li': {
            padding: '5px 10px',
            height: '78%',
            display: 'flex',
            alignItems: 'center'
        },
        '& li a': {
            color: 'white',
            padding: '5px 10px',
            textDecoration: 'none',
        },
        '& li:hover': {
            backgroundColor: 'purple',
        },
        '& li img': {
            width: '50px',
            height: '50px',
        }
    }
})