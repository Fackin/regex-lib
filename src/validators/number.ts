/**
 * 数字相关的验证函数
 */

// 数字验证（可以是整数或小数）
export const numberRegex = /^-?\d*\.?\d+$/;
export const isValidNumber = (number: string): boolean => numberRegex.test(number);

// IPv4地址验证
export const ipv4Regex = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
export const isValidIpv4 = (ip: string): boolean => ipv4Regex.test(ip);

// 日期验证（YYYY-MM-DD格式）
export const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export const isValidDate = (date: string): boolean => dateRegex.test(date);

// 邮政编码验证（中国大陆）
export const postalCodeRegex = /^[1-9]\d{5}$/;
export const isValidPostalCode = (postalCode: string): boolean => postalCodeRegex.test(postalCode);