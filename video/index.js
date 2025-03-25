//import  getPosts , {getPostsLength} from './postsController.js';

// const names =  require('./names')
// const sayHi = require('./utils')
// const alternateNames = require('./names_alternate')
// require('./another_exporting_mechanism')// here with out explistily using the functions we can use the sum and inputSum function the the required key word 

//node init 
//npm install
//npm i -D nodemon 
//create .gitignore file and put the folder which u dont want to push to git hub in this case node_modules

//ES module

// console.log(getPosts());
// console.log('Posts Length: '+getPostsLength());


// console.log(names)
// console.log(alternateNames)
// console.log(alternateNames.items)
// console.log(alternateNames.singlePersonData)



// sayHi('sara')
// sayHi(names.jhon)
// sayHi(names.peter)
//console.log('Running')


//here instead of window we have globaal scince there are no browsers rarher than terminal 
//console.log(global)


//also here instade of document scince there is no DOM we use process
//console.log(process)


//default export function
// const {generateRandomNumber, toFarenhite} = require('./utils')

// console.log('Random Number (1-100): '+generateRandomNumber());

// console.log('Celcius to Farenhite: '+toFarenhite(0));


//Os Module : have thier own built own modeules to interact with the OS and the Server

// const os = require('os')// no ./

// // info about current user 
// const user = os.userInfo()

// // up time of the system in seconds 
// const uptime = os.uptime()

// //general information about the system
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(user)
// console.log(`The System is Uptime for ${uptime} seconds`)
// console.log(currentOS)


//path module
const path = require('path')

//The platform-specific file separator. '\' or '/'.
console.log(path.sep)

//The operating system's root directory. '/root' on Unix, 'C:\\' on Windows.
console.log(path.resolve())

console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))

console.log(path.resolve('content', 'subfolder', 'test.txt'))


//The absolute path of the process.cwd().
const filePath = path.join('/content', '/subfolder', '/test.txt')
console.log(filePath)
console.log(path.dirname(filePath))
const base =  path.basename(filePath)
console.log(base)
console.log("Hello Kaleab Wondwossen!")