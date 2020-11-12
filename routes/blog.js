const router = require('express').Router();
const blogController = require('../controllers/blogController');

router
.get('/', blogController.blog_index)
.get('/create/', blogController.blog_create_get)
.get('/:blogid',blogController.blog_details)
.post('/create/', blogController.blog_create_post)
.delete('/:blogid',blogController.blog_delete);

module.exports = router;