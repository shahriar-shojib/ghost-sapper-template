import GhostContentAPI from '@tryghost/content-api';
const credentials = {
	url: 'http://localhost:2368',
	key: '26a9974988c3d3e1881a31c0ac',
	version: 'v3',
};
const api = new GhostContentAPI(credentials);
export default api;
