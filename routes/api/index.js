const router = require('express').Router();
const thoughtRoutes = require('./');
const userRoutes = require('./');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
