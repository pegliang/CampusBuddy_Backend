const { default: axios } = require("axios");
const getHTTPErrorCode = require("../utils/getHTTPErrorCode");
require("dotenv").config();

async function deleteUserByEmailController(req, res) {
    const email = req.query.email;

    if (!email) return res.status(400).send();

    try {
        await axios.delete(process.env.USER_SERVICE_HOST + `/deleteUserByEmail?email=${email}`);
        return res.send();

    } catch (err) {
        return res.status(getHTTPErrorCode(err)).send();
    }
}

module.exports = {
    deleteUserByEmailController
}