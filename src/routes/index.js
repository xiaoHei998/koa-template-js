const staffControllers = require('../controllers/staffs')

module.exports = {
    '用户登录': {
        path: '/user/login',
        method: 'post',
        controllers: staffControllers.userLogin
    }
}