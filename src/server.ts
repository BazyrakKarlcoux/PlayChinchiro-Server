import 'dotenv/config';
import { createServer } from 'http';

import { cfgMandantory } from './configurator';
import { logger } from './logger';
import { initApiServer } from './server-api';
import { initSocketIOSever } from './server-socketio';

const log = logger({ tag: 'server' });

const HTTP_PORT = cfgMandantory('HTTP_PORT');

(async () => {
  const apiServerApp = await initApiServer();

  const server = createServer(apiServerApp);
  await initSocketIOSever(server);

  server
    .listen(HTTP_PORT, () =>
      log.info(`server started, port: ${HTTP_PORT}`));
})();