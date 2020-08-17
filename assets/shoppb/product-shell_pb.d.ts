import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProductShell extends jspb.Message {
  getShellId(): number;
  setShellId(value: number): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getClassId(): string;
  setClassId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getType(): number;
  setType(value: number): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getBlockList(): Array<seo_pb.Block>;
  setBlockList(value: Array<seo_pb.Block>): void;
  clearBlockList(): void;
  addBlock(value?: seo_pb.Block, index?: number): seo_pb.Block;

  getReduce(): number;
  setReduce(value: number): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getUrn(): string;
  setUrn(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getProduct(): product_pb.Product | undefined;
  setProduct(value?: product_pb.Product): void;
  hasProduct(): boolean;
  clearProduct(): void;

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
  toObject(includeInstance?: boolean): ProductShell.AsObject;
  static toObject(includeInstance: boolean, msg: ProductShell): ProductShell.AsObject;
  static serializeBinaryToWriter(message: ProductShell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductShell;
  static deserializeBinaryFromReader(message: ProductShell, reader: jspb.BinaryReader): ProductShell;
}

export namespace ProductShell {
  export type AsObject = {
    shellId: number,
    storeId: string,
    productId: string,
    classId: string,
    isDisplay: boolean,
    type: number,
    seo?: seo_pb.SEO.AsObject,
    blockList: Array<seo_pb.Block.AsObject>,
    reduce: number,
    isPreorder: boolean,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    price: number,
    product?: product_pb.Product.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

