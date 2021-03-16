import InitialMetaStore, {IMetaStore} from "./InitialMetaStore";
import {IAction} from "../IAction";
import {cloneDeep} from "lodash";

export enum MetaAction {
	LOADING = "LOADING",
	ADD_ERROR = "ADD_ERROR",
	REMOVE_ERROR = "REMOVE_ERROR",
}

export default function(store: IMetaStore = InitialMetaStore, a: IAction<MetaAction, any>): IMetaStore {

	const n: IMetaStore = cloneDeep(store);

	switch(a.type) {
		case MetaAction.LOADING:
			if (n.loadingIncrement + a.payload >= 0) {
				n.loadingIncrement += a.payload;
			} else {
				n.loadingIncrement = 0;
			}
			break;
		case MetaAction.ADD_ERROR:
			n.errors.push(a.payload);
			break;
		case MetaAction.REMOVE_ERROR:
			n.errors.splice(a.payload, 1);
			break;
		default:
			break;
	}

	return n;
}
