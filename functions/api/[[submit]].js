/**
 * POST /api/submit
 */
export async function onRequest({ request }) {
	try {
		const reqUrl = request.url.split("/api")[1]
		const url = API_HOST + reqUrl;
		const modifiedRequest = new Request(url, {
			method: request.method, body: request.body, headers: request.headers
		});
		return await fetch(modifiedRequest);
	} catch (e) {
		return new Response(JSON.stringify({ error: e.message }), {
			status: 500,
		});
	}
}
