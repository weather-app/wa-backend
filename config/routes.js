var controllers = require('../controllers/'),
    models = require('../models/');

module.exports = {
    free: {
        v01: [],
        actual: [
            {
                type: 'put',
                postfix: '/token',
                method: controllers.token.getToken,
                comment: 'Метод авторизации, принимает параметры login и password ИЛИ {token & type}, в случае корректной пары ИЛИ наличия в массиве токенов присланного присылает token, который необходимо выставить в заголовке Authorization с префиком "Bearer "'
            }, {
                type: 'get',
                postfix: '/token/check',
                method: controllers.token.checkToken,
                comment: 'Метод проверки токена в заголовке'
            }
        ]
    },
    locked: {
        v01: [],
        actual: [
            // {
            //     type: 'get',
            //     postfix: '/users/',
            //     method: controllers.users.listall,
            //     accessGroups: [
            //         'admin'
            //     ]
            // }
        ]
    }
}