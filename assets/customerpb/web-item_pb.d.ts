import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class WebItem extends jspb.Message {
  getWebItemId(): string;
  setWebItemId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

  getType(): number;
  setType(value: number): void;

  getArea(): string;
  setArea(value: string): void;

  getLine(): number;
  setLine(value: number): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getLink(): string;
  setLink(value: string): void;

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
  toObject(includeInstance?: boolean): WebItem.AsObject;
  static toObject(includeInstance: boolean, msg: WebItem): WebItem.AsObject;
  static serializeBinaryToWriter(message: WebItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebItem;
  static deserializeBinaryFromReader(message: WebItem, reader: jspb.BinaryReader): WebItem;
}

export namespace WebItem {
  export type AsObject = {
    webItemId: string,
    storeId: string,
    isDisplay: boolean,
    priority: number,
    type: number,
    area: string,
    line: number,
    name?: google_protobuf_struct_pb.Value.AsObject,
    link: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

