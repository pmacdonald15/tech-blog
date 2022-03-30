const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        "username": "laura",
        "email": "laura@outlook.com",
        "password": "password12345"
    },
    {
        "username": "reece",
        "email": "reece@outlook.com",
        "password": "password12345"
    },
    {
        "username": "will",
        "email": "will@outlook.com",
        "password": "password12345"
    },
    {
        "username": "johnny",
        "email": "johnny@outlook.com",
        "password": "password12345"
    }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;