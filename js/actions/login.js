const Login = (state = {},action) => {
    let { type,info } = action
    switch (type) {
        case 'LOGIN_IN':
            return {
                ...info
            }
        case 'LOGIN_OUT':
            return {}
        default:
            return state
    }
}
export default Login
