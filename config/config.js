var cfg = {
    'database': {
        database: 'D:\\github\\weather\\wa-backend\\data\\db2.sqlite3',
        dialect: 'sqlite',
        server: '',
        user: '',
        password: '',
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
