export interface IMetaStore {
	loadingIncrement: number;
	errors: Array<any>;
}

export default {
	loadingIncrement: 0,
	errors: [],
} as IMetaStore;
