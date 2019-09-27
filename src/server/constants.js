const port = process.env.PORT || 3000;
const SERVER_URL =
  process.env.NODE_ENV === 'production' ? 'https://...' : `http://localhost:${port}`;

export default SERVER_URL;
