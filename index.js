require('dotenv').config();

const fs = require('node:fs');
const Fastify = require('fastify');
const cors = require('@fastify/cors');

/** @type import('fastify').FastifyServerOptions */
const options = { logger: true };
if (process.env.SSL_CERT_PATH && process.env.SSL_KEY_PATH) {
  options.http2 = true;
  options.https = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
  };
} else {
  console.warn(
    'SSL_CERT_PATH & SSL_KEY_PATH were not provided. skipping SSL support.'
  );
}

const app = Fastify(options);

app.get('/', (request, reply) => {
  console.log('GET /');
  reply.send({ message: 'Hello World!' });
});

app.post('/', (request, reply) => {
  console.log(request.body);
  reply.send({ message: 'Hello World!' });
});

(async () => {
  try {
    await app.register(cors, { origin: '*' });
    // Starting the server and listening on port 3000 or the port specified in the PORT environment variable
    // host '::' makes the server listen on all available network interfaces, including both IPv4 and IPv6
    await app.listen({
      port: Number(process.env.PORT || '3000'),
      host: '::'
    });
  } catch (err) {
    // Logging any errors that occur
    app.log.error(err);
    process.exit(1);
  }
})();
