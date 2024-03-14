/**
 * POST /api/submit
 */
export async function onRequest({ request }) {

	// async function gatherResponse(response) {
	// 	const { headers } = response;
	// 	const contentType = headers.get("content-type") || "";
	// 	if (contentType.includes("application/json")) {
	// 		return JSON.stringify(await response.json());
	// 	}
	// 	return await response.text();
	// }

	// const init = {
	// 	headers: {
	// 		"content-type": "application/json;charset=UTF-8",
	// 	},
	// };

	// return new Response("dddddddddddd")

	try {
		const reqUrl = request.url.split("/api")[1]
		const url = "https://amd-api.magicaio.com/api/" + reqUrl;
		const modifiedRequest = new Request(url, {
			method: request.method, body: request.body, headers: request.headers
		});
		const response = await fetch(modifiedRequest);
		return new Response(await response.text());
	} catch (e) {
		return new Response(JSON.stringify({ error: e.message }), {
			status: 500,
		});
	}


}