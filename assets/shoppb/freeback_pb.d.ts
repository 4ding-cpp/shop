import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Freeback extends jspb.Message {
  getFreebackId(): string;
  setFreebackId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDialogueList(): Array<Dialogue>;
  setDialogueList(value: Array<Dialogue>): void;
  clearDialogueList(): void;
  addDialogue(value?: Dialogue, index?: number): Dialogue;

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
  toObject(includeInstance?: boolean): Freeback.AsObject;
  static toObject(includeInstance: boolean, msg: Freeback): Freeback.AsObject;
  static serializeBinaryToWriter(message: Freeback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Freeback;
  static deserializeBinaryFromReader(message: Freeback, reader: jspb.BinaryReader): Freeback;
}

export namespace Freeback {
  export type AsObject = {
    freebackId: string,
    type: number,
    storeId: string,
    customerId: string,
    orderId: string,
    description: string,
    dialogueList: Array<Dialogue.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Dialogue extends jspb.Message {
  getFreebackId(): string;
  setFreebackId(value: string): void;

  getTimeAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimeAt(): boolean;
  clearTimeAt(): void;

  getMessage(): string;
  setMessage(value: string): void;

  getResponder(): string;
  setResponder(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dialogue.AsObject;
  static toObject(includeInstance: boolean, msg: Dialogue): Dialogue.AsObject;
  static serializeBinaryToWriter(message: Dialogue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dialogue;
  static deserializeBinaryFromReader(message: Dialogue, reader: jspb.BinaryReader): Dialogue;
}

export namespace Dialogue {
  export type AsObject = {
    freebackId: string,
    timeAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    message: string,
    responder: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

