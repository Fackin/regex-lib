# @uiniao/regex-lib

[中文文档](./README.zh-CN.md)

A TypeScript library providing common regular expression validations for string validation.

## Features

- Support for various common string validations
- Written in TypeScript with complete type definitions
- Lightweight with no external dependencies
- Simple and easy-to-use API

## Installation

```bash
npm install @uiniao/regex-lib
```

## Usage

```typescript
import { isValidEmail, isValidPhone, isValidUrl } from '@uiniao/regex-lib';

// Validate email
console.log(isValidEmail('test@example.com')); // true

// Validate phone number
console.log(isValidPhone('13812345678')); // true

// Validate URL
console.log(isValidUrl('https://www.example.com')); // true
```

## API Documentation

### Email Validation

```typescript
isValidEmail(email: string): boolean
```

Validates if the input is a valid email address.

- Parameter: `email` - The email string to validate
- Returns: `boolean` - Whether it's a valid email address

### Phone Number Validation

```typescript
isValidPhone(phone: string): boolean
```

Validates if the input is a valid Chinese mainland phone number.

- Parameter: `phone` - The phone number string to validate
- Returns: `boolean` - Whether it's a valid phone number

### URL Validation

```typescript
isValidUrl(url: string): boolean
```

Validates if the input is a valid URL address.

- Parameter: `url` - The URL string to validate
- Returns: `boolean` - Whether it's a valid URL address

### ID Card Validation

```typescript
isValidIdCard(idCard: string): boolean
```

Validates if the input is a valid 18-digit Chinese mainland ID card number.

- Parameter: `idCard` - The ID card number string to validate
- Returns: `boolean` - Whether it's a valid ID card number

### Postal Code Validation

```typescript
isValidPostalCode(postalCode: string): boolean
```

Validates if the input is a valid Chinese mainland postal code.

- Parameter: `postalCode` - The postal code string to validate
- Returns: `boolean` - Whether it's a valid postal code

### Strong Password Validation

```typescript
isStrongPassword(password: string): boolean
```

Validates if the input is a strong password (at least 8 characters, containing uppercase and lowercase letters, numbers, and special characters).

- Parameter: `password` - The password string to validate
- Returns: `boolean` - Whether it's a valid strong password

### IPv4 Address Validation

```typescript
isValidIpv4(ip: string): boolean
```

Validates if the input is a valid IPv4 address.

- Parameter: `ip` - The IP address string to validate
- Returns: `boolean` - Whether it's a valid IPv4 address

### Date Validation

```typescript
isValidDate(date: string): boolean
```

Validates if the input is a valid date format (YYYY-MM-DD).

- Parameter: `date` - The date string to validate
- Returns: `boolean` - Whether it's a valid date format

### Chinese Character Validation

```typescript
isValidChinese(text: string): boolean
```

Validates if the input contains only Chinese characters.

- Parameter: `text` - The text string to validate
- Returns: `boolean` - Whether it contains only Chinese characters

### Number Validation

```typescript
isValidNumber(number: string): boolean
```

Validates if the input is a valid number (can be integer or decimal).

- Parameter: `number` - The number string to validate
- Returns: `boolean` - Whether it's a valid number

## License

MIT