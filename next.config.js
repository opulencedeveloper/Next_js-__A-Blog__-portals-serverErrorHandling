const {
  PHASE_DEVELOPMENT_SERVER,
} = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      env: {
        mongodb_username: "victorkudos",
        mongodb_password: "KRp5OZRtYJkP2upE",
        mongodb_clusstername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    reactStrictMode: false,
    env: {
      mongodb_username: "victorkudos",
      mongodb_password: "KRp5OZRtYJkP2upE",
      mongodb_clusstername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

