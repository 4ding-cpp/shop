import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCarId(): string;
  setCarId(value: string): void;

  getDiscountId(): string;
  setDiscountId(value: string): void;

  getState(): number;
  setState(value: number): void;

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

  getCode(): string;
  setCode(value: string): void;

  getTrackId(): string;
  setTrackId(value: string): void;

  getPayment(): Payment | undefined;
  setPayment(value?: Payment): void;
  hasPayment(): boolean;
  clearPayment(): void;

  getLogistics(): Logistics | undefined;
  setLogistics(value?: Logistics): void;
  hasLogistics(): boolean;
  clearLogistics(): void;

  getReceiver(): Receiver | undefined;
  setReceiver(value?: Receiver): void;
  hasReceiver(): boolean;
  clearReceiver(): void;

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
    customerId: string,
    carId: string,
    discountId: string,
    state: number,
    comeFrom: number,
    count: number,
    amount: number,
    freight: number,
    orderCharge: number,
    paymentCharge: number,
    logisticsCharge: number,
    code: string,
    trackId: string,
    payment?: Payment.AsObject,
    logistics?: Logistics.AsObject,
    receiver?: Receiver.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Payment extends jspb.Message {
  getPaymentState(): number;
  setPaymentState(value: number): void;

  getPaymentId(): string;
  setPaymentId(value: string): void;

  getPaymentType(): string;
  setPaymentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    paymentState: number,
    paymentId: string,
    paymentType: string,
  }
}

export class Logistics extends jspb.Message {
  getLogisticsState(): number;
  setLogisticsState(value: number): void;

  getLogisticsId(): string;
  setLogisticsId(value: string): void;

  getLogisticsType(): string;
  setLogisticsType(value: string): void;

  getLogisticsSubType(): string;
  setLogisticsSubType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logistics.AsObject;
  static toObject(includeInstance: boolean, msg: Logistics): Logistics.AsObject;
  static serializeBinaryToWriter(message: Logistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logistics;
  static deserializeBinaryFromReader(message: Logistics, reader: jspb.BinaryReader): Logistics;
}

export namespace Logistics {
  export type AsObject = {
    logisticsState: number,
    logisticsId: string,
    logisticsType: string,
    logisticsSubType: string,
  }
}

export class Receiver extends jspb.Message {
  getReceiverStoreId(): string;
  setReceiverStoreId(value: string): void;

  getReceiverName(): string;
  setReceiverName(value: string): void;

  getReceiverPhone(): string;
  setReceiverPhone(value: string): void;

  getReceiverEmail(): string;
  setReceiverEmail(value: string): void;

  getReceiverHome(): ReceiverHome | undefined;
  setReceiverHome(value?: ReceiverHome): void;
  hasReceiverHome(): boolean;
  clearReceiverHome(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receiver.AsObject;
  static toObject(includeInstance: boolean, msg: Receiver): Receiver.AsObject;
  static serializeBinaryToWriter(message: Receiver, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receiver;
  static deserializeBinaryFromReader(message: Receiver, reader: jspb.BinaryReader): Receiver;
}

export namespace Receiver {
  export type AsObject = {
    receiverStoreId: string,
    receiverName: string,
    receiverPhone: string,
    receiverEmail: string,
    receiverHome?: ReceiverHome.AsObject,
  }
}

export class ReceiverHome extends jspb.Message {
  getReceiverZipCode(): string;
  setReceiverZipCode(value: string): void;

  getReceiverAddress(): string;
  setReceiverAddress(value: string): void;

  getTemperature(): string;
  setTemperature(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getSpecification(): string;
  setSpecification(value: string): void;

  getScheduledPickupTime(): string;
  setScheduledPickupTime(value: string): void;

  getScheduledDeliveryTime(): string;
  setScheduledDeliveryTime(value: string): void;

  getScheduledDeliveryDate(): string;
  setScheduledDeliveryDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverHome.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverHome): ReceiverHome.AsObject;
  static serializeBinaryToWriter(message: ReceiverHome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverHome;
  static deserializeBinaryFromReader(message: ReceiverHome, reader: jspb.BinaryReader): ReceiverHome;
}

export namespace ReceiverHome {
  export type AsObject = {
    receiverZipCode: string,
    receiverAddress: string,
    temperature: string,
    distance: string,
    specification: string,
    scheduledPickupTime: string,
    scheduledDeliveryTime: string,
    scheduledDeliveryDate: string,
  }
}

