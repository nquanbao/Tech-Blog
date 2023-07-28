const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const sigupRoutes = require('./signup')
const loginRoutes = require('./login')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/signup',sigupRoutes);
router.use('/login', loginRoutes);

module.exports = router;
