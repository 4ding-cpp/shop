import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProductClass extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getPhoto(): a$submessage_pb.Image | undefined;
  setPhoto(value?: a$submessage_pb.Image): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  getProductList(): Array<product_pb.Product>;
  setProductList(value: Array<product_pb.Product>): void;
  clearProductList(): void;
  addProduct(value?: product_pb.Product, index?: number): product_pb.Product;

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
  toObject(includeInstance?: boolean): ProductClass.AsObject;
  static toObject(includeInstance: boolean, msg: ProductClass): ProductClass.AsObject;
  static serializeBinaryToWriter(message: ProductClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductClass;
  static deserializeBinaryFromReader(message: ProductClass, reader: jspb.BinaryReader): ProductClass;
}

export namespace ProductClass {
  export type AsObject = {
    classId: string,
    activityId: string,
    path: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    seo?: seo_pb.SEO.AsObject,
    photo?: a$submessage_pb.Image.AsObject,
    productList: Array<product_pb.Product.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

