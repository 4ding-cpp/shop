import sql_pb from '@/assets/shoppb/sql_pb'
import car_pb from '@/assets/shoppb/car_pb'
import order_pb from '@/assets/shoppb/order_pb'
import adapter_pb from '@/assets/shoppb/adapter_pb'

import grpcFetch from '@/plugins/grpc-fetch'
import grpcAxios from '@/plugins/grpc-axios'

export default function ({ app , $axios }) {
  app.sqlpb = sql_pb
  app.carpb = car_pb
  app.orderpb = order_pb
  app.adpb = adapter_pb
  // 伺服器AJAX用
  app.grpcFetch = grpcFetch ;
  app.grpcAxios = grpcAxios ;
}