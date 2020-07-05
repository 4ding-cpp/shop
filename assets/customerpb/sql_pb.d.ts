import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Response extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getInsertId(): string;
  setInsertId(value: string): void;

  getAffectRow(): number;
  setAffectRow(value: number): void;

  getPagelimit(): PageLimit | undefined;
  setPagelimit(value?: PageLimit): void;
  hasPagelimit(): boolean;
  clearPagelimit(): void;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  clearSortList(): void;
  addSort(value?: Sort, index?: number): Sort;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): void;
  clearConditionList(): void;
  addCondition(value?: Condition, index?: number): Condition;

  getResult(): google_protobuf_struct_pb.Value | undefined;
  setResult(value?: google_protobuf_struct_pb.Value): void;
  hasResult(): boolean;
  clearResult(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    code: number,
    message: string,
    insertId: string,
    affectRow: number,
    pagelimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    conditionList: Array<Condition.AsObject>,
    result?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class DBMessage extends jspb.Message {
  getInsertId(): number;
  setInsertId(value: number): void;

  getAffectRow(): number;
  setAffectRow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DBMessage): DBMessage.AsObject;
  static serializeBinaryToWriter(message: DBMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBMessage;
  static deserializeBinaryFromReader(message: DBMessage, reader: jspb.BinaryReader): DBMessage;
}

export namespace DBMessage {
  export type AsObject = {
    insertId: number,
    affectRow: number,
  }
}

export class PageLimit extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  getPageIndex(): number;
  setPageIndex(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageLimit.AsObject;
  static toObject(includeInstance: boolean, msg: PageLimit): PageLimit.AsObject;
  static serializeBinaryToWriter(message: PageLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageLimit;
  static deserializeBinaryFromReader(message: PageLimit, reader: jspb.BinaryReader): PageLimit;
}

export namespace PageLimit {
  export type AsObject = {
    length: number,
    pageIndex: number,
    pageSize: number,
  }
}

export class Sort extends jspb.Message {
  getDesc(): boolean;
  setDesc(value: boolean): void;

  getF(): string;
  setF(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    desc: boolean,
    f: string,
  }
}

export class Condition extends jspb.Message {
  getF(): string;
  setF(value: string): void;

  getV(): string;
  setV(value: string): void;

  getSList(): Array<string>;
  setSList(value: Array<string>): void;
  clearSList(): void;
  addS(value: string, index?: number): void;

  getO(): Condition.Operand;
  setO(value: Condition.Operand): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    f: string,
    v: string,
    sList: Array<string>,
    o: Condition.Operand,
  }

  export enum Operand { 
    UNIVERSAL = 0,
    LT = 1,
    LTE = 2,
    GT = 3,
    GTE = 4,
    IN = 5,
    LIKE = 6,
    LABEL = 7,
  }
}

export class Query extends jspb.Message {
  getPageLimit(): PageLimit | undefined;
  setPageLimit(value?: PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  clearSortList(): void;
  addSort(value?: Sort, index?: number): Sort;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): void;
  clearConditionList(): void;
  addCondition(value?: Condition, index?: number): Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    pageLimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    conditionList: Array<Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SignRecord extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getAccount(): string;
  setAccount(value: string): void;

  getType(): string;
  setType(value: string): void;

  getOs(): string;
  setOs(value: string): void;

  getBrowser(): string;
  setBrowser(value: string): void;

  getCreated(): number;
  setCreated(value: number): void;

  getOnlineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOnlineAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasOnlineAt(): boolean;
  clearOnlineAt(): void;

  getOfflineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOfflineAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasOfflineAt(): boolean;
  clearOfflineAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRecord.AsObject;
  static toObject(includeInstance: boolean, msg: SignRecord): SignRecord.AsObject;
  static serializeBinaryToWriter(message: SignRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRecord;
  static deserializeBinaryFromReader(message: SignRecord, reader: jspb.BinaryReader): SignRecord;
}

export namespace SignRecord {
  export type AsObject = {
    userId: number,
    account: string,
    type: string,
    os: string,
    browser: string,
    created: number,
    onlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Result extends jspb.Message {
  getPageLimit(): PageLimit | undefined;
  setPageLimit(value?: PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  clearSortList(): void;
  addSort(value?: Sort, index?: number): Sort;

  getResult(): google_protobuf_struct_pb.Value | undefined;
  setResult(value?: google_protobuf_struct_pb.Value): void;
  hasResult(): boolean;
  clearResult(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    pageLimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    result?: google_protobuf_struct_pb.Value.AsObject,
  }
}

