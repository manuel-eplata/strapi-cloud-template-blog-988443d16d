module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  // Reemplazamos la línea simple por esta configuración detallada:
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://aresfintech.mx",
        "https://dev.aresfintech.mx",
        "https://ares-fintech.mx",
        "https://dev.ares-fintech.mx",
        "https://main.dqkk7h9fh0kw0.amplifyapp.com",
        "https://dev.dqkk7h9fh0kw0.amplifyapp.com",
        "http://localhost:3000",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
