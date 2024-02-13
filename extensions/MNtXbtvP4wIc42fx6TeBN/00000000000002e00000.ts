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
				"text": "This is coming from another plaintext extension",
				"emoji": true
			}
		}
	]
}

export const Manifest = {
    name: "Demo Extension WIth Modifications",
    description: "Plaintext extension helps you visualize text in new ways you've never seen before"
}