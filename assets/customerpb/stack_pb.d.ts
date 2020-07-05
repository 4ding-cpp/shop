import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Stack extends jspb.Message {
  getStackId(): string;
  setStackId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductSpecId(): string;
  setProductSpecId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getDiscountId(): string;
  setDiscountId(value: string): void;

  getSalerId(): string;
  setSalerId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getCountIn(): number;
  setCountIn(value: number): void;

  getCost(): number;
  setCost(value: number): void;

  getCountOut(): number;
  setCountOut(value: number): void;

  getProfit(): number;
  setProfit(value: number): void;

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
  toObject(includeInstance?: boolean): Stack.AsObject;
  static toObject(includeInstance: boolean, msg: Stack): Stack.AsObject;
  static serializeBinaryToWriter(message: Stack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stack;
  static deserializeBinaryFromReader(message: Stack, reader: jspb.BinaryReader): Stack;
}

export namespace Stack {
  export type AsObject = {
    stackId: string,
    storeId: string,
    orderId: string,
    productId: string,
    productSpecId: string,
    activityId: string,
    discountId: string,
    salerId: string,
    type: number,
    countIn: number,
    cost: number,
    countOut: number,
    profit: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductStack extends jspb.Message {
  getProductId(): number;
  setProductId(value: number): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getNameMap(): jspb.Map<string, string>;
  clearNameMap(): void;

  getStock(): number;
  setStock(value: number): void;

  getSold(): number;
  setSold(value: number): void;

  getSoldAmount(): number;
  setSoldAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductStack.AsObject;
  static toObject(includeInstance: boolean, msg: ProductStack): ProductStack.AsObject;
  static serializeBinaryToWriter(message: ProductStack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductStack;
  static deserializeBinaryFromReader(message: ProductStack, reader: jspb.BinaryReader): ProductStack;
}

export namespace ProductStack {
  export type AsObject = {
    productId: number,
    photo: string,
    nameMap: Array<[string, string]>,
    stock: number,
    sold: number,
    soldAmount: number,
  }
}

export class SpecStack extends jspb.Message {
  getSpecId(): number;
  setSpecId(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getStock(): number;
  setStock(value: number): void;

  getSold(): number;
  setSold(value: number): void;

  getSoldAmount(): number;
  setSoldAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecStack.AsObject;
  static toObject(includeInstance: boolean, msg: SpecStack): SpecStack.AsObject;
  static serializeBinaryToWriter(message: SpecStack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecStack;
  static deserializeBinaryFromReader(message: SpecStack, reader: jspb.BinaryReader): SpecStack;
}

export namespace SpecStack {
  export type AsObject = {
    specId: number,
    sku: string,
    stock: number,
    sold: number,
    soldAmount: number,
  }
}

