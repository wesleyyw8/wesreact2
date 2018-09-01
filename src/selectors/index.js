import get from 'lodash/get';

export const getGroups = state =>{
  return get(state, 'groups', []);
}; 