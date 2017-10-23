module.exports = {
    'port': process.env.PORT || 3000,
    'apiKey': process.env.TOKBOX_API || '45959522',
    'apiSecret': process.env.TOKBOX_SECRET || 'd22e32a919ac11b5a410ed94c2147057f584e012',
    'mongodb': process.env.MONGOURL || 'mongodb://admin:admin@localhost:27017/stream'
};