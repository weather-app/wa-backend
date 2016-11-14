var cfg = {
    'database': {
        server: 'westeurope.cloudapp.azure.com',
        user: 'postgres',
        password: 'xxxxxx',
        database: 'xxxxxx',
        options: {
            encrypt: true
        }
    },
    token: {
        secret: 'N5g9clpxuATS7Sts7ketnZ3FeicFkj',
        expires: 2 * 24 * 60 * 60
    }
};

module.exports = cfg;
