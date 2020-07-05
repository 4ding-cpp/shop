console.log('plugins autoload')
import Vue from 'vue'


// use grpc
import sql_pb from '@/assets/shoppb/sql_pb'
Vue.prototype.sqlpb = sql_pb
import car_pb from '@/assets/shoppb/car_pb'
Vue.prototype.carpb = car_pb
import order_pb from '@/assets/shoppb/order_pb'
Vue.prototype.orderpb = order_pb


import grpcAxios from '@/plugins/grpc-axios'
Vue.prototype.grpcAxios = grpcAxios ;
import grpcFetch from '@/plugins/grpc-fetch'
Vue.prototype.grpcFetch = grpcFetch ;
