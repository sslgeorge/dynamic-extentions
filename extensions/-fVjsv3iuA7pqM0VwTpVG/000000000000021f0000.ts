import fs from 'node:fs'

export function save(res) {
    const file = fs.readFileSync("./main.ts")
     setTimeout(()=> {
        console.log('Complete')
    }, 20000)
    
    console.log(file.toString())
   
    return res.send("ahhh e dey work oh")
}