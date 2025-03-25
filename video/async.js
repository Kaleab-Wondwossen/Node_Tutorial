// const { log } = require('console')
const { readFile, writeFile } = require('fs').promises
// const { readFile, writeFile } = require('fs')

// const util = require('util')
// const getText = util.promisify(readFile)
// const writezToFile = util.promisify(writeFile)




// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try {
        // const first = await getText('./content/first.txt', 'utf8')
        // const second = await getText('./content/second.txt', 'ascii')

        // await writezToFile('./content/result_promise.txt', `\nHere is the result: ${first}, ${second}`, { flag: 'a ' })

        // console.log(first, '\n', second)


        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'ascii')

        await   ('./content/result_promise.txt', `\nHere is the result: ${first}, ${second}`, {
            flag: 'a'
            
        }


        )

        console.log(first, '\n', second)


    } catch (error) {
        console.log(error)
    }
}

start()