import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class WebPage extends jspb.Message {
  getWebPageId(): string;
  setWebPageId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getHttpCode(): number;
  setHttpCode(value: number): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getLink(): string;
  setLink(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

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
  toObject(includeInstance?: boolean): WebPage.AsObject;
  static toObject(includeInstance: boolean, msg: WebPage): WebPage.AsObject;
  static serializeBinaryToWriter(message: WebPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebPage;
  static deserializeBinaryFromReader(message: WebPage, reader: jspb.BinaryReader): WebPage;
}

export namespace WebPage {
  export type AsObject = {
    webPageId: string,
    storeId: string,
    isDisplay: boolean,
    httpCode: number,
    name?: google_protobuf_struct_pb.Value.AsObject,
    link: string,
    content: string,
    seo?: seo_pb.SEO.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

