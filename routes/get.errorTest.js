// This endpoint will give an error to demonstrate the error handeler
module.exports = {
    name: "err",
    run: async(req, res) => {
        rs.send('Hello!');
    }
};