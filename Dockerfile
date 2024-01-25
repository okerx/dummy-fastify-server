FROM node:20-alpine

WORKDIR /app
USER node:node

COPY --chown=node:node node_modules node_modules
COPY --chown=node:node index.js index.js

EXPOSE 3000

CMD ["node", "index.js"]