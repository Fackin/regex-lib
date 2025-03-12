/**
 * 验证器配置文件
 * 集中管理所有的正则表达式和验证方法名
 */

export interface ValidatorConfig {
  regex: RegExp;
  name: string;
}

export interface ValidatorConfigs {
  [key: string]: ValidatorConfig;
}

export const validatorConfigs: ValidatorConfigs = {
  // 字符串验证
  email: {
    regex: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    name: 'isValidEmail'
  },
  url: {
    regex: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
    name: 'isValidUrl'
  },
  strongPassword: {
    // regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    name: 'isStrongPassword'
  },
  chinese: {
    regex: /^[\u4e00-\u9fa5]+$/,
    name: 'isValidChinese'
  },

  // 数字验证
  number: {
    regex: /^-?\d*\.?\d+$/,
    name: 'isValidNumber'
  },
  ipv4: {
    regex: /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    name: 'isValidIpv4'
  },
  date: {
    regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    name: 'isValidDate'
  },
  postalCode: {
    regex: /^[1-9]\d{5}$/,
    name: 'isValidPostalCode'
  },

  // 身份验证
  phone: {
    regex: /^1[3-9]\d{9}$/,
    name: 'isValidPhone'
  },
  idCard: {
    regex: /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/,
    name: 'isValidIdCard'
  }
};