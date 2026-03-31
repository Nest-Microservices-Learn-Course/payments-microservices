import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  // NATS_SERVERS: string[];
  STRIPE_SECRET: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    // NATS_SERVERS: joi.array().items(joi.string()).required(),
    STRIPE_SECRET: joi.string().required(),
  })
  .unknown(true);

const validationResult = envsSchema.validate({
  ...process.env,
  // NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (validationResult.error) {
  throw new Error(`Config validation error: ${validationResult.error.message}`);
}

const envVars: EnvVars = validationResult.value as EnvVars;

export const envs = {
  port: envVars.PORT,
  // natsServer: envVars.NATS_SERVERS,
  stripeSecret: envVars.STRIPE_SECRET,
};
