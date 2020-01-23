const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());
const router = new Router();
router.get('/api/user',function (ctx) {
    ctx.body = [
        {name:'zf1',id:1},
        {name:'jw1',id:2},
        {name:'zry1',id:3}
    ]
});
app.use(router.routes());
app.listen(3000,function () {
    console.log('server start 3000');
});