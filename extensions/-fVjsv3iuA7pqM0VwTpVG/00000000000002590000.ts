import fs from "node:fs"

export function save(c) {
    // const file = fs.readFileSync("./main.ts")
    return c.json({name: "working"});
}