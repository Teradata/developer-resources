import { LocalBackendAuthProvider, TinaNodeBackend } from '@tinacms/datalayer';
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from 'tinacms-authjs';

import databaseClient from '../../tina/__generated__/databaseClient';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

const tinaBackend = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient,
          secret: process.env.NEXTAUTH_SECRET,
          debug: true,
        }),
      }),
  databaseClient,
});

const handler = async (req, res) => {
  // modify the request object here if needed
  tinaBackend(req, res);
};

export default handler;
