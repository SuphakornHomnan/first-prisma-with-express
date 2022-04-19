export const caching = (req, res, next) => {
  const period = 90;

  if (req.method === "GET") {
    res.set("Cache-control", `public, s-maxage=${period}`);
  } else {
    res.set("Cache-control", "no-store");
  }

  next()
};
