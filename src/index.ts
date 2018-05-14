// import 'reflect-metadata'
import * as Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Accept', 'application/json')
  await next()
})

app.use(ctx => {
  ctx.body = 'hello~world'
})

app.listen(3333)