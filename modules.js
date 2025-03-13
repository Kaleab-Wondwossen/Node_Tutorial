const names =  require('./names')
const sayHi = require('./utils')
const alternateNames = require('./names_alternate')
require('./another_exporting_mechanism')// here with out explistily using the functions we can use the sum and inputSum function the the required key word 


sayHi('sara')
sayHi(names.jhon)
sayHi(names.peter)