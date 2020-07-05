import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as activity_pb from './activity_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Car extends jspb.Message {
  getCarId(): string;
  setCarId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getDiscountId(): string;
  setDiscountId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getCommodityList(): Array<Commodity>;
  setCommodityList(value: Array<Commodity>): void;
  clearCommodityList(): void;
  addCommodity(value?: Commodity, index?: number): Commodity;

  getActivityList(): Array<activity_pb.Activity>;
  setActivityList(value: Array<activity_pb.Activity>): void;
  clearActivityList(): void;
  addActivity(value?: activity_pb.Activity, index?: number): activity_pb.Activity;

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
  toObject(includeInstance?: boolean): Car.AsObject;
  static toObject(includeInstance: boolean, msg: Car): Car.AsObject;
  static serializeBinaryToWriter(message: Car, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Car;
  static deserializeBinaryFromReader(message: Car, reader: jspb.BinaryReader): Car;
}

export namespace Car {
  export type AsObject = {
    carId: string,
    storeId: string,
    customerId: string,
    discountId: string,
    state: number,
    count: number,
    amount: number,
    commodityList: Array<Commodity.AsObject>,
    activityList: Array<activity_pb.Activity.AsObject>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Commodity extends jspb.Message {
  getCommodityId(): string;
  setCommodityId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCarId(): string;
  setCarId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductSpecId(): string;
  setProductSpecId(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getPrice(): number;
  setPrice(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getActive(): number;
  setActive(value: number): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Commodity.AsObject;
  static toObject(includeInstance: boolean, msg: Commodity): Commodity.AsObject;
  static serializeBinaryToWriter(message: Commodity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Commodity;
  static deserializeBinaryFromReader(message: Commodity, reader: jspb.BinaryReader): Commodity;
}

export namespace Commodity {
  export type AsObject = {
    commodityId: string,
    storeId: string,
    carId: string,
    productId: string,
    productSpecId: string,
    count: number,
    activityId: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    price: number,
    reduce: number,
    active: number,
    photo: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

