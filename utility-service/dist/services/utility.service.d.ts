export interface standardObject {
    [key: string]: any;
}
export declare const HTTP_TIMEOUT: Number;
export declare const MAX_REDIRECTS: Number;
export declare const PRODUCT_NAME: string;
export declare const REGION_NAME: string;
export declare const OK_STATUS: string;
export declare const MAX_SAFE_INTEGER: number;
export declare const isUndefined: (obj: standardObject) => obj is undefined;
export declare const isObject: (fn: any) => fn is object;
export declare const validatePath: (path?: string) => string;
export declare const isFunction: (fn: any) => boolean;
export declare const isString: (value: any) => boolean;
export declare const isConstructor: (fn: any) => boolean;
export declare const isNil: (obj: standardObject) => obj is null;
export declare const isNull: (value: any) => boolean;
export declare const isEmpty: (array: any[]) => boolean;
export declare const isSymbol: (fn: any) => fn is symbol;
export declare const has: (obj: standardObject, key: string) => boolean;
export declare const last: (array: any[]) => any;
export declare const first: (array: any[]) => any;
export declare const hasIn: (object: standardObject, key: string) => boolean;
export declare const isLength: (value: number) => boolean;
export declare const isObjectLike: (value: any) => boolean;
export declare const getTag: (value: any) => any;
export declare const without: (array: any[], values: any[], count?: number) => any[];
export declare const prepend: (array: any[], value: any) => any[];
