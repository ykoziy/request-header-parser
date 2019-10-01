module.exports = (req, res) => {
  let data = {
    ipaddress: req.headers['x-forwarded-for'].split(',')[0],
    language: req.headers['accept-language'].split(','),
    software: req.headers['user-agent']
  };
  res.json(data);
}