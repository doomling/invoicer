const self = {}
const mockedDataService = require('../services/mockedData')
const mockedData = mockedDataService.myData

self.getData = (req, res) => {
    res.json(mockedData)
}

module.exports = self;