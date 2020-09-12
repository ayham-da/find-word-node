const fs = require('fs');

const args = process.argv.slice(2)
const searchTerm = args[0]
const filePath = args[1]

const logger = fs.createWriteStream('wordSearch.log')




let chunkNum = 0
let worteCount = 0
// let book = ''

if(args.length == 0) {
let searchTerm = 'localhost'
let filePath = 'data.txt'
const reader = fs.createReadStream(filePath ,'utf-8')

reader.on('data', chunk =>{
    chunkNum++
    worteCount++

    // book += chunk
    const results = chunk.split(searchTerm).length -1
    worteCount += results
    console.log("Reading chunk " + chunkNum)
})
reader.on('end', () => {
    
    worteCount++
    console.log("End of data")
    console.log("Number of chunks:" + chunkNum)
    console.log("Found "+ searchTerm +" " + worteCount + " times")
})
}else if(args.length == 1){
 
let filePath = 'data.txt'
const reader = fs.createReadStream(filePath ,'utf-8')

reader.on('data', chunk =>{
    chunkNum++
    worteCount++

    // book += chunk
    const results = chunk.split(searchTerm).length -1
    worteCount += results
    console.log("Reading chunk " + chunkNum)
})
reader.on('end', () => {
    
    worteCount++
    console.log("End of data")
    console.log("Number of chunks:" + chunkNum)
    console.log("Found "+ searchTerm +" " + worteCount + " times")
})
}else{
    
    const reader = fs.createReadStream(filePath ,'utf-8')

    reader.on('data', chunk =>{
        chunkNum++
        worteCount++
        const results = chunk.split(searchTerm).length -1
        worteCount += results
        // book += chunk
        console.log("Reading chunk " + chunkNum)
    })
    reader.on('end', () => {
        
        worteCount++

        console.log("End of data")
        console.log("Number of chunks:"+ chunkNum)
        console.log("Found "+ searchTerm +" " + worteCount + " times")
    })
}