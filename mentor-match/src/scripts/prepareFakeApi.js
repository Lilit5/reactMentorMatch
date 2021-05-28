const Dataprovider = require('../utils/DataProvider')

function prepareFakeApi() {
    const dp = new Dataprovider();
    const content = dp.parseCSVtoJSON()
    dp.writeJSONIntoFile(content)
}

prepareFakeApi();