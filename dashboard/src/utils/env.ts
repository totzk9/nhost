/**
 * URL of Hasura's Migration API. This is only used when local development is
 * enabled.
 */
export const LOCAL_MIGRATIONS_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_NHOST_LOCAL_MIGRATIONS_PORT || 9693
}`;

/**
 * Port of the locally running backend.
 */
export const LOCAL_BACKEND_PORT =
  process.env.NEXT_PUBLIC_NHOST_LOCAL_BACKEND_PORT;

/**
 * Subdomain of the Nhost project.
 */
export const SUBDOMAIN =
  (process.env.NEXT_PUBLIC_NHOST_LOCAL_SUBDOMAIN || 'localhost') === 'localhost'
    ? 'localhost'
    : `https://${process.env.NEXT_PUBLIC_NHOST_LOCAL_SUBDOMAIN}`;

/**
 * Local subdomain. This is only used when local development is enabled.
 */
export const LOCAL_SUBDOMAIN = LOCAL_BACKEND_PORT
  ? `${SUBDOMAIN}:${LOCAL_BACKEND_PORT}`
  : SUBDOMAIN;

/**
 * URL of Hasura Console. This is only used when running the Nhost Dashboard
 * locally.
 */
export const LOCAL_HASURA_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_NHOST_LOCAL_HASURA_PORT || 9695
}`;

/**
 * Backend URL for the locally running instance. This is only used when running
 * the Nhost Dashboard locally.
 */
export const LOCAL_BACKEND_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_NHOST_LOCAL_BACKEND_PORT || 1337
}`;
