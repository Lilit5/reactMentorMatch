import { Route, Redirect } from 'react-router-dom'
import { useSelector, connect } from 'react-redux'


const PrivateRoute = (props) => {
    const signedIn = useSelector(state => state.employeeData.signedIn)

    if (signedIn) {
        return <Route path={props.path} component={() => <props.component />} />
    } else {
        return <Redirect to="/" />
    }
}

export default connect(r => r)(PrivateRoute)
