declare module "papaparse" {
  import { ReadableStream } from "web-streams-polyfill/es2018";
  import { WritableStream } from "web-streams-polyfill/es2018";

  interface ParseConfig {
    delimiter?: string;
    newline?: string;
    quoteChar?: string;
    escapeChar?: string;
    header?: boolean;
    transformHeader?: (header: string) => string;
    dynamicTyping?: boolean;
    preview?: number;
    encoding?: string;
    worker?: boolean;
    comments?: boolean | string;
    download?: boolean;
    skipEmptyLines?: boolean;
    skipEmptyLinesFunction?: (line: string) => boolean;
    fastMode?: boolean;
    beforeFirstChunk?: (chunk: string) => string | void;
    withCredentials?: boolean;
    chunk?(results: ParseResult<unknown>, parser: Parser): void;
    error?(error: ParseError, file?: File | undefined): void;
    complete?(results: ParseResult<unknown>, file?: File | undefined): void;
    step?(results: ParseResult<unknown>, parser: Parser): void;
    headerTransform?(header: string): string;
    transform?(value: any, field: string | number): any;
    dynamicTypingFunction?(header: string): (value: any) => any;
    skipEmptyLinesFunction?(line: string): boolean;
    transformHeader?(header: string): string;
    workerCallback?(
      results: ParseResult<unknown>,
      file?: File | undefined,
      input?: ReadableStream | undefined,
      output?: WritableStream | undefined,
      worker?: Worker | undefined,
      handle?: number | undefined
    ): void;
  }

  type ParseResult<T> = {
    data: T[];
    errors: ParseError[];
    meta: ParseMeta;
  };

  interface ParseError {
    type:
      | "FieldMismatch"
      | "TooFewFields"
      | "TooManyFields"
      | "InvalidField"
      | "InvalidFieldType"
      | "MissingRequiredField"
      | "UnterminatedQuote"
      | "Any";
    code: string;
    message: string;
    row: number;
    index: number;
    column: number;
  }

  interface ParseMeta {
    delimiter: string;
    linebreak: string;
    aborted: boolean;
    fields: string[];
    truncated: boolean;
  }

  interface Parser {
    aborted: boolean;
    fields: string[];
    input: string;
    inputLen: number;
    lineno: number;
    offset: number;
    lastChar: string;
    chunkSize: number;
    __parse(callback: (result: ParseResult<unknown>) => void): void;
  }

  const papa: {
    parse(
      input: string | File | Blob,
      config?: ParseConfig
    ): ParseResult<unknown>;
  };

  export = papa;
}
