import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Password extends jspb.Message {
  getOldP(): string;
  setOldP(value: string): void;

  getNewP(): string;
  setNewP(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Password.AsObject;
  static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
  static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Password;
  static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
  export type AsObject = {
    oldP: string,
    newP: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Rename extends jspb.Message {
  getOldN(): string;
  setOldN(value: string): void;

  getNewN(): string;
  setNewN(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rename.AsObject;
  static toObject(includeInstance: boolean, msg: Rename): Rename.AsObject;
  static serializeBinaryToWriter(message: Rename, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rename;
  static deserializeBinaryFromReader(message: Rename, reader: jspb.BinaryReader): Rename;
}

export namespace Rename {
  export type AsObject = {
    oldN: string,
    newN: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

