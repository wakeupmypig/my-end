const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());
const router = new Router();
router.get('/api/user',function (ctx) {
    ctx.body = [
        {name:'zf',id:1},
        {name:'jw',id:2},
        {name:'zry',id:3}
    ]
});
app.use(router.routes());
app.listen(3000,function () {
    console.log('server start 3000');
});