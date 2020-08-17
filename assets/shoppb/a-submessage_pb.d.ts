import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Rule extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    amount: number,
    price: number,
  }
}

export class Active extends jspb.Message {
  getFreeShipping(): boolean;
  setFreeShipping(value: boolean): void;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getGiveaway(): string;
  setGiveaway(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Active.AsObject;
  static toObject(includeInstance: boolean, msg: Active): Active.AsObject;
  static serializeBinaryToWriter(message: Active, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Active;
  static deserializeBinaryFromReader(message: Active, reader: jspb.BinaryReader): Active;
}

export namespace Active {
  export type AsObject = {
    freeShipping: boolean,
    isRepeat: boolean,
    discount: number,
    reduce: number,
    giveaway: string,
  }
}

export class CustomerTarget extends jspb.Message {
  getLevel(): string;
  setLevel(value: string): void;

  getBirthday(): number;
  setBirthday(value: number): void;

  getRegister(): number;
  setRegister(value: number): void;

  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): void;
  clearItemsList(): void;
  addItems(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTarget.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTarget): CustomerTarget.AsObject;
  static serializeBinaryToWriter(message: CustomerTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTarget;
  static deserializeBinaryFromReader(message: CustomerTarget, reader: jspb.BinaryReader): CustomerTarget;
}

export namespace CustomerTarget {
  export type AsObject = {
    level: string,
    birthday: number,
    register: number,
    itemsList: Array<string>,
  }
}

export class ProductTarget extends jspb.Message {
  getClassList(): Array<string>;
  setClassList(value: Array<string>): void;
  clearClassList(): void;
  addClass(value: string, index?: number): void;

  getItemsList(): Array<number>;
  setItemsList(value: Array<number>): void;
  clearItemsList(): void;
  addItems(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTarget): ProductTarget.AsObject;
  static serializeBinaryToWriter(message: ProductTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTarget;
  static deserializeBinaryFromReader(message: ProductTarget, reader: jspb.BinaryReader): ProductTarget;
}

export namespace ProductTarget {
  export type AsObject = {
    classList: Array<string>,
    itemsList: Array<number>,
  }
}

export class Image extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): void;

  getAlt(): string;
  setAlt(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  getIsBlank(): number;
  setIsBlank(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getTarget(): ProductTarget | undefined;
  setTarget(value?: ProductTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getType(): string;
  setType(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    src: string,
    alt: string,
    title: string,
    link: string,
    isBlank: number,
    sku: string,
    target?: ProductTarget.AsObject,
    type: string,
    source: string,
  }
}

export class Layout extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getLink(): string;
  setLink(value: string): void;

  getPage(): string;
  setPage(value: string): void;

  getIsBlank(): boolean;
  setIsBlank(value: boolean): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  getImageList(): Array<Image>;
  setImageList(value: Array<Image>): void;
  clearImageList(): void;
  addImage(value?: Image, index?: number): Image;

  getLayoutList(): Array<Layout>;
  setLayoutList(value: Array<Layout>): void;
  clearLayoutList(): void;
  addLayout(value?: Layout, index?: number): Layout;

  getTarget(): ProductTarget | undefined;
  setTarget(value?: ProductTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getTemplate(): seo_pb.Template | undefined;
  setTemplate(value?: seo_pb.Template): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layout.AsObject;
  static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
  static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layout;
  static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
}

export namespace Layout {
  export type AsObject = {
    type: number,
    title?: google_protobuf_struct_pb.Value.AsObject,
    link: string,
    page: string,
    isBlank: boolean,
    quantity: number,
    second: number,
    imageList: Array<Image.AsObject>,
    layoutList: Array<Layout.AsObject>,
    target?: ProductTarget.AsObject,
    template?: seo_pb.Template.AsObject,
  }
}

export class StyleColor extends jspb.Message {
  getBackground(): string;
  setBackground(value: string): void;

  getLogoStyle(): StyleColor.LogoStyle | undefined;
  setLogoStyle(value?: StyleColor.LogoStyle): void;
  hasLogoStyle(): boolean;
  clearLogoStyle(): void;

  getHeaderStyle(): StyleColor.HeaderStyle | undefined;
  setHeaderStyle(value?: StyleColor.HeaderStyle): void;
  hasHeaderStyle(): boolean;
  clearHeaderStyle(): void;

  getFooterStyle(): StyleColor.FooterStyle | undefined;
  setFooterStyle(value?: StyleColor.FooterStyle): void;
  hasFooterStyle(): boolean;
  clearFooterStyle(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StyleColor.AsObject;
  static toObject(includeInstance: boolean, msg: StyleColor): StyleColor.AsObject;
  static serializeBinaryToWriter(message: StyleColor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StyleColor;
  static deserializeBinaryFromReader(message: StyleColor, reader: jspb.BinaryReader): StyleColor;
}

export namespace StyleColor {
  export type AsObject = {
    background: string,
    logoStyle?: StyleColor.LogoStyle.AsObject,
    headerStyle?: StyleColor.HeaderStyle.AsObject,
    footerStyle?: StyleColor.FooterStyle.AsObject,
  }

  export class LogoStyle extends jspb.Message {
    getHeight(): string;
    setHeight(value: string): void;

    getWidth(): string;
    setWidth(value: string): void;

    getPaddingTop(): string;
    setPaddingTop(value: string): void;

    getNavTop(): string;
    setNavTop(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogoStyle.AsObject;
    static toObject(includeInstance: boolean, msg: LogoStyle): LogoStyle.AsObject;
    static serializeBinaryToWriter(message: LogoStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogoStyle;
    static deserializeBinaryFromReader(message: LogoStyle, reader: jspb.BinaryReader): LogoStyle;
  }

  export namespace LogoStyle {
    export type AsObject = {
      height: string,
      width: string,
      paddingTop: string,
      navTop: string,
    }
  }


  export class HeaderStyle extends jspb.Message {
    getColor(): string;
    setColor(value: string): void;

    getBackground(): string;
    setBackground(value: string): void;

    getToolColor(): string;
    setToolColor(value: string): void;

    getToolBackground(): string;
    setToolBackground(value: string): void;

    getMobile(): string;
    setMobile(value: string): void;

    getMobileBackground(): string;
    setMobileBackground(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderStyle.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderStyle): HeaderStyle.AsObject;
    static serializeBinaryToWriter(message: HeaderStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderStyle;
    static deserializeBinaryFromReader(message: HeaderStyle, reader: jspb.BinaryReader): HeaderStyle;
  }

  export namespace HeaderStyle {
    export type AsObject = {
      color: string,
      background: string,
      toolColor: string,
      toolBackground: string,
      mobile: string,
      mobileBackground: string,
    }
  }


  export class FooterStyle extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    getColor(): string;
    setColor(value: string): void;

    getBackground(): string;
    setBackground(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FooterStyle.AsObject;
    static toObject(includeInstance: boolean, msg: FooterStyle): FooterStyle.AsObject;
    static serializeBinaryToWriter(message: FooterStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FooterStyle;
    static deserializeBinaryFromReader(message: FooterStyle, reader: jspb.BinaryReader): FooterStyle;
  }

  export namespace FooterStyle {
    export type AsObject = {
      label: string,
      color: string,
      background: string,
    }
  }

}

