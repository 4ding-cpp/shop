import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class WebLayout extends jspb.Message {
  getWebLayoutId(): string;
  setWebLayoutId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getType(): number;
  setType(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSecond(): number;
  setSecond(value: number): void;

  getProductClassId(): string;
  setProductClassId(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getImageList(): Array<string>;
  setImageList(value: Array<string>): void;
  clearImageList(): void;
  addImage(value: string, index?: number): void;

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
  toObject(includeInstance?: boolean): WebLayout.AsObject;
  static toObject(includeInstance: boolean, msg: WebLayout): WebLayout.AsObject;
  static serializeBinaryToWriter(message: WebLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLayout;
  static deserializeBinaryFromReader(message: WebLayout, reader: jspb.BinaryReader): WebLayout;
}

export namespace WebLayout {
  export type AsObject = {
    webLayoutId: string,
    storeId: string,
    isDisplay: boolean,
    type: number,
    priority: number,
    title: string,
    second: number,
    productClassId: string,
    count: number,
    content: string,
    imageList: Array<string>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

