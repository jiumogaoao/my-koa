const Router = require('koa-router');
const about = new Router();
about.get('/',function(ctx,next){
    ctx.response.type = 'json';
    let b='c'
    //ctx.throw(403)
    ctx.response.body = {a:b};
})
about.get('/b',function(ctx,next){
    ctx.response.type = 'json';
    let b='c'
    //ctx.throw(403)
    ctx.response.body = {d:b};
})
module.exports = about;