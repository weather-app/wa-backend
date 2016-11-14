var models = require('../models/'),
    Sequelize = require('sequelize');

function validateValue(type, value) {
    if (type instanceof Sequelize.STRING)
        return Sequelize.Validator.toString(value);
    if (type instanceof Sequelize.INTEGER)
        return Sequelize.Validator.toInt(value);
    if (type instanceof Sequelize.BIGINT)
        return Sequelize.Validator.toInt(value);
    if (type instanceof Sequelize.BOOLEAN)
        return Sequelize.Validator.toBoolean(value);
    if (type instanceof Sequelize.DATE)
        return Sequelize.Validator.toDate(value);
    if (type instanceof Sequelize.TEXT)
        return Sequelize.Validator.toString(value);
    if (type instanceof Sequelize.ARRAY) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return [value];
        }
    }
    return null;
}

module.exports.syncData = function () {
    var syncData = require('../config/sync-data.json');
    syncData.forEach(function (d) {
        if (d.sync) {
            models[d.name].destroy({where: {}});
            var tmpData = require(d.require);
            tmpData.forEach(function (n) {
                models[d.name].create(n);
            });
        }
    });
};
