import * as jspb from "google-protobuf"

export class PingPong extends jspb.Message {
  getPong(): number;
  setPong(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingPong.AsObject;
  static toObject(includeInstance: boolean, msg: PingPong): PingPong.AsObject;
  static serializeBinaryToWriter(message: PingPong, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingPong;
  static deserializeBinaryFromReader(message: PingPong, reader: jspb.BinaryReader): PingPong;
}

export namespace PingPong {
  export type AsObject = {
    pong: number,
  }
}

