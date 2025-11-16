export default ({ env }) => ({
  url: env('PUBLIC_URL'),
  host: '0.0.0.0',             // Fixed host
  port: env.int('PORT', 10000), // Render requires 10000
  app: {
    keys: env('APP_KEYS', '').split(',').map(k => k.trim()), // Fixed APP_KEYS
  },
});
