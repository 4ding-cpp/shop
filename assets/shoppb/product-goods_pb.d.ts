import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as product_pb from './product_pb';
import * as activity$coupon_pb from './activity-coupon_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class ProductGoods extends jspb.Message {
  getShellId(): number;
  setShellId(value: number): void;

  getProductId(): string;
  setProductId(value: string): void;

  getClassId(): string;
  setClassId(value: string): void;

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

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getUrn(): string;
  setUrn(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): void;

  getOriginal(): number;
  setOriginal(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

  getStock(): number;
  setStock(value: number): void;

  getSpecxList(): Array<product_pb.ProductSpec>;
  setSpecxList(value: Array<product_pb.ProductSpec>): void;
  clearSpecxList(): void;
  addSpecx(value?: product_pb.ProductSpec, index?: number): product_pb.ProductSpec;

  getPhotoxList(): Array<a$submessage_pb.Image>;
  setPhotoxList(value: Array<a$submessage_pb.Image>): void;
  clearPhotoxList(): void;
  addPhotox(value?: a$submessage_pb.Image, index?: number): a$submessage_pb.Image;

  getActivityList(): Array<activity$coupon_pb.Activity>;
  setActivityList(value: Array<activity$coupon_pb.Activity>): void;
  clearActivityList(): void;
  addActivity(value?: activity$coupon_pb.Activity, index?: number): activity$coupon_pb.Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductGoods.AsObject;
  static toObject(includeInstance: boolean, msg: ProductGoods): ProductGoods.AsObject;
  static serializeBinaryToWriter(message: ProductGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductGoods;
  static deserializeBinaryFromReader(message: ProductGoods, reader: jspb.BinaryReader): ProductGoods;
}

export namespace ProductGoods {
  export type AsObject = {
    shellId: number,
    productId: string,
    classId: string,
    type: number,
    seo?: seo_pb.SEO.AsObject,
    blockList: Array<seo_pb.Block.AsObject>,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    sku: string,
    photoSrc: string,
    original: number,
    price: number,
    weight: number,
    volume: number,
    isPickup: boolean,
    isPreorder: boolean,
    stock: number,
    specxList: Array<product_pb.ProductSpec.AsObject>,
    photoxList: Array<a$submessage_pb.Image.AsObject>,
    activityList: Array<activity$coupon_pb.Activity.AsObject>,
  }
}

