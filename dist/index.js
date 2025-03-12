"use strict";
/**
 * 正则表达式验证库
 * 提供常用的正则表达式验证方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNumber = exports.numberRegex = exports.isValidChinese = exports.chineseRegex = exports.isValidDate = exports.dateRegex = exports.isValidIpv4 = exports.ipv4Regex = exports.isStrongPassword = exports.strongPasswordRegex = exports.isValidPostalCode = exports.postalCodeRegex = exports.isValidIdCard = exports.idCardRegex = exports.isValidUrl = exports.urlRegex = exports.isValidPhone = exports.phoneRegex = exports.isValidEmail = exports.emailRegex = void 0;
// 邮箱验证
exports.emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
const isValidEmail = (email) => exports.emailRegex.test(email);
exports.isValidEmail = isValidEmail;
// 手机号验证（中国大陆）
exports.phoneRegex = /^1[3-9]\d{9}$/;
const isValidPhone = (phone) => exports.phoneRegex.test(phone);
exports.isValidPhone = isValidPhone;
// URL验证
exports.urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
const isValidUrl = (url) => exports.urlRegex.test(url);
exports.isValidUrl = isValidUrl;
// 身份证号验证（中国大陆18位）
exports.idCardRegex = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/;
const isValidIdCard = (idCard) => exports.idCardRegex.test(idCard);
exports.isValidIdCard = isValidIdCard;
// 邮政编码验证（中国大陆）
exports.postalCodeRegex = /^[1-9]\d{5}$/;
const isValidPostalCode = (postalCode) => exports.postalCodeRegex.test(postalCode);
exports.isValidPostalCode = isValidPostalCode;
// 强密码验证（至少8位，包含大小写字母、数字和特殊字符）
exports.strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const isStrongPassword = (password) => exports.strongPasswordRegex.test(password);
exports.isStrongPassword = isStrongPassword;
// IPv4地址验证
exports.ipv4Regex = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
const isValidIpv4 = (ip) => exports.ipv4Regex.test(ip);
exports.isValidIpv4 = isValidIpv4;
// 日期验证（YYYY-MM-DD格式）
exports.dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const isValidDate = (date) => exports.dateRegex.test(date);
exports.isValidDate = isValidDate;
// 中文字符验证
exports.chineseRegex = /^[\u4e00-\u9fa5]+$/;
const isValidChinese = (text) => exports.chineseRegex.test(text);
exports.isValidChinese = isValidChinese;
// 数字验证（可以是整数或小数）
exports.numberRegex = /^-?\d*\.?\d+$/;
const isValidNumber = (number) => exports.numberRegex.test(number);
exports.isValidNumber = isValidNumber;
