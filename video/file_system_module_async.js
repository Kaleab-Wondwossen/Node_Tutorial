const { isUtf8 } = require('buffer');
const {readFile, writeFile}= require('fs')
// with out the utf the output will be a buffer which are just numbers
// Out Put With out utf <Buffer 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 72 6f 6d 20 74 65 73 74 20>
// readFile('./content/first.txt','utf8', (err, result)=>{
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(result)
// })

readFile('./content/first.txt','utf-8', (err, result)=>{
    if (err) {
        console.error(err)
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.error(err)
            return;
        }
        const second = result
        writeFile(
            './content/result_async.txt', 
            `Here is the result: ${first}, ${second}`,
            {flag: 'a'},//flag a = append
            (err, result)=>{
                if (err) {
                    console.error(err)
                    return;
                }
                console.log(result)
            }
        )
    })
})