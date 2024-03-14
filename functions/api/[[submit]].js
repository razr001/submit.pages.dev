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
		return response.text();
	}

	const init = {
		headers: {
			"content-type": "application/json;charset=UTF-8",
		},
	};

	const url = "https://amd-api.magicaio.com";
	const modifiedRequest = new Request(url, request);
	const response  = await fetch(modifiedRequest);
	const results = await gatherResponse(response);
	return new Response(results, init);
}