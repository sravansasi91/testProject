'use strict';
import { connect } from 'react-redux';
import store from './../../store';
import homePageScreen from './../components/homePageScreen'
import * as Action from './../actionTypes';
import loginService from "../../api/loginService"

const mapStateToProps = state => {
  return {
    isLoading: state.homePageReducer.isLoading,
    error: state.homePageReducer.error,
    alertError: state.homePageReducer.alertError,
    info: state.homePageReducer.info
  }
};

const mapDispatchToProps = dispatch => ({
  serviceApiCall: () => serviceApiCall(dispatch)

});

export const serviceApiCall = (dispatch) => {
  dispatch(serviceApiPending());
  loginService(
    (response) => {
      console.log("apiResponse" + JSON.stringify(response))
      dispatch(serviceApiSuccess(response));
    },
    (errorMessage) => {
      dispatch(serviceApiError(errorMessage));
    }
  )
}

export function serviceApiSuccess(response) {
  return {
    type: Action.service.apiSuccess,
    info: response,
  }
}
export const serviceApiPending = () => ({
  type: Action.service.apiPending
})
export const serviceApiError = (error) => ({
  type: Action.service.apiError,
  error: error,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(homePageScreen);