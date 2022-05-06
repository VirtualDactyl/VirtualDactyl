module.exports = {
    name: "hi",
    method: 'POST',
    run: async(req, res) => {
        res.send('Hello!');
    }
};
