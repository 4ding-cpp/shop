import sql_pb from '@/assets/shoppb/sql_pb'
import car_pb from '@/assets/shoppb/car_pb'
import order_pb from '@/assets/shoppb/order_pb'
import adapter_pb from '@/assets/shoppb/adapter_pb'
import product_pb from '@/assets/shoppb/product-goods_pb'
import freeback_pb from '@/assets/shoppb/freeback_pb'
import customer_pb from '@/assets/shoppb/customer_pb'
import MD5 from './md5'


import grpcFetch from '@/plugins/grpc-fetch'
import grpcAxios from '@/plugins/grpc-axios'

export default function ({ app , $axios }) {
  app.MD5 = MD5 ;

  app.sqlpb = sql_pb
  app.carpb = car_pb
  app.orderpb = order_pb
  app.adpb = adapter_pb
  app.prodpb = product_pb
  app.freebackpb = freeback_pb
  app.customerpb = customer_pb
  // 伺服器AJAX用
  app.grpcFetch = grpcFetch ;
  app.grpcAxios = grpcAxios ;
}