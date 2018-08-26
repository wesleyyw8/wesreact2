import TripsApi from '../api/tripsAPI';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export const loadGetTripSuccess = availability => {
  return {
    type: types.LOAD_AVAILABILITY_SUCCESS, availability
  };
};

export const getAvailability = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TripsApi.getAvailability().then(availability => {
      console.log(availability);
      dispatch(loadGetTripSuccess(availability));
    }).catch(error => {
      throw(error);
    });
  };
};