import * as jspb from "google-protobuf"

export class AppConf extends jspb.Message {
  getA(): string;
  setA(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppConf.AsObject;
  static toObject(includeInstance: boolean, msg: AppConf): AppConf.AsObject;
  static serializeBinaryToWriter(message: AppConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppConf;
  static deserializeBinaryFromReader(message: AppConf, reader: jspb.BinaryReader): AppConf;
}

export namespace AppConf {
  export type AsObject = {
    a: string,
  }
}

