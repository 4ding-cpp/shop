import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class CustomerLink extends jspb.Message {
  getCustomerLinkId(): string;
  setCustomerLinkId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCustomerLevelId(): string;
  setCustomerLevelId(value: string): void;

  getIsReceive(): boolean;
  setIsReceive(value: boolean): void;

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
  toObject(includeInstance?: boolean): CustomerLink.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLink): CustomerLink.AsObject;
  static serializeBinaryToWriter(message: CustomerLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLink;
  static deserializeBinaryFromReader(message: CustomerLink, reader: jspb.BinaryReader): CustomerLink;
}

export namespace CustomerLink {
  export type AsObject = {
    customerLinkId: string,
    storeId: string,
    customerId: string,
    customerLevelId: string,
    isReceive: boolean,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CustomerF extends jspb.Message {
  getCustomerLinkId(): string;
  setCustomerLinkId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerLevelId(): string;
  setCustomerLevelId(value: string): void;

  getIsReceive(): boolean;
  setIsReceive(value: boolean): void;

  getStatus(): number;
  setStatus(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerF.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerF): CustomerF.AsObject;
  static serializeBinaryToWriter(message: CustomerF, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerF;
  static deserializeBinaryFromReader(message: CustomerF, reader: jspb.BinaryReader): CustomerF;
}

export namespace CustomerF {
  export type AsObject = {
    customerLinkId: string,
    customerId: string,
    businessId: string,
    storeId: string,
    customerLevelId: string,
    isReceive: boolean,
    status: number,
    phone: string,
    email: string,
    name: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CustomerLevel extends jspb.Message {
  getCustomerLevelId(): string;
  setCustomerLevelId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPayAmount(): number;
  setPayAmount(value: number): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

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
  toObject(includeInstance?: boolean): CustomerLevel.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLevel): CustomerLevel.AsObject;
  static serializeBinaryToWriter(message: CustomerLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLevel;
  static deserializeBinaryFromReader(message: CustomerLevel, reader: jspb.BinaryReader): CustomerLevel;
}

export namespace CustomerLevel {
  export type AsObject = {
    customerLevelId: string,
    storeId: string,
    status: number,
    name: string,
    payAmount: number,
    payTimes: number,
    isAuto: boolean,
    priority: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

