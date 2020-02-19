import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://1f0f9d5703f644d2a8df6ce06a63b57f@sentry.io/1874283"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
