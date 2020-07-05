# nuxt-cart

> My tiptop Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


https://github.com/4ding-cpp/protofile/blob/master/rpc-service/shop.rpc.proto
// 到購物車 cart/123 先 將storage 送出鎖定
CompleteCar
// 購物車按下一步 cart/123 送出
CreateOrder
// step3 結帳
PaymentOrder