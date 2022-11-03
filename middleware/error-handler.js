const errorHandleMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: 'there was an error' });
};

export default errorHandleMiddleware;
