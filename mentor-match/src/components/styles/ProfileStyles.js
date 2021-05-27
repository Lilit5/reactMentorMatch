import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    avatarImg: {
        width: '200px',
        height: '200px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: '8px 26px',
        width: '50%',
        '& a': {
            padding: '8px 16px',
            textDecoration: 'none',
            border: '1px solid #742adb',
            margin: '3px 0',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#742adb',
                color: 'white'
            }
        }
    }
})