// two of the most important methods emit() and on()


const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name , id )=>{
    console.log('data received as:\n'+name +'\n'+id);
})

customEmitter.on('response', ()=>{
    console.log('Some data received')
})
customEmitter.prependListener('response', ()=>{
    console.log('first')
})
//position of the emit() method matters 
customEmitter.emit('response','Kaleab', "ETS0676/13") 