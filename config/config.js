var cfg = {
    'database': {
        database: null,
        server: '',
        user: null,
        password: null,
        options: {
            storage: __dirname + '/../data/db.sqlite3',
            dialect: 'sqlite'
        }
    },
    token: {
        secret: 'N5g9clpxuATS7Sts7ketnZ3FeicFkj',
        expires: 2 * 24 * 60 * 60
    }
};

module.exports = cfg;
