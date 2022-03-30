module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ef8c86db18af736fbae3039e803316c3'),
  },
});
