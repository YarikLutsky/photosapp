export default () => ({
    database: {
      uri: process.env.DATABASE_URI || 'mongodb://localhost:27018/photoapp',
    },
    app: {
      port: parseInt(process.env.APP_PORT, 10) || 3000,
    },
    orders: {
      apiUrl: process.env.ORDERS_API_URL || 'https://api.example.com/orders',
    },
    photo: {
        apiUrl: process.env.PHOTO_API || 'https://pixabay.com/api/',
        token: process.env.PHOTO_TOKEN || 'your token',
      },
  });