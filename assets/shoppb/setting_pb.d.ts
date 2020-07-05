import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Setting extends jspb.Message {
  getSettingId(): string;
  setSettingId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getConf(): google_protobuf_struct_pb.Value | undefined;
  setConf(value?: google_protobuf_struct_pb.Value): void;
  hasConf(): boolean;
  clearConf(): void;

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
  toObject(includeInstance?: boolean): Setting.AsObject;
  static toObject(includeInstance: boolean, msg: Setting): Setting.AsObject;
  static serializeBinaryToWriter(message: Setting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Setting;
  static deserializeBinaryFromReader(message: Setting, reader: jspb.BinaryReader): Setting;
}

export namespace Setting {
  export type AsObject = {
    settingId: string,
    storeId: string,
    type: string,
    isEnable: boolean,
    conf?: google_protobuf_struct_pb.Value.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ConfigMulti extends jspb.Message {
  getLanguage(): google_protobuf_struct_pb.Value | undefined;
  setLanguage(value?: google_protobuf_struct_pb.Value): void;
  hasLanguage(): boolean;
  clearLanguage(): void;

  getCurrency(): google_protobuf_struct_pb.Value | undefined;
  setCurrency(value?: google_protobuf_struct_pb.Value): void;
  hasCurrency(): boolean;
  clearCurrency(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMulti.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMulti): ConfigMulti.AsObject;
  static serializeBinaryToWriter(message: ConfigMulti, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMulti;
  static deserializeBinaryFromReader(message: ConfigMulti, reader: jspb.BinaryReader): ConfigMulti;
}

export namespace ConfigMulti {
  export type AsObject = {
    language?: google_protobuf_struct_pb.Value.AsObject,
    currency?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class ConfigWebsite extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSlogan(): string;
  setSlogan(value: string): void;

  getCopyright(): string;
  setCopyright(value: string): void;

  getServiceTerms(): string;
  setServiceTerms(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getFacebook(): string;
  setFacebook(value: string): void;

  getLineAt(): string;
  setLineAt(value: string): void;

  getInstagram(): string;
  setInstagram(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigWebsite.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigWebsite): ConfigWebsite.AsObject;
  static serializeBinaryToWriter(message: ConfigWebsite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigWebsite;
  static deserializeBinaryFromReader(message: ConfigWebsite, reader: jspb.BinaryReader): ConfigWebsite;
}

export namespace ConfigWebsite {
  export type AsObject = {
    name: string,
    slogan: string,
    copyright: string,
    serviceTerms: string,
    organization: string,
    phone: string,
    email: string,
    address: string,
    facebook: string,
    lineAt: string,
    instagram: string,
  }
}

export class ConfigShop extends jspb.Message {
  getLimitCount(): number;
  setLimitCount(value: number): void;

  getShopNotes(): string;
  setShopNotes(value: string): void;

  getOrderNotes(): string;
  setOrderNotes(value: string): void;

  getSenderName(): string;
  setSenderName(value: string): void;

  getSenderPhone(): string;
  setSenderPhone(value: string): void;

  getSenderCellPhone(): string;
  setSenderCellPhone(value: string): void;

  getSenderZipCode(): string;
  setSenderZipCode(value: string): void;

  getSenderAddress(): string;
  setSenderAddress(value: string): void;

  getSenderRemark(): string;
  setSenderRemark(value: string): void;

  getAllowCancelOrder(): number;
  setAllowCancelOrder(value: number): void;

  getAllowReturnOrder(): number;
  setAllowReturnOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigShop.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigShop): ConfigShop.AsObject;
  static serializeBinaryToWriter(message: ConfigShop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigShop;
  static deserializeBinaryFromReader(message: ConfigShop, reader: jspb.BinaryReader): ConfigShop;
}

export namespace ConfigShop {
  export type AsObject = {
    limitCount: number,
    shopNotes: string,
    orderNotes: string,
    senderName: string,
    senderPhone: string,
    senderCellPhone: string,
    senderZipCode: string,
    senderAddress: string,
    senderRemark: string,
    allowCancelOrder: number,
    allowReturnOrder: number,
  }
}

