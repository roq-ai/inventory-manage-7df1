import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
