import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    listItem: {
        listStyleType: 'none',
        border: '1px solid gray',
        padding: '8px 16px',
        backgroundColor: '#c4e0f5',
        overflow: 'overlay',
        '& *': {
            display: 'inline',
            padding: '4px 8px'
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#a0cff2',
        },
        '& p': {
            fontSize: '0.8em'
        }
    },
})