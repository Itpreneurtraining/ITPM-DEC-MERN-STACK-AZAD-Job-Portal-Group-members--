// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://29a21e523838639808cef4547ba5a867@o4509186758868992.ingest.us.sentry.io/4509186766077952",
  integrations: [Sentry.mongooseIntegration()],
});
