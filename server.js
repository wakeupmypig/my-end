const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
app.use(cors());
const router = new Router();
router.get('/api/user',function (ctx) {
    ctx.body = [
        {name:'zf111',id:11},
        {name:'jw122',id:22},
        {name:'zry132',id:33}
    ]
});
app.use(router.routes());
app.listen(3000,function () {
    console.log('server start 3000');
});