/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

//const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  const convertHandler = new ConvertHandler();
  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      if (initNum === -1) {
        return res.status(400).json({error: 'Input quantity is not correct. Please try again!'});
      }
      let initUnit = convertHandler.getUnit(input);
      if (initUnit === 'E') {
        return res.status(400).json({error: 'Unit is not correct. Please try again!'});
      }
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      return res.json({initNum,initUnit,returnNum,returnUnit,string:toString});
    }); 
};
