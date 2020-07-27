import { LOGIN } from './types';

export const login = (username, password) => ({
    type: LOGIN,
    data: true
});

// export default login = (loginInput) => {
//     const { username, password } = loginInput;
//     return (dispatch) => {
//         return fetch(LoginUrl, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(loginInput),
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             if (json.msg === 'success') { 
//             dispatch(setLoginState({ ...json, userId: username })); 
//             } else {
//             Alert.alert('Login Failed', 'Username or Password is incorrect');
//             }
//         })
//         .catch((err) => {
//             Alert.alert('Login Failed', 'Some error occured, please retry');
//             console.log(err);
//         });
//     };
// };

