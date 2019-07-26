import { SIGN_IN, SIGN_OUT } from '../actions/types';

//google auth sign in
export const signIn = (userId) => {

	return {
		type: SIGN_IN,
		payload: userId
	};
};

//google auth sign out
export const signOut = () => {
	return {
	type: SIGN_OUT
	};
};