import api from '../modules/ghost';
export async function get(req, res) {
	const { slug } = req.params;
	try {
		const data = await api.posts.read({
			slug,
		});
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(data));
	} catch (_error) {
		try {
			const data = await api.pages.read({
				slug,
			});
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(data));
		} catch (error) {
			res.statusCode = 404;
			res.end('not found');
		}
	}
}
