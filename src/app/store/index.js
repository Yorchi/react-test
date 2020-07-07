import { createStore } from 'easy-peasy';

import authModel from './authModel'

const storeModel = {
  auth: authModel
};

export const store = createStore(storeModel);
