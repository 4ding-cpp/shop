import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Website extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getStyle(): number;
  setStyle(value: number): void;

  getLogo(): a$submessage_pb.Image | undefined;
  setLogo(value?: a$submessage_pb.Image): void;
  hasLogo(): boolean;
  clearLogo(): void;

  getFavicon(): a$submessage_pb.Image | undefined;
  setFavicon(value?: a$submessage_pb.Image): void;
  hasFavicon(): boolean;
  clearFavicon(): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getNavList(): Array<a$submessage_pb.Layout>;
  setNavList(value: Array<a$submessage_pb.Layout>): void;
  clearNavList(): void;
  addNav(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getFooterList(): Array<a$submessage_pb.Layout>;
  setFooterList(value: Array<a$submessage_pb.Layout>): void;
  clearFooterList(): void;
  addFooter(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getLayoutList(): Array<a$submessage_pb.Layout>;
  setLayoutList(value: Array<a$submessage_pb.Layout>): void;
  clearLayoutList(): void;
  addLayout(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

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
  toObject(includeInstance?: boolean): Website.AsObject;
  static toObject(includeInstance: boolean, msg: Website): Website.AsObject;
  static serializeBinaryToWriter(message: Website, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Website;
  static deserializeBinaryFromReader(message: Website, reader: jspb.BinaryReader): Website;
}

export namespace Website {
  export type AsObject = {
    storeId: string,
    style: number,
    logo?: a$submessage_pb.Image.AsObject,
    favicon?: a$submessage_pb.Image.AsObject,
    seo?: seo_pb.SEO.AsObject,
    navList: Array<a$submessage_pb.Layout.AsObject>,
    footerList: Array<a$submessage_pb.Layout.AsObject>,
    layoutList: Array<a$submessage_pb.Layout.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

