export async function save(c) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await resp.json()

    return c.json(result);
}

export const DSL = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "This is a plain text section block.",
				"emoji": true
			}
		}
	]
}

export const Manfiest = {
    name: "PlainText Extension",
    description: "Plaintext extension helps you visualize text in new ways you've never seen before"
}