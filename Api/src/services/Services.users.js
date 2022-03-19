const users = require('../models/Users');

const getUsers = async() => {
    const dataDb = await users.find();
    return dataDb;
}

module.exports = {
    getUsers
}