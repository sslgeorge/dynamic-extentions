import fs from 'node:fs'

export function save(res) {
    const file = fs.readFileSync("./main.ts")
    console.log(file)
    return res.send("na them dey rush us")
}