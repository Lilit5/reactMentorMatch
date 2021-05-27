class Utils {
    /**
     * Function filters array of objects by given property
     * 
     * @param {Array} arrOfObjs 
     * @param {Array} filterBy 
     * @returns Filtered array with objects
     */
    getUniqueValuesFromArrayOfObjs(arrOfObjs, filterBy){
        let uniqueCategories = arrOfObjs;
        for (let cat of filterBy) {
            uniqueCategories = uniqueCategories.filter((item, i, ar) => {
                const categoryValuesArr = ar.map((el) => el[cat]); 
                return categoryValuesArr.indexOf(item[cat]) === i
            });
        }
        return uniqueCategories
    }

}

module.exports = Utils;