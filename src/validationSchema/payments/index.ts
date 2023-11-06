import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_method: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  rental_id: yup.string().nullable().required(),
});
