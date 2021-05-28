 const state = {
    error: "",
    employees:{ employeesList:[], matchCategories:[], matchedEmployees:[], choosedSuggestions:[] },
    selectedCategories:{},
    signUp:{ visible: false},
    password: {passwd: "", validationPasswd: "", isValid: false},
    signedIn: false
}

export default state;