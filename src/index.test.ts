import {
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isValidIdCard,
  isValidPostalCode,
  isStrongPassword,
  isValidIpv4,
  isValidDate,
  isValidChinese,
  isValidNumber
} from './index';

describe('正则表达式验证测试', () => {
  describe('邮箱验证', () => {
    test('有效的邮箱地址', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.com')).toBe(true);
      expect(isValidEmail('user-name@domain.com.cn')).toBe(true);
    });

    test('无效的邮箱地址', () => {
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('test@com')).toBe(false);
    });
  });

  describe('手机号验证', () => {
    test('有效的手机号', () => {
      expect(isValidPhone('13812345678')).toBe(true);
      expect(isValidPhone('15912345678')).toBe(true);
      expect(isValidPhone('18812345678')).toBe(true);
    });

    test('无效的手机号', () => {
      expect(isValidPhone('12812345678')).toBe(false);
      expect(isValidPhone('1381234567')).toBe(false);
      expect(isValidPhone('138123456789')).toBe(false);
      expect(isValidPhone('1381234567a')).toBe(false);
    });
  });

  describe('URL验证', () => {
    test('有效的URL', () => {
      expect(isValidUrl('https://www.example.com')).toBe(true);
      expect(isValidUrl('http://example.com')).toBe(true);
      expect(isValidUrl('www.example.com')).toBe(true);
    });

    test('无效的URL', () => {
      expect(isValidUrl('htp://example')).toBe(false);
      expect(isValidUrl('example')).toBe(false);
      expect(isValidUrl('http://')).toBe(false);
    });
  });

  describe('身份证号验证', () => {
    test('有效的身份证号', () => {
      expect(isValidIdCard('440101199001011234')).toBe(true);
      expect(isValidIdCard('44010119900101123X')).toBe(true);
    });

    test('无效的身份证号', () => {
      expect(isValidIdCard('44010119900101')).toBe(false);
      expect(isValidIdCard('440101199001011')).toBe(false);
      expect(isValidIdCard('44010119900101123Y')).toBe(false);
    });
  });

  describe('邮政编码验证', () => {
    test('有效的邮政编码', () => {
      expect(isValidPostalCode('100000')).toBe(true);
      expect(isValidPostalCode('200000')).toBe(true);
    });

    test('无效的邮政编码', () => {
      expect(isValidPostalCode('1000000')).toBe(false);
      expect(isValidPostalCode('10000')).toBe(false);
      expect(isValidPostalCode('a10000')).toBe(false);
    });
  });

  describe('强密码验证', () => {
    test('有效的强密码', () => {
      expect(isStrongPassword('Test123!@')).toBe(true);
      expect(isStrongPassword('Password123#')).toBe(true);
    });

    test('无效的强密码', () => {
      expect(isStrongPassword('password')).toBe(false);
      expect(isStrongPassword('12345678')).toBe(false);
      expect(isStrongPassword('Password')).toBe(false);
    });
  });

  describe('IPv4地址验证', () => {
    test('有效的IPv4地址', () => {
      expect(isValidIpv4('192.168.1.1')).toBe(true);
      expect(isValidIpv4('255.255.255.0')).toBe(true);
      expect(isValidIpv4('0.0.0.0')).toBe(true);
    });

    test('无效的IPv4地址', () => {
      expect(isValidIpv4('256.1.2.3')).toBe(false);
      expect(isValidIpv4('1.2.3')).toBe(false);
      expect(isValidIpv4('1.2.3.4.5')).toBe(false);
    });
  });

  describe('日期验证', () => {
    test('有效的日期', () => {
      expect(isValidDate('2023-12-31')).toBe(true);
      expect(isValidDate('2024-01-01')).toBe(true);
    });

    test('无效的日期', () => {
      expect(isValidDate('2023-13-01')).toBe(false);
      expect(isValidDate('2023-12-32')).toBe(false);
      expect(isValidDate('2023/12/31')).toBe(false);
    });
  });

  describe('中文字符验证', () => {
    test('有效的中文字符', () => {
      expect(isValidChinese('中文')).toBe(true);
      expect(isValidChinese('测试文本')).toBe(true);
    });

    test('无效的中文字符', () => {
      expect(isValidChinese('中文123')).toBe(false);
      expect(isValidChinese('test')).toBe(false);
      expect(isValidChinese('中文 ')).toBe(false);
    });
  });

  describe('数字验证', () => {
    test('有效的数字', () => {
      expect(isValidNumber('123')).toBe(true);
      expect(isValidNumber('-123')).toBe(true);
      expect(isValidNumber('123.456')).toBe(true);
      expect(isValidNumber('-123.456')).toBe(true);
    });

    test('无效的数字', () => {
      expect(isValidNumber('abc')).toBe(false);
      expect(isValidNumber('12.34.56')).toBe(false);
      expect(isValidNumber('12a')).toBe(false);
    });
  });
});