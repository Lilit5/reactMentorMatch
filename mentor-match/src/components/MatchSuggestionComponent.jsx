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
    console.log("suggestionsList ********** ",suggestionsList);

    return (
        <Header>
            <div>
                <p className="warning-msg"></p>
                <div>
                    {/* map with selected mentors */}
                </div>
                <div>
                    <ul>
                        {
                            suggestionsList.map((employee, ind) => {
                                return <li key={`${employee.first_name}${ind}`}>
                                    <h4>{`${employee.first_name} ${employee.last_name}`}</h4>
                                    <h6>{employee.gender}</h6>
                                    <div>
                                        <p>{`${employee.city}, ${employee.country}`}</p>
                                        <p>{`Email: ${employee.email}`}</p>
                                        <p>{`Job Title: ${employee['job title']}, Departament: ${employee.department}`}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <button>Confirm</button>
            </div>
        </Header>
    )
}

export default connect(r => r)(MatchSuggestion);