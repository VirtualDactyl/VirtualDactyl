module.exports = {
	name: "utils/ping",
	method: 'GET',
	run: async(req, res) => {
		res.json({
			ok: true
		});
	}
};