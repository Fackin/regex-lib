# @uiniao/regex-lib

[English Documentation](./README.md)

一个提供常用正则表达式验证的TypeScript库，包含多种常用的字符串验证方法。

## 功能特点

- 支持多种常用的字符串验证
- 使用TypeScript编写，提供完整的类型定义
- 轻量级，无外部依赖
- 简单易用的API

## 安装

```bash
npm install @uiniao/regex-lib
```

## 使用方法

```typescript
import { isValidEmail, isValidPhone, isValidUrl } from '@uiniao/regex-lib';

// 验证邮箱
console.log(isValidEmail('test@example.com')); // true

// 验证手机号
console.log(isValidPhone('13812345678')); // true

// 验证URL
console.log(isValidUrl('https://www.example.com')); // true
```

## API文档

### 邮箱验证

```typescript
isValidEmail(email: string): boolean
```

验证是否为有效的邮箱地址。

- 参数：`email` - 要验证的邮箱字符串
- 返回：`boolean` - 是否为有效的邮箱地址

### 手机号验证

```typescript
isValidPhone(phone: string): boolean
```

验证是否为有效的中国大陆手机号。

- 参数：`phone` - 要验证的手机号字符串
- 返回：`boolean` - 是否为有效的手机号

### URL验证

```typescript
isValidUrl(url: string): boolean
```

验证是否为有效的URL地址。

- 参数：`url` - 要验证的URL字符串
- 返回：`boolean` - 是否为有效的URL地址

### 身份证号验证

```typescript
isValidIdCard(idCard: string): boolean
```

验证是否为有效的中国大陆18位身份证号。

- 参数：`idCard` - 要验证的身份证号字符串
- 返回：`boolean` - 是否为有效的身份证号

### 邮政编码验证

```typescript
isValidPostalCode(postalCode: string): boolean
```

验证是否为有效的中国大陆邮政编码。

- 参数：`postalCode` - 要验证的邮政编码字符串
- 返回：`boolean` - 是否为有效的邮政编码

### 强密码验证

```typescript
isStrongPassword(password: string): boolean
```

验证是否为强密码（至少8位，包含大小写字母、数字和特殊字符）。

- 参数：`password` - 要验证的密码字符串
- 返回：`boolean` - 是否为有效的强密码

### IPv4地址验证

```typescript
isValidIpv4(ip: string): boolean
```

验证是否为有效的IPv4地址。

- 参数：`ip` - 要验证的IP地址字符串
- 返回：`boolean` - 是否为有效的IPv4地址

### 日期验证

```typescript
isValidDate(date: string): boolean
```

验证是否为有效的日期格式（YYYY-MM-DD）。

- 参数：`date` - 要验证的日期字符串
- 返回：`boolean` - 是否为有效的日期格式

### 中文字符验证

```typescript
isValidChinese(text: string): boolean
```

验证是否只包含中文字符。

- 参数：`text` - 要验证的文本字符串
- 返回：`boolean` - 是否只包含中文字符

### 数字验证

```typescript
isValidNumber(number: string): boolean
```

验证是否为有效的数字（可以是整数或小数）。

- 参数：`number` - 要验证的数字字符串
- 返回：`boolean` - 是否为有效的数字

## 许可证

MIT