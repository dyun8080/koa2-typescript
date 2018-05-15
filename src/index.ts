// import 'reflect-metadata'
import * as Koa from 'koa'

import demo from './demo/demo'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Accept', 'application/json')
  await next()
})

console.log(demo.useCache, 12113)

app.use(ctx => {
  ctx.body = 'hello~world12311'
})

app.listen(3333)