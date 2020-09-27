import api from '../modules/ghost';
export async function get(_req, res) {
	const data = await api.posts.browse({
		limit: 10,
		include: 'authors, tags',
	});
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
}
