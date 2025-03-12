/**
 * 字符串相关的验证函数
 */

// 邮箱验证
export const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
export const isValidEmail = (email: string): boolean => emailRegex.test(email);

// URL验证
export const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
export const isValidUrl = (url: string): boolean => urlRegex.test(url);

// 强密码验证（至少8位，包含大小写字母、数字和特殊字符）
export const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
export const isStrongPassword = (password: string): boolean => strongPasswordRegex.test(password);

// 中文字符验证
export const chineseRegex = /^[\u4e00-\u9fa5]+$/;
export const isValidChinese = (text: string): boolean => chineseRegex.test(text);

// 大写字母验证
export const uppercaseRegex = /^[A-Z]+$/;
export const hasUppercaseLetter = (text: string): boolean => uppercaseRegex.test(text);

// 小写字母验证
export const lowercaseRegex = /^[a-z]+$/;
export const hasLowercaseLetter = (text: string): boolean => lowercaseRegex.test(text);

// 特殊字符验证（不包括空格）
export const specialCharRegex = /[^a-zA-Z0-9\s]/;
export const hasSpecialCharacter = (text: string): boolean => specialCharRegex.test(text);
