export const middleWares = (app, middlewares) => {
  for (let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }
};
