'use strict';

var bcrypt = require('bcrypt-nodejs');
// var jwt = require('../services/jwt');
var moment = require('moment');

var fs = require('fs');
var path = require('path');

var db = require('../config/db');



function getSlotExceptions(req, res) {
    // var texto = req.params.p_nombre;
    db.sequelize.query('SELECT * FROM exception', {
        type: db.sequelize.QueryTypes.SELECT
    }).then(result => {
        return res.status(200).send({ result: result });
    });
}


module.exports = {
    getSlotExceptions
};
