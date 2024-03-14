/**
 * POST /api/submit
 */
export async function onRequest({ request }) {
	const url = "https://amd-api.magicaio.com";
	const modifiedRequest = new Request(url, request);
	return await fetch(modifiedRequest);
}
