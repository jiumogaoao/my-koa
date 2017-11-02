const Koa = require('koa');
const Router = require('koa-router');
const IO = require('koa-socket');
const about = require('./about');
const app = new Koa();
const io = new IO();
io.attach(app);
io.on('connection',sock => {
    console.log(sock)
    sock.socket.emit('news','111')
})
io.on('my other event',(ctx,data)=>{
    console.log(ctx)
    console.log(data)
})
const main = new Router();
main.get('/',function(ctx,next){
    ctx.response.type = 'html';
    ctx.response.body = 'main';
})
main.use('/about',about.routes(),about.allowedMethods())
app.use(main.routes());
app.listen(3000);