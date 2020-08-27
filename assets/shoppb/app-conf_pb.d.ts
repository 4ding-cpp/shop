import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class AppConf extends jspb.Message {
  getCurrency(): google_protobuf_struct_pb.Struct | undefined;
  setCurrency(value?: google_protobuf_struct_pb.Struct): void;
  hasCurrency(): boolean;
  clearCurrency(): void;

  getLanguage(): google_protobuf_struct_pb.Struct | undefined;
  setLanguage(value?: google_protobuf_struct_pb.Struct): void;
  hasLanguage(): boolean;
  clearLanguage(): void;

  getWebsite(): google_protobuf_struct_pb.Struct | undefined;
  setWebsite(value?: google_protobuf_struct_pb.Struct): void;
  hasWebsite(): boolean;
  clearWebsite(): void;

  getShop(): google_protobuf_struct_pb.Struct | undefined;
  setShop(value?: google_protobuf_struct_pb.Struct): void;
  hasShop(): boolean;
  clearShop(): void;

  getGoogleTagManager(): ExternalApp | undefined;
  setGoogleTagManager(value?: ExternalApp): void;
  hasGoogleTagManager(): boolean;
  clearGoogleTagManager(): void;

  getFacebookPixel(): ExternalApp | undefined;
  setFacebookPixel(value?: ExternalApp): void;
  hasFacebookPixel(): boolean;
  clearFacebookPixel(): void;

  getFacebookSign(): ExternalApp | undefined;
  setFacebookSign(value?: ExternalApp): void;
  hasFacebookSign(): boolean;
  clearFacebookSign(): void;

  getLineSign(): ExternalApp | undefined;
  setLineSign(value?: ExternalApp): void;
  hasLineSign(): boolean;
  clearLineSign(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppConf.AsObject;
  static toObject(includeInstance: boolean, msg: AppConf): AppConf.AsObject;
  static serializeBinaryToWriter(message: AppConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppConf;
  static deserializeBinaryFromReader(message: AppConf, reader: jspb.BinaryReader): AppConf;
}

export namespace AppConf {
  export type AsObject = {
    currency?: google_protobuf_struct_pb.Struct.AsObject,
    language?: google_protobuf_struct_pb.Struct.AsObject,
    website?: google_protobuf_struct_pb.Struct.AsObject,
    shop?: google_protobuf_struct_pb.Struct.AsObject,
    googleTagManager?: ExternalApp.AsObject,
    facebookPixel?: ExternalApp.AsObject,
    facebookSign?: ExternalApp.AsObject,
    lineSign?: ExternalApp.AsObject,
  }
}

export class ExternalApp extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getAppId(): string;
  setAppId(value: string): void;

  getAppSecret(): string;
  setAppSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalApp.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalApp): ExternalApp.AsObject;
  static serializeBinaryToWriter(message: ExternalApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalApp;
  static deserializeBinaryFromReader(message: ExternalApp, reader: jspb.BinaryReader): ExternalApp;
}

export namespace ExternalApp {
  export type AsObject = {
    isEnable: boolean,
    appId: string,
    appSecret: string,
  }
}

