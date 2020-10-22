import { init, RematchRootState } from '@rematch/core';
import { loginStore } from '../Components/Login/Models/Index';

const models = {
  loginStore,
};

const store = init({
  models,
});

export const { dispatch } = store;

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models>;
export default store;
