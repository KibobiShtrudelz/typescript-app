// module.exports = (strapi) => {
//   return {
//     initialize() {
//       strapi.app.use(async (ctx, next) => {
//         await next();
//       });
//     },
//   };
// };

// const Sentry = require("@sentry/node");
// const Tracing = require("@sentry/tracing");
// Sentry.init({
//   dsn:
//     "https://511cd9194de64ea9ba190375a1d123a9@o512922.ingest.sentry.io/5613967",
//   tracesSampleRate: 1.0,
//   environment: strapi.config.environment,
// });

// const transaction = Sentry.startTransaction({
//   op: "test",
//   name: "My First Test Transaction",
// });

// setTimeout(() => {
//   try {
//     foo();
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     transaction.finish();
//   }
// }, 99);

// module.exports = (strapi) => {
//   return {
//     initialize() {
//       strapi.app.use(async (ctx, next) => {
//         try {
//           await next();
//         } catch (error) {
//           Sentry.captureException(error);
//           throw error;
//         }
//       });
//     },
//   };
// };
