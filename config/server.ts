
export default ({ env }) => ({
  url: env('PUBLIC_URL'),
  host: env('0.0.0.0'),
  port: env.int('PORT', 10000), // Render requires 10000
  app: {
    keys: env.array('APP_KEYS'),
  },
});


