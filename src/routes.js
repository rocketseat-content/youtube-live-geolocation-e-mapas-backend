const { Router } = require('express');

const PointController = require('./app/controllers/PointController');

const routes = new Router();

routes.post('/points', PointController.store);
routes.get('/points', PointController.index);

module.exports = routes;