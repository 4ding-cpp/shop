import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Product extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getCost(): number;
  setCost(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): void;

  getIsLinked(): boolean;
  setIsLinked(value: boolean): void;

  getSpecxMap(): jspb.Map<string, Spec>;
  clearSpecxMap(): void;

  getPhotoxList(): Array<a$submessage_pb.Image>;
  setPhotoxList(value: Array<a$submessage_pb.Image>): void;
  clearPhotoxList(): void;
  addPhotox(value?: a$submessage_pb.Image, index?: number): a$submessage_pb.Image;

  getLink(): ProductLink | undefined;
  setLink(value?: ProductLink): void;
  hasLink(): boolean;
  clearLink(): void;

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
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productId: string,
    status: number,
    code: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    cost: number,
    price: number,
    reduce: number,
    weight: number,
    volume: number,
    isPreorder: boolean,
    isPickup: boolean,
    isLinked: boolean,
    specxMap: Array<[string, Spec.AsObject]>,
    photoxList: Array<a$submessage_pb.Image.AsObject>,
    link?: ProductLink.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Spec extends jspb.Message {
  getSku(): string;
  setSku(value: string): void;

  getDisplay(): boolean;
  setDisplay(value: boolean): void;

  getStock(): number;
  setStock(value: number): void;

  getSold(): number;
  setSold(value: number): void;

  getItemxList(): Array<google_protobuf_struct_pb.Value>;
  setItemxList(value: Array<google_protobuf_struct_pb.Value>): void;
  clearItemxList(): void;
  addItemx(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  getPhoto(): a$submessage_pb.Image | undefined;
  setPhoto(value?: a$submessage_pb.Image): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    sku: string,
    display: boolean,
    stock: number,
    sold: number,
    itemxList: Array<google_protobuf_struct_pb.Value.AsObject>,
    photo?: a$submessage_pb.Image.AsObject,
  }
}

export class ProductLink extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getUrl(): string;
  setUrl(value: string): void;

  getFreightAdd(): number;
  setFreightAdd(value: number): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getBlockList(): Array<seo_pb.Block>;
  setBlockList(value: Array<seo_pb.Block>): void;
  clearBlockList(): void;
  addBlock(value?: seo_pb.Block, index?: number): seo_pb.Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductLink.AsObject;
  static toObject(includeInstance: boolean, msg: ProductLink): ProductLink.AsObject;
  static serializeBinaryToWriter(message: ProductLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductLink;
  static deserializeBinaryFromReader(message: ProductLink, reader: jspb.BinaryReader): ProductLink;
}

export namespace ProductLink {
  export type AsObject = {
    classId: string,
    isDisplay: boolean,
    url: string,
    freightAdd: number,
    seo?: seo_pb.SEO.AsObject,
    blockList: Array<seo_pb.Block.AsObject>,
  }
}

export class ProductBatch extends jspb.Message {
  getProductList(): Array<Product>;
  setProductList(value: Array<Product>): void;
  clearProductList(): void;
  addProduct(value?: Product, index?: number): Product;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBatch.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBatch): ProductBatch.AsObject;
  static serializeBinaryToWriter(message: ProductBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBatch;
  static deserializeBinaryFromReader(message: ProductBatch, reader: jspb.BinaryReader): ProductBatch;
}

export namespace ProductBatch {
  export type AsObject = {
    productList: Array<Product.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

