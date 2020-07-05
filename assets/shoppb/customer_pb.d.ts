import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Customer extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getBirthday(): string;
  setBirthday(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  getComeFrom(): string;
  setComeFrom(value: string): void;

  getLink(): CustomerLink | undefined;
  setLink(value?: CustomerLink): void;
  hasLink(): boolean;
  clearLink(): void;

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
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    customerId: string,
    status: number,
    phone: string,
    phoneVerify: boolean,
    email: string,
    emailVerify: boolean,
    name: string,
    birthday: string,
    sex: number,
    password: string,
    comeFrom: string,
    link?: CustomerLink.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CustomerLink extends jspb.Message {
  getLevelId(): string;
  setLevelId(value: string): void;

  getIsReceive(): boolean;
  setIsReceive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLink.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLink): CustomerLink.AsObject;
  static serializeBinaryToWriter(message: CustomerLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLink;
  static deserializeBinaryFromReader(message: CustomerLink, reader: jspb.BinaryReader): CustomerLink;
}

export namespace CustomerLink {
  export type AsObject = {
    levelId: string,
    isReceive: boolean,
  }
}

export class CustomerBatch extends jspb.Message {
  getCustomerList(): Array<Customer>;
  setCustomerList(value: Array<Customer>): void;
  clearCustomerList(): void;
  addCustomer(value?: Customer, index?: number): Customer;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBatch.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBatch): CustomerBatch.AsObject;
  static serializeBinaryToWriter(message: CustomerBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBatch;
  static deserializeBinaryFromReader(message: CustomerBatch, reader: jspb.BinaryReader): CustomerBatch;
}

export namespace CustomerBatch {
  export type AsObject = {
    customerList: Array<Customer.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

