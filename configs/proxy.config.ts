export const proxy = {
  '/api': {
    target: process.env.AXIOS_API_URL,
    pathRewrite: {
      '^/api/': '',
    },
  },
}
