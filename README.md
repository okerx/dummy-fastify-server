# dummy-fastify-server
Super simple HTTP server using Fastify for testing purposes

## Installation

```bash
pnpm install
```
with npm
```bash
npm install
```
## Usage
### Start the server

```bash
pnpm start
```
with npm
```bash
npm run start
```
This will start the server on port 3000.


### Run in watch mode
```bash
pnpm dev
```
with npm
```bash
npm run dev
```
This will start the server using nodemon, which will automatically restart the server whenever you make changes to the code.

### Enable TLS support (optional)
In order to run with TLS support (HTTPS), all you need to do is to provide the path to your SSL certificate and key. you can do so by setting the environment variables `SSL_CERT_PATH` and `SSL_KEY_PATH`. you can also set them in a `.env` file in the project root dir, and they'll be loaded automatically.
```bash
# .env
SSL_CERT_PATH=/path/to/your/fastify.crt
SSL_KEY_PATH=/path/to/your/fastify.key
```

## License
MIT. See [LICENSE](https://github.com/ammar-oker/dummy-fastify-server/blob/5a39b66d9d088ae6ec1a4e6a3ce85d4a65e1335a/LICENSE) for more details.
