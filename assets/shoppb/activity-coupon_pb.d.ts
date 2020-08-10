import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Activity extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getUrn(): string;
  setUrn(value: string): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getPhoto(): a$submessage_pb.Image | undefined;
  setPhoto(value?: a$submessage_pb.Image): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): void;
  hasRule(): boolean;
  clearRule(): void;

  getNow(): a$submessage_pb.Rule | undefined;
  setNow(value?: a$submessage_pb.Rule): void;
  hasNow(): boolean;
  clearNow(): void;

  getActive(): a$submessage_pb.Active | undefined;
  setActive(value?: a$submessage_pb.Active): void;
  hasActive(): boolean;
  clearActive(): void;

  getTarget(): a$submessage_pb.ProductTarget | undefined;
  setTarget(value?: a$submessage_pb.ProductTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getReached(): boolean;
  setReached(value: boolean): void;

  getUsedMap(): jspb.Map<string, number>;
  clearUsedMap(): void;

  getUseByCustomer(): number;
  setUseByCustomer(value: number): void;

  getUseByOrder(): number;
  setUseByOrder(value: number): void;

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
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    activityId: string,
    storeId: string,
    type: number,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    seo?: seo_pb.SEO.AsObject,
    photo?: a$submessage_pb.Image.AsObject,
    rule?: a$submessage_pb.Rule.AsObject,
    now?: a$submessage_pb.Rule.AsObject,
    active?: a$submessage_pb.Active.AsObject,
    target?: a$submessage_pb.ProductTarget.AsObject,
    reached: boolean,
    usedMap: Array<[string, number]>,
    useByCustomer: number,
    useByOrder: number,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Coupon extends jspb.Message {
  getCouponId(): string;
  setCouponId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getCode(): string;
  setCode(value: string): void;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): void;
  hasRule(): boolean;
  clearRule(): void;

  getActive(): a$submessage_pb.Active | undefined;
  setActive(value?: a$submessage_pb.Active): void;
  hasActive(): boolean;
  clearActive(): void;

  getTarget(): a$submessage_pb.CustomerTarget | undefined;
  setTarget(value?: a$submessage_pb.CustomerTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getUsedMap(): jspb.Map<string, number>;
  clearUsedMap(): void;

  getIsUse(): number;
  setIsUse(value: number): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getOrderAt(): string;
  setOrderAt(value: string): void;

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
  toObject(includeInstance?: boolean): Coupon.AsObject;
  static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
  static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coupon;
  static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
  export type AsObject = {
    couponId: string,
    storeId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    isAuto: boolean,
    code: string,
    rule?: a$submessage_pb.Rule.AsObject,
    active?: a$submessage_pb.Active.AsObject,
    target?: a$submessage_pb.CustomerTarget.AsObject,
    usedMap: Array<[string, number]>,
    isUse: number,
    orderId: string,
    orderAt: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

