/**
 * 身份验证相关的验证函数
 */

// 手机号验证（中国大陆）
export const phoneRegex = /^1[3-9]\d{9}$/;
export const isValidPhone = (phone: string): boolean => phoneRegex.test(phone);

// 身份证号验证（中国大陆18位）
export const idCardRegex = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/;
export const isValidIdCard = (idCard: string): boolean => idCardRegex.test(idCard);