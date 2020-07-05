import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class SEO extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getKeywords(): google_protobuf_struct_pb.Value | undefined;
  setKeywords(value?: google_protobuf_struct_pb.Value): void;
  hasKeywords(): boolean;
  clearKeywords(): void;

  getDescription(): google_protobuf_struct_pb.Value | undefined;
  setDescription(value?: google_protobuf_struct_pb.Value): void;
  hasDescription(): boolean;
  clearDescription(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEO.AsObject;
  static toObject(includeInstance: boolean, msg: SEO): SEO.AsObject;
  static serializeBinaryToWriter(message: SEO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEO;
  static deserializeBinaryFromReader(message: SEO, reader: jspb.BinaryReader): SEO;
}

export namespace SEO {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Value.AsObject,
    keywords?: google_protobuf_struct_pb.Value.AsObject,
    description?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class Block extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getUrl(): string;
  setUrl(value: string): void;

  getTemplate(): Template | undefined;
  setTemplate(value?: Template): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Value.AsObject,
    url: string,
    template?: Template.AsObject,
  }
}

export class Template extends jspb.Message {
  getTemplateId(): string;
  setTemplateId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsHtml(): boolean;
  setIsHtml(value: boolean): void;

  getContent(): string;
  setContent(value: string): void;

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

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    templateId: string,
    storeId: string,
    name: string,
    isHtml: boolean,
    content: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

