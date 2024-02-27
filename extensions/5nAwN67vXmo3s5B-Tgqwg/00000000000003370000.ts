export async function save(data) {
    return {
        label: {
            isValid: true
        }

    }
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
    name: "Brand New Extension",
    description: "Plaintext extension helps you visualize text in new ways you've never seen before"
}