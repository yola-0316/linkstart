import S from 'sanctuary';

interface ILinksModel {
  state: {
    byId: {
      [key: number]: {
        isDone: boolean;
      };
    };
    allIds: number[];
  };
  reducers: {
    [f: string]: (state: ILinksModel['state'], payload: any) => ILinksModel['state'];
  };
  effects: {
    [fn: string]: <T>(payload: T, rootState: T) => Promise<void>;
  };
}

const links: ILinksModel = {
  state: {
    byId: {},
    allIds: [],
  },
  reducers: {
    remove(state, payload) {
      return {
        byId: removeById(state.byId, payload),
        allIds: removeAllIds(state.allIds, payload),
      };
    },
    toggle(state, payload) {
      return {
        byId: toggleById(state.byId, payload),
        allIds: toggleAllIds(state.allIds, payload),
      };
    },
    add(state, payload) {
      let idToAdd = S.fromMaybe(0)(S.last(state.allIds));
      idToAdd++;
      return {
        byId: addById(state.byId, { ...payload, idToAdd }),
        allIds: addAllIds(state.allIds, { ...payload, idToAdd }),
      };
    },
  },
  effects: {},
};
export default links;

function filterObjectByKey(obj: any, f: Function) {
  return Object.entries(obj)
    .filter(([key, value]) => f(key))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

type stateById = ILinksModel['state']['byId'];
type stateAllIds = ILinksModel['state']['allIds'];
function removeById(state: stateById, payload: any) {
  const { idToRemove } = payload;
  return filterObjectByKey(state, (id: number) => id !== idToRemove);
}

function removeAllIds(state: stateAllIds, payload: any) {
  const { idToRemove } = payload;
  return state.filter(id => id !== idToRemove);
}

function toggleById(state: stateById, payload: any) {
  const { idToToggle } = payload;
  return {
    ...state,
    [idToToggle]: {
      ...state[idToToggle],
      isDone: !state[idToToggle].isDone,
    },
  };
}

function toggleAllIds(state: stateAllIds, payload: any) {
  return state;
}

function addById(state: stateById, payload: any) {
  const { idToAdd } = payload;
  return {
    ...state,
    [idToAdd]: {
      isDone: false,
    },
  };
}

function addAllIds(state: stateAllIds, payload: any) {
  const { idToAdd } = payload;
  return state.concat(idToAdd);
}
