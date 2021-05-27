class Utils {
    /**
     * Function filters array of objects by given property
     * 
     * @param {Array} arrOfObjs 
     * @param {Array} filterBy 
     * @returns Filtered array with objects
     */
    getUniqueValuesFromArrayOfObjs(arrOfObjs, filterBy) {
        let uniqueCategories = arrOfObjs;
        // uniqueCategories = [...new Set(arrOfObjs.map(JSON.stringify))].map(JSON.parse);
        for (let cat of filterBy) {
        // uniqueCategories = [... new Set([].concat(...arrOfObjs).filter(el => cat in el))];
            uniqueCategories = uniqueCategories.filter((item, i, ar) => {
                const categoryValuesArr = ar.map((el) => el[cat]);
                return categoryValuesArr.indexOf(item[cat]) === i
            });
        }
        // console.log("****************** uniqueCategories", uniqueCategories);
        return uniqueCategories
    }

    getSuggestions(selectedCategories, employeesList) {
        const matches = [];
        console.log("selectedCategories --- ", selectedCategories, "employeesList -- ", employeesList);
        for (let [category, value] of Object.entries(selectedCategories)) {
            for (let employee of employeesList) {
                if (employee[category] === value) {
                    matches.push(employee)
                }
            }
        }
        console.log("matches ------- ", matches);
    }

}

module.exports = Utils;