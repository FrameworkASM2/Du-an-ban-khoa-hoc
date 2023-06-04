import joi from 'joi';

export const productSchema = joi.object({
  name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên sản phẩm',
    'any.required': 'Vui lòng nhập tên sản phẩm',
  }),
  price: joi.number().required().messages({
    'number.base': 'Vui lòng nhập giá sản phẩm',
    'any.required': 'Vui lòng nhập giá sản phẩm',
  }),
  description: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập mô tả sản phẩm',
    'any.required': 'Vui lòng nhập mô tả sản phẩm',
  }),
});

export const categorySchema = joi.object({
  name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên danh mục',
    'any.required': 'Vui lòng nhập tên danh mục',
  }),
});

export const signupSchema = joi.object({
  name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên',
    'any.required': 'Vui lòng nhập tên',
  }),
  email: joi.string().email().required().messages({
    'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
    'any.required': 'Vui lòng nhập địa chỉ email',
  }),
  password: joi.string().min(6).required().messages({
    'string.min': 'Mật khẩu phải chứa ít nhất 6 ký tự',
    'any.required': 'Vui lòng nhập mật khẩu',
  }),
  confirmPassword: joi.string()
    .valid(joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Mật khẩu xác nhận phải trùng khớp với mật khẩu',
      'any.required': 'Vui lòng nhập mật khẩu xác nhận',
    }),
});

export const signinSchema = joi.object({
  email: joi.string().email().required().messages({
    'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
    'any.required': 'Vui lòng nhập địa chỉ email',
  }),
  password: joi.string().min(6).required().messages({
    'string.min': 'Mật khẩu phải chứa ít nhất 6 ký tự',
    'any.required': 'Vui lòng nhập mật khẩu',
  }),
});
