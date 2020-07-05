import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as car_pb from './car_pb';
import * as customer_pb from './customer_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getSalesId(): string;
  setSalesId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCustomer(): customer_pb.Customer | undefined;
  setCustomer(value?: customer_pb.Customer): void;
  hasCustomer(): boolean;
  clearCustomer(): void;

  getCarId(): string;
  setCarId(value: string): void;

  getCouponId(): string;
  setCouponId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getPaymentType(): string;
  setPaymentType(value: string): void;

  getPaymentState(): number;
  setPaymentState(value: number): void;

  getLogisticsType(): string;
  setLogisticsType(value: string): void;

  getLogisticsState(): number;
  setLogisticsState(value: number): void;

  getReceiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceiveAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReceiveAt(): boolean;
  clearReceiveAt(): void;

  getComeFrom(): number;
  setComeFrom(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFreight(): number;
  setFreight(value: number): void;

  getOrderCharge(): number;
  setOrderCharge(value: number): void;

  getPaymentCharge(): number;
  setPaymentCharge(value: number): void;

  getLogisticsCharge(): number;
  setLogisticsCharge(value: number): void;

  getReOrderId(): string;
  setReOrderId(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  getCommodityList(): Array<car_pb.Commodity>;
  setCommodityList(value: Array<car_pb.Commodity>): void;
  clearCommodityList(): void;
  addCommodity(value?: car_pb.Commodity, index?: number): car_pb.Commodity;

  getPayment(): Payment | undefined;
  setPayment(value?: Payment): void;
  hasPayment(): boolean;
  clearPayment(): void;

  getLogistics(): Logistics | undefined;
  setLogistics(value?: Logistics): void;
  hasLogistics(): boolean;
  clearLogistics(): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId: string,
    storeId: string,
    salesId: string,
    customerId: string,
    customer?: customer_pb.Customer.AsObject,
    carId: string,
    couponId: string,
    state: number,
    paymentType: string,
    paymentState: number,
    logisticsType: string,
    logisticsState: number,
    receiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comeFrom: number,
    count: number,
    amount: number,
    freight: number,
    orderCharge: number,
    paymentCharge: number,
    logisticsCharge: number,
    reOrderId: string,
    remark: string,
    commodityList: Array<car_pb.Commodity.AsObject>,
    payment?: Payment.AsObject,
    logistics?: Logistics.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OrderBatch extends jspb.Message {
  getOrderList(): Array<Order>;
  setOrderList(value: Array<Order>): void;
  clearOrderList(): void;
  addOrder(value?: Order, index?: number): Order;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBatch.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBatch): OrderBatch.AsObject;
  static serializeBinaryToWriter(message: OrderBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBatch;
  static deserializeBinaryFromReader(message: OrderBatch, reader: jspb.BinaryReader): OrderBatch;
}

export namespace OrderBatch {
  export type AsObject = {
    orderList: Array<Order.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Payment extends jspb.Message {
  getRedirect(): string;
  setRedirect(value: string): void;

  getRtncode(): string;
  setRtncode(value: string): void;

  getRtnmsg(): string;
  setRtnmsg(value: string): void;

  getTradeno(): string;
  setTradeno(value: string): void;

  getTrandamt(): string;
  setTrandamt(value: string): void;

  getPaymenttype(): string;
  setPaymenttype(value: string): void;

  getTradedate(): string;
  setTradedate(value: string): void;

  getExpiredate(): string;
  setExpiredate(value: string): void;

  getBankcode(): string;
  setBankcode(value: string): void;

  getVaccount(): string;
  setVaccount(value: string): void;

  getPaymentno(): string;
  setPaymentno(value: string): void;

  getBarcode1(): string;
  setBarcode1(value: string): void;

  getBarcode2(): string;
  setBarcode2(value: string): void;

  getBarcode3(): string;
  setBarcode3(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    redirect: string,
    rtncode: string,
    rtnmsg: string,
    tradeno: string,
    trandamt: string,
    paymenttype: string,
    tradedate: string,
    expiredate: string,
    bankcode: string,
    vaccount: string,
    paymentno: string,
    barcode1: string,
    barcode2: string,
    barcode3: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Logistics extends jspb.Message {
  getRenderid(): string;
  setRenderid(value: string): void;

  getRedirect(): string;
  setRedirect(value: string): void;

  getRtncode(): string;
  setRtncode(value: string): void;

  getRtnmsg(): string;
  setRtnmsg(value: string): void;

  getAllpaylogisticsid(): string;
  setAllpaylogisticsid(value: string): void;

  getLogisticstype(): string;
  setLogisticstype(value: string): void;

  getLogisticssubtype(): string;
  setLogisticssubtype(value: string): void;

  getGoodsamount(): string;
  setGoodsamount(value: string): void;

  getUpdatestatusdate(): string;
  setUpdatestatusdate(value: string): void;

  getSendername(): string;
  setSendername(value: string): void;

  getSenderphone(): string;
  setSenderphone(value: string): void;

  getSendercellphone(): string;
  setSendercellphone(value: string): void;

  getSenderzipcode(): string;
  setSenderzipcode(value: string): void;

  getSenderaddress(): string;
  setSenderaddress(value: string): void;

  getReceivername(): string;
  setReceivername(value: string): void;

  getReceiverphone(): string;
  setReceiverphone(value: string): void;

  getReceivercellphone(): string;
  setReceivercellphone(value: string): void;

  getReceiveremail(): string;
  setReceiveremail(value: string): void;

  getReceiverzipcode(): string;
  setReceiverzipcode(value: string): void;

  getReceiveraddress(): string;
  setReceiveraddress(value: string): void;

  getCvsstoreid(): string;
  setCvsstoreid(value: string): void;

  getCvsstorename(): string;
  setCvsstorename(value: string): void;

  getCvsaddress(): string;
  setCvsaddress(value: string): void;

  getCvstelephone(): string;
  setCvstelephone(value: string): void;

  getCvsoutside(): string;
  setCvsoutside(value: string): void;

  getCvspaymentno(): string;
  setCvspaymentno(value: string): void;

  getCvsvalidationno(): string;
  setCvsvalidationno(value: string): void;

  getStoretype(): string;
  setStoretype(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getTemperature(): string;
  setTemperature(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getSpecification(): string;
  setSpecification(value: string): void;

  getScheduledpickuptime(): string;
  setScheduledpickuptime(value: string): void;

  getScheduleddeliverytime(): string;
  setScheduleddeliverytime(value: string): void;

  getScheduleddeliverydate(): string;
  setScheduleddeliverydate(value: string): void;

  getBookingnode(): string;
  setBookingnode(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logistics.AsObject;
  static toObject(includeInstance: boolean, msg: Logistics): Logistics.AsObject;
  static serializeBinaryToWriter(message: Logistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logistics;
  static deserializeBinaryFromReader(message: Logistics, reader: jspb.BinaryReader): Logistics;
}

export namespace Logistics {
  export type AsObject = {
    renderid: string,
    redirect: string,
    rtncode: string,
    rtnmsg: string,
    allpaylogisticsid: string,
    logisticstype: string,
    logisticssubtype: string,
    goodsamount: string,
    updatestatusdate: string,
    sendername: string,
    senderphone: string,
    sendercellphone: string,
    senderzipcode: string,
    senderaddress: string,
    receivername: string,
    receiverphone: string,
    receivercellphone: string,
    receiveremail: string,
    receiverzipcode: string,
    receiveraddress: string,
    cvsstoreid: string,
    cvsstorename: string,
    cvsaddress: string,
    cvstelephone: string,
    cvsoutside: string,
    cvspaymentno: string,
    cvsvalidationno: string,
    storetype: string,
    status: string,
    temperature: string,
    distance: string,
    specification: string,
    scheduledpickuptime: string,
    scheduleddeliverytime: string,
    scheduleddeliverydate: string,
    bookingnode: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

