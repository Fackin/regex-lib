/**
 * 正则表达式验证库
 * 提供常用的正则表达式验证方法
 */

import { validatorConfigs } from './validators/config';
import { createValidatorPair } from './validators/factory';

// 导出所有验证器的类型定义
export interface Validators {
  [key: string]: any;
}

// 生成所有验证器
const generatedValidators = Object.entries(validatorConfigs).reduce((acc, [key, config]) => {
  const [regex, validator] = createValidatorPair(config);
  return {
    ...acc,
    [`${key}Regex`]: regex,
    [config.name]: validator
  };
}, {} as Validators);

// 导出所有正则表达式和验证方法
export const {
  emailRegex,
  urlRegex,
  strongPasswordRegex,
  chineseRegex,
  uppercaseRegex,
  lowercaseRegex,
  specialCharRegex,
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
  isValidIdCard,
  hasUppercaseLetter,
  hasLowercaseLetter,
  hasSpecialCharacter
} = generatedValidators;

// 导出默认对象，包含所有验证器
export default generatedValidators;