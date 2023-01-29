const fastify = require('fastify')({
  logger: true // This enables the logger feature of Fastify
});

// Creating a GET endpoint at the root path
fastify.get('/', (request, reply) => {
  // Returning a JSON object containing a message
  reply.send({ message: 'Hello World!' });
});

(async () => {
  try {
    // Starting the server and listening on port 3000 or the port specified in the PORT environment variable
    // host '::' makes the server listen on all available network interfaces, including both IPv4 and IPv6
    await fastify.listen({
      port: Number(process.env.PORT || '3000'),
      host: '::'
    });
  } catch (err) {
    // Logging any errors that occur
    fastify.log.error(err);
    process.exit(1);
  }
})();

// Happy Hacking!
