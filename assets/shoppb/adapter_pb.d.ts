import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Adapter extends jspb.Message {
  getAdapterId(): string;
  setAdapterId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getService(): string;
  setService(value: string): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getPaymentType(): number;
  setPaymentType(value: number): void;

  getPaymentAddAmount(): number;
  setPaymentAddAmount(value: number): void;

  getPaymentAddPercent(): number;
  setPaymentAddPercent(value: number): void;

  getExpireDay(): number;
  setExpireDay(value: number): void;

  getLogisticsType(): number;
  setLogisticsType(value: number): void;

  getLogisticsSubType(): number;
  setLogisticsSubType(value: number): void;

  getLogisticsFee(): number;
  setLogisticsFee(value: number): void;

  getRemark(): string;
  setRemark(value: string): void;

  getRedirect(): string;
  setRedirect(value: string): void;

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
  toObject(includeInstance?: boolean): Adapter.AsObject;
  static toObject(includeInstance: boolean, msg: Adapter): Adapter.AsObject;
  static serializeBinaryToWriter(message: Adapter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Adapter;
  static deserializeBinaryFromReader(message: Adapter, reader: jspb.BinaryReader): Adapter;
}

export namespace Adapter {
  export type AsObject = {
    adapterId: string,
    storeId: string,
    type: number,
    service: string,
    isEnable: boolean,
    name?: google_protobuf_struct_pb.Value.AsObject,
    paymentType: number,
    paymentAddAmount: number,
    paymentAddPercent: number,
    expireDay: number,
    logisticsType: number,
    logisticsSubType: number,
    logisticsFee: number,
    remark: string,
    redirect: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

