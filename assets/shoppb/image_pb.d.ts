import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Image extends jspb.Message {
  getImageId(): string;
  setImageId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductSpecId(): string;
  setProductSpecId(value: string): void;

  getProductClassId(): string;
  setProductClassId(value: string): void;

  getLayoutId(): string;
  setLayoutId(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getTarget(): string;
  setTarget(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSource(): string;
  setSource(value: string): void;

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
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    imageId: string,
    storeId: string,
    productId: string,
    productSpecId: string,
    productClassId: string,
    layoutId: string,
    priority: number,
    target: string,
    link: string,
    host: string,
    path: string,
    name: string,
    version: number,
    source: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

