/**
 * 验证器工厂
 * 根据配置自动生成验证方法
 */

import { ValidatorConfig } from './config';

/**
 * 创建验证方法
 * @param config 验证器配置
 * @returns 验证方法
 */
export const createValidator = (config: ValidatorConfig) => {
  const validator = (value: string): boolean => config.regex.test(value);
  return validator;
};

/**
 * 创建正则表达式和验证方法对
 * @param config 验证器配置
 * @returns [正则表达式, 验证方法]
 */
export const createValidatorPair = (config: ValidatorConfig): [RegExp, (value: string) => boolean] => {
  return [config.regex, createValidator(config)];
};