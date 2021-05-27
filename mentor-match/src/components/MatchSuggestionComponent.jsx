import React, { useEffect } from 'react';
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import Utils from '../utils/utils'


function MatchSuggestion() {
    const dispatch = useDispatch();
    const utils = new Utils();
    const selectedCategories = useSelector(state => state.employeeData.selectedCategories)
    const employees = useSelector(state => state.employeeData.employees)
    const suggestionsList = utils.getSuggestions(selectedCategories, employees.employeesList)

    return (
        <Header>
            <div>
                <p className="warning-msg"></p>
                <div>
                    {/* map with selected mentors */}
                </div>
                <div>
                    {/* map with all available mentors */}
                </div>
                <button>Confirm</button>
            </div>
        </Header>
    )
}

export default connect(r => r)(MatchSuggestion);