import Joi from "joi";
export function Signinsechma() {
  const signSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return signSchema;
}
