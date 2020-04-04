export interface standardObject {
  [key: string]: any;
}

export const HTTP_TIMEOUT: Number = 7000;
export const MAX_REDIRECTS: Number = 5;
export const PRODUCT_NAME: string = "[corprate]";
export const REGION_NAME: string = "US";
export const OK_STATUS: string = "OK";
export const MAX_SAFE_INTEGER: number = 9007199254740991;

const toString = Object.prototype.toString;
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isUndefined
 **-------------------------------------------------------------------------------------
 */
export const isUndefined = (obj: standardObject): obj is undefined =>
  typeof obj === "undefined";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isObject
 **-------------------------------------------------------------------------------------
 */
export const isObject = (fn: any): fn is object =>
  !isNil(fn) && typeof fn === "object";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - validatePath
 **-------------------------------------------------------------------------------------
 */
export const validatePath = (path?: string): string =>
  path ? (path.charAt(0) !== "/" ? "/" + path : path) : "";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isFunction
 **-------------------------------------------------------------------------------------
 */
export const isFunction = (fn: any): boolean => typeof fn === "function";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isString
 **-------------------------------------------------------------------------------------
 */
export const isString = (value: any) => {
  const type = typeof value;
  return (
    type == "string" ||
    (type == "object" &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == "[object String]")
  );
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isConstructor
 **-------------------------------------------------------------------------------------
 */
export const isConstructor = (fn: any): boolean => fn === "constructor";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isNil
 **-------------------------------------------------------------------------------------
 */
export const isNil = (obj: standardObject): obj is null | undefined =>
  isUndefined(obj) || obj === null;
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isNull
 **-------------------------------------------------------------------------------------
 */
export const isNull = (value: any) => {
  return value === null;
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isEmpty
 **-------------------------------------------------------------------------------------
 */
export const isEmpty = (array: any[]): boolean => !(array && array.length > 0);
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME -isSymbol
 **-------------------------------------------------------------------------------------
 */
export const isSymbol = (fn: any): fn is symbol => typeof fn === "symbol";
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - has
 **-------------------------------------------------------------------------------------
 */
export const has = (obj: standardObject, key: string) =>
  obj.hasOwnProperty(key);
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - last
 **-------------------------------------------------------------------------------------
 */
export const last = (array: any[]) => {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - first
 **-------------------------------------------------------------------------------------
 */
export const first = (array: any[]) => {
  return array != null && array.length ? array[0] : undefined;
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - hasIn
 **-------------------------------------------------------------------------------------
 */
export const hasIn = (object: standardObject, key: string) => {
  return object != null && key in Object(object);
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isLength
 **-------------------------------------------------------------------------------------
 */
export const isLength = (value: number) => {
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - isObjectLike
 **-------------------------------------------------------------------------------------
 */
export const isObjectLike = (value: any) => {
  return typeof value == "object" && value !== null;
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - getTag
 **-------------------------------------------------------------------------------------
 */
export const getTag = (value: any) => {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
};
/*
 **-------------------------------------------------------------------------------------
 ** FUNCTION NAME - without
 **-------------------------------------------------------------------------------------
 */
export const without = (
  array: any[] = [],
  values: any[],
  count: number = 0
) => {
  var index;
  var i = 0;
  for (var j = 0; j <= values.length; j++) {
    while ((!count || i++ < count) && ~(index = array.indexOf(values[j])))
      array.splice(index, 1);
  }
  return [...array];
};
/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - prepend =
 **-------------------------------------------------------------------------------------
 */
export const prepend = (array: any[], value: any) => {
  const newArray = [...array];
  newArray.unshift(value);
  return [...newArray];
};
