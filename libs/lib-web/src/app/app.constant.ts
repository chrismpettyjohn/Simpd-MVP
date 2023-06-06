// @ts-ignore
export const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL ?? 'http://localhost:3000/graphql'

export const LOCAL_STORAGE_SESSION_TOKEN = 'simpd.session';

export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY!;

if (!STRIPE_PUBLIC_KEY) {
  throw new Error('import.meta.env.VITE_STRIPE_PUBLIC_KEY is not defined');
}
