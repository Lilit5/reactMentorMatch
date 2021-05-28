import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    avatarImg: {
        width: '200px',
        height: '200px'
    },
    flexHorizontal: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',  
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
    },
    newsFeed: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: '0 40px',
        margin: '0 100px',
        '& div': {
            border: '1px solid gray',
            margin: '10px 0',
            padding: '15px',
            '& p': {
                textAlign: 'justify'
            }
        },
        '& img': {
            width: '100%',
        }
    }
})