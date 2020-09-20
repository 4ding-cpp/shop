
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator';
Vue.prototype.Validator = window.Validator = SimpleVueValidation.Validator;
SimpleVueValidation.extendTemplates({
  length: '長度必須等於{0} ',
});
Vue.use(SimpleVueValidation);

// MD5 
import MD5 from './md5'
Vue.prototype.MD5 = MD5

// use grpc
import sql_pb from '@/assets/shoppb/sql_pb'
Vue.prototype.sqlpb = sql_pb
import car_pb from '@/assets/shoppb/car_pb'
Vue.prototype.carpb = car_pb
import order_pb from '@/assets/shoppb/order_pb'
Vue.prototype.orderpb = order_pb
import customer_pb from '@/assets/shoppb/customer_pb'
Vue.prototype.customerpb = customer_pb



import grpcAxios from '@/plugins/grpc-axios'
Vue.prototype.grpcAxios = grpcAxios ;
import grpcFetch from '@/plugins/grpc-fetch'
Vue.prototype.grpcFetch = grpcFetch ;

import vmodal from 'vue-js-modal'
Vue.use(vmodal)
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)