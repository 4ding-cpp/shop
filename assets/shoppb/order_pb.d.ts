import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
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

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getIsCustomer(): boolean;
  setIsCustomer(value: boolean): void;

  getCarId(): string;
  setCarId(value: string): void;

  getCouponId(): string;
  setCouponId(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getFreight(): number;
  setFreight(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getOrderCharge(): number;
  setOrderCharge(value: number): void;

  getSalesCharge(): number;
  setSalesCharge(value: number): void;

  getPaymentCharge(): number;
  setPaymentCharge(value: number): void;

  getLogisticsCharge(): number;
  setLogisticsCharge(value: number): void;

  getState(): number;
  setState(value: number): void;

  getPaymentState(): number;
  setPaymentState(value: number): void;

  getLogisticsState(): number;
  setLogisticsState(value: number): void;

  getPaymentAdapter(): string;
  setPaymentAdapter(value: string): void;

  getPaymentService(): string;
  setPaymentService(value: string): void;

  getPaymentType(): number;
  setPaymentType(value: number): void;

  getLogisticsAdapter(): string;
  setLogisticsAdapter(value: string): void;

  getLogisticsService(): string;
  setLogisticsService(value: string): void;

  getLogisticsType(): number;
  setLogisticsType(value: number): void;

  getLogisticsSubType(): number;
  setLogisticsSubType(value: number): void;

  getInTimeout(): boolean;
  setInTimeout(value: boolean): void;

  getReturnStaus(): number;
  setReturnStaus(value: number): void;

  getPickupAt(): string;
  setPickupAt(value: string): void;

  getCloseAt(): string;
  setCloseAt(value: string): void;

  getPayAt(): string;
  setPayAt(value: string): void;

  getPayIp(): string;
  setPayIp(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  getOther(): OrderOther | undefined;
  setOther(value?: OrderOther): void;
  hasOther(): boolean;
  clearOther(): void;

  getCommodityList(): Array<OrderCommomdity>;
  setCommodityList(value: Array<OrderCommomdity>): void;
  clearCommodityList(): void;
  addCommodity(value?: OrderCommomdity, index?: number): OrderCommomdity;

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
    name: string,
    email: string,
    phone: string,
    isCustomer: boolean,
    carId: string,
    couponId: string,
    count: number,
    freight: number,
    amount: number,
    orderCharge: number,
    salesCharge: number,
    paymentCharge: number,
    logisticsCharge: number,
    state: number,
    paymentState: number,
    logisticsState: number,
    paymentAdapter: string,
    paymentService: string,
    paymentType: number,
    logisticsAdapter: string,
    logisticsService: string,
    logisticsType: number,
    logisticsSubType: number,
    inTimeout: boolean,
    returnStaus: number,
    pickupAt: string,
    closeAt: string,
    payAt: string,
    payIp: string,
    city: string,
    device: string,
    remark: string,
    other?: OrderOther.AsObject,
    commodityList: Array<OrderCommomdity.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OrderCommomdity extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderCommomdity.AsObject;
  static toObject(includeInstance: boolean, msg: OrderCommomdity): OrderCommomdity.AsObject;
  static serializeBinaryToWriter(message: OrderCommomdity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderCommomdity;
  static deserializeBinaryFromReader(message: OrderCommomdity, reader: jspb.BinaryReader): OrderCommomdity;
}

export namespace OrderCommomdity {
  export type AsObject = {
    orderId: string,
    storeId: string,
    productId: string,
    sku: string,
    photoSrc: string,
    name: string,
    amount: number,
    price: number,
  }
}

export class ContactInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getZipCode(): string;
  setZipCode(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getCvsCode(): string;
  setCvsCode(value: string): void;

  getCvsType(): string;
  setCvsType(value: string): void;

  getCvsName(): string;
  setCvsName(value: string): void;

  getCvsAddress(): string;
  setCvsAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContactInfo): ContactInfo.AsObject;
  static serializeBinaryToWriter(message: ContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactInfo;
  static deserializeBinaryFromReader(message: ContactInfo, reader: jspb.BinaryReader): ContactInfo;
}

export namespace ContactInfo {
  export type AsObject = {
    name: string,
    phone: string,
    email: string,
    zipCode: string,
    address: string,
    cvsCode: string,
    cvsType: string,
    cvsName: string,
    cvsAddress: string,
  }
}

export class OrderOther extends jspb.Message {
  getPaymentNo(): string;
  setPaymentNo(value: string): void;

  getPayIp(): string;
  setPayIp(value: string): void;

  getPayAt(): string;
  setPayAt(value: string): void;

  getExpireDay(): number;
  setExpireDay(value: number): void;

  getBankCode(): string;
  setBankCode(value: string): void;

  getBankAccount(): string;
  setBankAccount(value: string): void;

  getCvsNo(): string;
  setCvsNo(value: string): void;

  getLogisticsNo(): string;
  setLogisticsNo(value: string): void;

  getSender(): ContactInfo | undefined;
  setSender(value?: ContactInfo): void;
  hasSender(): boolean;
  clearSender(): void;

  getReceiver(): ContactInfo | undefined;
  setReceiver(value?: ContactInfo): void;
  hasReceiver(): boolean;
  clearReceiver(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderOther.AsObject;
  static toObject(includeInstance: boolean, msg: OrderOther): OrderOther.AsObject;
  static serializeBinaryToWriter(message: OrderOther, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderOther;
  static deserializeBinaryFromReader(message: OrderOther, reader: jspb.BinaryReader): OrderOther;
}

export namespace OrderOther {
  export type AsObject = {
    paymentNo: string,
    payIp: string,
    payAt: string,
    expireDay: number,
    bankCode: string,
    bankAccount: string,
    cvsNo: string,
    logisticsNo: string,
    sender?: ContactInfo.AsObject,
    receiver?: ContactInfo.AsObject,
  }
}

export class OrderBatch extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  getPaymentState(): number;
  setPaymentState(value: number): void;

  getLogisticsState(): number;
  setLogisticsState(value: number): void;

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
    state: number,
    paymentState: number,
    logisticsState: number,
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

