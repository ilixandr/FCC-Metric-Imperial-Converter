/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = (input) => {
    if (!input) {
      return -1;
    }
    let regexForQuantity=/^[\d\.\/]+/g;
    let found = input.match(regexForQuantity);
    /* "if nothing is provided it will default to 1" */
    if (!found) {
      return 1;
    }
    if (!(found[0].match(/\//g))) { /* not a fraction, only a number */
      return found[0];
    } else if (found[0].match(/\//g).length > 1){ /* if there are more than 1 slashes, fraction is incorrectly formatted */
      return -1;
    } else { /* fraction detected as input */
      return found[0].split('/').reduce((a,b) => ((0.0 + a) / b).toFixed(5));
    }
    return -1; /* this should never happen */
  };
  
  this.getUnit = (input) => {
    if (!input){
      return 'E'; /* return E for Error if there's no input */
    }
    let unitRegex = /[a-zA-Z]{1,3}$/g;
    let found = input.match(unitRegex);
    if (!found) {
      return 'E';
    }
    switch(found[0].toLowerCase()) {
      case 'gal':
        return 'gal';
        break;
      case 'l':
        return 'l';
        break;
      case 'mi':
        return 'mi';
        break;
      case 'km':
        return 'km';
        break;
      case 'lbs':
        return 'lbs';
        break;
      case 'kg':
        return 'kg';
        break;
      default:
        return 'E';
    }
    return 'E'; /* this should never happen */
  };
  
  this.getReturnUnit = (initUnit) => {
    switch(initUnit) {
      case 'gal':
        return 'l';
        break;
      case 'l':
        return 'gal';
        break;
      case 'mi':
        return 'km';
        break;
      case 'km':
        return 'mi';
        break;
      case 'lbs':
        return 'kg';
        break;
      case 'kg':
        return 'lbs';
        break;
      default:
        return 'E';
    }
    return 'E'; /* this should never happen */
  };

  this.spellOutUnit = (unit) => {
    const spellMap = {'gal': 'gallons', 'l': 'liters', 'mi': 'miles', 'km': 'kilometers', 'lbs': 'pounds', 'kg': 'kilograms'};
    return spellMap[unit];
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit) {
      case 'gal':
        return (initNum * galToL).toFixed(5);
        break;
      case 'l':
        return (initNum / galToL).toFixed(5);
        break;
      case 'mi':
        return (initNum * miToKm).toFixed(5);
        break;
      case 'km':
        return (initNum / miToKm).toFixed(5);
        break;
      case 'lbs':
        return (initNum * lbsToKg).toFixed(5);
        break;
      case 'kg':
        return (initNum / lbsToKg).toFixed(5);
        break;
      default:
        return -1;
    }
    return -1; /* this should never happen */
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
