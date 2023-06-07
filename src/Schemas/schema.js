import joi from 'joi';

export const productSchema = joi.object({
  Name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên sản phẩm',
    'any.required': 'Vui lòng nhập tên sản phẩm',
  }),
  Price: joi.number().required().messages({
    'number.base': 'Vui lòng nhập giá sản phẩm',
    'any.required': 'Vui lòng nhập giá sản phẩm',
  }),
  Description: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập mô tả sản phẩm',
    'any.required': 'Vui lòng nhập mô tả sản phẩm',
  }),
});

export const categorySchema = joi.object({
  Name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên danh mục',
    'any.required': 'Vui lòng nhập tên danh mục',
  }),
});

export const signupSchema = joi.object({
  Name: joi.string().required().messages({
    'string.empty': 'Vui lòng nhập tên',
    'any.required': 'Vui lòng nhập tên',
  }),
  Email: joi.string().email().required().messages({
    'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
    'any.required': 'Vui lòng nhập địa chỉ email',
  }),
  Password: joi.string().min(6).required().messages({
    'string.min': 'Mật khẩu phải chứa ít nhất 6 ký tự',
    'any.required': 'Vui lòng nhập mật khẩu',
  })
});

export const signinSchema = joi.object({
  Email: joi.string().email().required().messages({
    'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
    'any.required': 'Vui lòng nhập địa chỉ email',
  }),
  Password: joi.string().min(6).required().messages({
    'string.min': 'Mật khẩu phải chứa ít nhất 6 ký tự',
    'any.required': 'Vui lòng nhập mật khẩu',
  }),
});
