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
    /**
     * 字符串相关的验证函数
     */
    email: { // 邮箱验证
        regex: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
        name: 'isValidEmail'
    },
    url: { // URL验证
        regex: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
        name: 'isValidUrl'
    },
    strongPassword: { // 强密码验证（至少8位，包含大小写字母、数字和特殊字符）
        // regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        name: 'isStrongPassword'
    },
    chinese: { // 中文字符验证
        regex: /^[\u4e00-\u9fa5]+$/,
        name: 'isValidChinese'
    },
    uppercase: { // 大写字母验证
        regex: /^[A-Z]+$/,
        name: 'hasUppercaseLetter'
    },
    lowercase: { // 小写字母验证
        regex: /^[a-z]+$/,
        name: 'hasLowercaseLetter'
    },
    specialChar: { // 特殊字符验证（不包括空格）
        regex: /[^a-zA-Z0-9\s]/,
        name: 'hasSpecialCharacter'
    },

    /**
     * 数字相关的验证函数
     */
    number: { // 数字验证（可以是整数或小数）
        regex: /^-?\d*\.?\d+$/,
        name: 'isValidNumber'
    },
    ipv4: { // IPv4地址验证
        regex: /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        name: 'isValidIpv4'
    },
    date: { // 日期验证（YYYY-MM-DD格式）
        regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        name: 'isValidDate'
    },
    postalCode: { // 邮政编码验证（中国大陆）
        regex: /^[1-9]\d{5}$/,
        name: 'isValidPostalCode'
    },

    /**
     * 身份验证相关的验证函数
     */
    phone: { // 手机号验证（中国大陆）
        regex: /^1[3-9]\d{9}$/,
        name: 'isValidPhone'
    },
    idCard: { // 身份证号验证（中国大陆18位）
        regex: /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/,
        name: 'isValidIdCard'
    }
};