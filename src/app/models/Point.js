const Sequelize = require("sequelize");

const { Model } = require("sequelize");

class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        latitude: Sequelize.DECIMAL(6, 9),
        longitude: Sequelize.DECIMAL(6, 9)
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Point;
