import {MetaAction} from "./MetaReducer";
import {IAction} from "../IAction";

export function incrementLoading(): IAction<MetaAction.LOADING, number> {
	return {
		type: MetaAction.LOADING,
		payload: 1,
	}
}

export function decrementLoading(): IAction<MetaAction.LOADING, number> {
	return {
		type: MetaAction.LOADING,
		payload: -1,
	}
}

type APIError = {messages: string[]}
const makeDefaultError: () => APIError = () => ({messages: ["An unknown error has occurred. Please contact support or try your request again."]});
export async function addError(error?: {json: () => Promise<APIError>} | APIError): Promise<IAction<MetaAction.ADD_ERROR, any>> {
	let _error;

	try {
		if (error === null || error === undefined) {
			_error = makeDefaultError();
		} else if (error.hasOwnProperty("messages") && Array.isArray((error as APIError).messages) && (error as APIError).messages.length > 0) {
			_error = error;
		} else {
			try {
				_error = await (error as {json: () => Promise<APIError>}).json();
			} catch (e) {
				_error = makeDefaultError();
			}
		}
	} catch (e) {
		_error = makeDefaultError();
	}

	return {
		type: MetaAction.ADD_ERROR,
		payload: _error,
	}
}

export function removeError(i: number = 0): IAction<MetaAction.REMOVE_ERROR, number> {
	return {
		type: MetaAction.REMOVE_ERROR,
		payload: i,
	}
}