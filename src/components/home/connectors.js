import { bindActionCreators } from 'redux';
import { getGroups } from 'Selectors';
import * as tourActions from 'Actions/tourActions';

export const mapStateToProps = state => {
  return {
    groups: getGroups(state)
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(tourActions, dispatch);
}