import { getGroups } from 'Selectors';

export const mapStateToProps = state => {
  return {
    groups: getGroups(state)
  };
};