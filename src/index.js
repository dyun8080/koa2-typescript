"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx, next) => {
    dfsdfctx.set('Accept', 'application/json');
    await next();
});
app.use(ctx => {
    ctx.body = 'hello~world';
});
app.listen(3333);
//# sourceMappingURL=index.js.map