import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Log extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLogAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLogAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLogAt(): boolean;
  clearLogAt(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getDifferent(): google_protobuf_struct_pb.Struct | undefined;
  setDifferent(value?: google_protobuf_struct_pb.Struct): void;
  hasDifferent(): boolean;
  clearDifferent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    id: number,
    logAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operator: string,
    targetId: string,
    different?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

