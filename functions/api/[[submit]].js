/**
 * POST /api/submit
 */
export async function onRequest({ request }) {

	async function gatherResponse(response) {
		const { headers } = response;
		const contentType = headers.get("content-type") || "";
		if (contentType.includes("application/json")) {
			return JSON.stringify(await response.json());
		}
		return await response.text();
	}

	const init = {
		headers: {
			"content-type": "application/json;charset=UTF-8",
		},
	};

	// return new Response("dddddddddddd")

	try {
		const url = "https://amd-api.magicaio.com/api/admin/login";
		const modifiedRequest = new Request(url, {
			method: request.method, body: request.body, headers: {
				...request.headers,
				"Content-Type": "application/json;charset=UTF-8"
			}
		});
		console.log(`[LOGGING FROM ${request.url}, ${JSON.stringify(modifiedRequest.method)}, ${modifiedRequest.body}`)

		const response = await fetch(modifiedRequest);
		// const results = await gatherResponse(response);
		// return new Response(results, init);
		return new Response(await response.text());
	} catch (e) {
		return new Response(JSON.stringify({ error: e.message }), {
			status: 500,
		});
	}


}