import InitialMetaStore, {IMetaStore} from "./meta/InitialMetaStore";

export interface IStore {
	metaStore: IMetaStore;
	form: any;
}

export default {
	metaStore: InitialMetaStore,
	form: {},
} as IStore;
