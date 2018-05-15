"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const demo_1 = require("./demo/demo");
const app = new Koa();
app.use(async (ctx, next) => {
    ctx.set('Accept', 'application/json');
    await next();
});
console.log(demo_1.default.useCache, 12113);
app.use(ctx => {
    ctx.body = 'hello~world12311';
});
app.listen(3333);
