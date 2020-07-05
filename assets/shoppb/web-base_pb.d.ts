import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class WebBase extends jspb.Message {
  getWebBaseId(): string;
  setWebBaseId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getStyle(): number;
  setStyle(value: number): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getLogoId(): string;
  setLogoId(value: string): void;

  getFaviconId(): string;
  setFaviconId(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getFavicon(): string;
  setFavicon(value: string): void;

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
  toObject(includeInstance?: boolean): WebBase.AsObject;
  static toObject(includeInstance: boolean, msg: WebBase): WebBase.AsObject;
  static serializeBinaryToWriter(message: WebBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebBase;
  static deserializeBinaryFromReader(message: WebBase, reader: jspb.BinaryReader): WebBase;
}

export namespace WebBase {
  export type AsObject = {
    webBaseId: string,
    storeId: string,
    style: number,
    seo?: seo_pb.SEO.AsObject,
    logoId: string,
    faviconId: string,
    logo: string,
    favicon: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

