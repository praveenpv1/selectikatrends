
const express = require('express');
const router = express.Router();

const feed_posts = require('../Controllers/feed_posts.controller');

router
  .route()
  .get(feed_posts.getdata)
//   .post(feed_posts)
//   .patch(feed_posts)
//   .delete(feed_posts)

module.exports = router;