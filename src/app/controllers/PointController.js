const { literal, where } = require("sequelize");
const Point = require("../models/Point");

class PointController {
  async store(req, res) {
    const point = await Point.create(req.body);

    return res.json(point);
  }

  async index(req, res) {
    const { latitude, longitude } = req.query;

    const haversine = `(6371 * acos(cos(radians(${latitude}))
    * cos(radians(latitude))
    * cos(radians(longitude)
    - radians(${longitude}))
    + sin(radians(${latitude}))
    * sin(radians(latitude))))`;

    const points = await Point.findAll({
      where: where(literal(haversine), "<=", 10)
    });

    return res.json(points);
  }
}

module.exports = new PointController();
