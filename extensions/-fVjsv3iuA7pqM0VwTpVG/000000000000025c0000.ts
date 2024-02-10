export async function save(c) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await resp.json()

    return c.json(result);
}