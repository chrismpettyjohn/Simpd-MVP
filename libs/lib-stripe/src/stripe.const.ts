export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is missing');
}
