import api from '../modules/ghost';
export async function get(_req, res) {
	const data = await api.settings.browse();
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
}
