const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');


//rota Annotaions

routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//rota priority

routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);
module.exports = routes;

//rota Content
routes.post('/contents/:id', ContentController.update );
module.exports = routes;