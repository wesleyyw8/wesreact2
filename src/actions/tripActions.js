import TripsApi from '../api/tripsAPI';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export const loadGetTripSuccess = groups => {
  return {
    type: types.LOAD_AVAILABILITY_SUCCESS, groups
  };
};

export const getAvailability = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TripsApi.getAvailability().then(availability => {
      dispatch(loadGetTripSuccess(availability.groups));
    }).catch(error => {
      throw(error);
    });
  };
};