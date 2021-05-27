import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    listItem: {
        listStyleType: 'none',
        border: '1px solid black',
        '&:hover':  {
            cursor: 'pointer'
        }
    },
})