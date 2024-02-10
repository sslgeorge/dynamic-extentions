import fs from 'node:fs'

export function save(res) {
    const file = fs.readFileSync("./main.ts")
    console.log(file.toString())
    return res.send("ahhh e dey work oh")
}