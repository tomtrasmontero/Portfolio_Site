const Sequelize = require('sequelize');
const db = require('../_db');

module.exports = db.define('portfolio', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
	},
	pictureUrl: {
		type: Sequelize.ARRAY(Sequelize.TEXT),
	},
	technology: {
		type: Sequelize.TEXT,
	}
});
