/**
 * 正则表达式验证库
 * 提供常用的正则表达式验证方法
 */

import {
  emailRegex,
  urlRegex,
  strongPasswordRegex,
  chineseRegex,
  isValidEmail,
  isValidUrl,
  isStrongPassword,
  isValidChinese
} from './validators/string';

import {
  numberRegex,
  ipv4Regex,
  dateRegex,
  postalCodeRegex,
  isValidNumber,
  isValidIpv4,
  isValidDate,
  isValidPostalCode
} from './validators/number';

import {
  phoneRegex,
  idCardRegex,
  isValidPhone,
  isValidIdCard
} from './validators/identity';

// 导出所有验证器的类型定义
export interface Validators {
  [key: string]: RegExp | ((value: string) => boolean);
}

// 导出所有正则表达式
export {
  emailRegex,
  urlRegex,
  strongPasswordRegex,
  chineseRegex,
  numberRegex,
  ipv4Regex,
  dateRegex,
  postalCodeRegex,
  phoneRegex,
  idCardRegex
};

// 导出所有验证方法
export {
  isValidEmail,
  isValidUrl,
  isStrongPassword,
  isValidChinese,
  isValidNumber,
  isValidIpv4,
  isValidDate,
  isValidPostalCode,
  isValidPhone,
  isValidIdCard
};

// 导出完整的验证器对象（用于全量引入）
const validators: Validators = {
  emailRegex,
  urlRegex,
  strongPasswordRegex,
  chineseRegex,
  numberRegex,
  ipv4Regex,
  dateRegex,
  postalCodeRegex,
  phoneRegex,
  idCardRegex,
  isValidEmail,
  isValidUrl,
  isStrongPassword,
  isValidChinese,
  isValidNumber,
  isValidIpv4,
  isValidDate,
  isValidPostalCode,
  isValidPhone,
  isValidIdCard
};

export default validators;