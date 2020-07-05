import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class External extends jspb.Message {
  getExternalId(): string;
  setExternalId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getService(): number;
  setService(value: number): void;

  getServiceType(): number;
  setServiceType(value: number): void;

  getServiceItem(): number;
  setServiceItem(value: number): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getExpireDay(): number;
  setExpireDay(value: number): void;

  getRemark(): string;
  setRemark(value: string): void;

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
  toObject(includeInstance?: boolean): External.AsObject;
  static toObject(includeInstance: boolean, msg: External): External.AsObject;
  static serializeBinaryToWriter(message: External, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): External;
  static deserializeBinaryFromReader(message: External, reader: jspb.BinaryReader): External;
}

export namespace External {
  export type AsObject = {
    externalId: string,
    businessId: string,
    storeId: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    service: number,
    serviceType: number,
    serviceItem: number,
    isEnable: boolean,
    expireDay: number,
    remark: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

