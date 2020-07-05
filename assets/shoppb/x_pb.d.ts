import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Stock extends jspb.Message {
  getStockId(): string;
  setStockId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getSupplierId(): string;
  setSupplierId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductSpecId(): string;
  setProductSpecId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getCost(): number;
  setCost(value: number): void;

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
  toObject(includeInstance?: boolean): Stock.AsObject;
  static toObject(includeInstance: boolean, msg: Stock): Stock.AsObject;
  static serializeBinaryToWriter(message: Stock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stock;
  static deserializeBinaryFromReader(message: Stock, reader: jspb.BinaryReader): Stock;
}

export namespace Stock {
  export type AsObject = {
    stockId: string,
    orderId: string,
    supplierId: string,
    productId: string,
    productSpecId: string,
    amount: number,
    cost: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StockGroup extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getPhotoList(): Array<string>;
  setPhotoList(value: Array<string>): void;
  clearPhotoList(): void;
  addPhoto(value: string, index?: number): void;

  getNameMap(): jspb.Map<string, string>;
  clearNameMap(): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockGroup.AsObject;
  static toObject(includeInstance: boolean, msg: StockGroup): StockGroup.AsObject;
  static serializeBinaryToWriter(message: StockGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockGroup;
  static deserializeBinaryFromReader(message: StockGroup, reader: jspb.BinaryReader): StockGroup;
}

export namespace StockGroup {
  export type AsObject = {
    productId: string,
    photoList: Array<string>,
    nameMap: Array<[string, string]>,
    amount: number,
  }
}

export class StockSupplier extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockSupplier.AsObject;
  static toObject(includeInstance: boolean, msg: StockSupplier): StockSupplier.AsObject;
  static serializeBinaryToWriter(message: StockSupplier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockSupplier;
  static deserializeBinaryFromReader(message: StockSupplier, reader: jspb.BinaryReader): StockSupplier;
}

export namespace StockSupplier {
  export type AsObject = {
    id: number,
    name: string,
    phone: string,
    remark: string,
  }
}

