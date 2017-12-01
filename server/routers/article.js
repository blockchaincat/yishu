const router = require('koa-router')();
const ArticleController = require('../controllers/ArticleController');

const routers = router
  .post('/createArticle',ArticleController.createArticle)
  .post('/postComment',ArticleController.postComment)
  .post('/clickThumb',ArticleController.clickThumb)
  .post('/toggleCollect',ArticleController.toggleCollect)
  .get('/getArticleList',ArticleController.getArticleList)
  .get('/getArticleContent',ArticleController.getArticleContent)
  // .get('getComments',ArticleController.getComments)
  .get('/getAuthorInfo',ArticleController.getAuthorInfo);
module.exports = routers;
