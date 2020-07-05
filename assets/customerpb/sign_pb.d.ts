import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Sign extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): string;
  setType(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOnlineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOnlineAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasOnlineAt(): boolean;
  clearOnlineAt(): void;

  getOfflineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOfflineAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasOfflineAt(): boolean;
  clearOfflineAt(): void;

  getRequests(): number;
  setRequests(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getUseragent(): string;
  setUseragent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sign.AsObject;
  static toObject(includeInstance: boolean, msg: Sign): Sign.AsObject;
  static serializeBinaryToWriter(message: Sign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sign;
  static deserializeBinaryFromReader(message: Sign, reader: jspb.BinaryReader): Sign;
}

export namespace Sign {
  export type AsObject = {
    id: number,
    type: string,
    userId: string,
    onlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requests: number,
    address: string,
    useragent: string,
  }
}

