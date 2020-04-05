"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_TIMEOUT = 7000;
exports.MAX_REDIRECTS = 5;
exports.PRODUCT_NAME = "[corprate]";
exports.REGION_NAME = "US";
exports.OK_STATUS = "OK";
exports.MAX_SAFE_INTEGER = 9007199254740991;
const toString = Object.prototype.toString;
exports.isUndefined = (obj) => typeof obj === "undefined";
exports.isObject = (fn) => !exports.isNil(fn) && typeof fn === "object";
exports.validatePath = (path) => path ? (path.charAt(0) !== "/" ? "/" + path : path) : "";
exports.isFunction = (fn) => typeof fn === "function";
exports.isString = (value) => {
    const type = typeof value;
    return (type == "string" ||
        (type == "object" &&
            value != null &&
            !Array.isArray(value) &&
            exports.getTag(value) == "[object String]"));
};
exports.isConstructor = (fn) => fn === "constructor";
exports.isNil = (obj) => exports.isUndefined(obj) || obj === null;
exports.isNull = (value) => {
    return value === null;
};
exports.isEmpty = (array) => !(array && array.length > 0);
exports.isSymbol = (fn) => typeof fn === "symbol";
exports.has = (obj, key) => obj.hasOwnProperty(key);
exports.last = (array) => {
    const length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
};
exports.first = (array) => {
    return array != null && array.length ? array[0] : undefined;
};
exports.hasIn = (object, key) => {
    return object != null && key in Object(object);
};
exports.isLength = (value) => {
    return (typeof value == "number" &&
        value > -1 &&
        value % 1 == 0 &&
        value <= exports.MAX_SAFE_INTEGER);
};
exports.isObjectLike = (value) => {
    return typeof value == "object" && value !== null;
};
exports.getTag = (value) => {
    if (value == null) {
        return value === undefined ? "[object Undefined]" : "[object Null]";
    }
    return toString.call(value);
};
exports.without = (array = [], values, count = 0) => {
    var index;
    var i = 0;
    for (var j = 0; j <= values.length; j++) {
        while ((!count || i++ < count) && ~(index = array.indexOf(values[j])))
            array.splice(index, 1);
    }
    return [...array];
};
exports.prepend = (array, value) => {
    const newArray = [...array];
    newArray.unshift(value);
    return [...newArray];
};
