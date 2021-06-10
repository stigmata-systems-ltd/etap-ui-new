import { connect } from "react-redux";
import store from "../../store";

import {
  CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
  RESET_CREATE_BUSINESS_UNIT_FORM,
  RESET_STRUCTURE_FORM,
  SET_BUSINESS_UNIT_EDIT_MODE,
  BUSINESS_UNIT_NAME,
  BUSINESS_UNIT_STATUS,
  LIST_IC_CODES,
  IC_CODE,
  BUSINESS_UNIT_LIST,
  CHANGE_EDIT_BUSINESS_UNIT_MODAL_STATUS,
  RESET_EDIT_BUSINESS_UNIT_FORM,
  BU_STATUS,
  SET_SBG_CODE,
} from "../../actions/types";
import {
  addBusinessUnit,
  updateBusinessUnitType,
  businessUnitList,
  getICCodes,
  getSbgCodes,
} from "../../actions/businessUnitAction";
import swal from "sweetalert";
import EditBusinessUnit from "../../pages/businessUnit/EditBusinessUnit";

const mapDispatchToProps = (dispatch) => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    getICCodes() {
      dispatch(getICCodes());
    },
    getSbgCodes() {
      dispatch(getSbgCodes());
    },
    updateBusinessUnitType() {
      dispatch(updateBusinessUnitType())
        .then((response) => {
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch(businessUnitList());
          dispatch({
            type: SET_BUSINESS_UNIT_EDIT_MODE,
            payload: false,
          });
          dispatch({ type: RESET_EDIT_BUSINESS_UNIT_FORM });
          dispatch({
            type: CHANGE_EDIT_BUSINESS_UNIT_MODAL_STATUS,
            payload: false,
          });
        })
        .catch((err) => {
          swal("Update Business Unit Failed", {
            icon: "error",
          });
        });
    },
    closeAddBusinessUnitModal() {
      dispatch({
        type: CHANGE_EDIT_BUSINESS_UNIT_MODAL_STATUS,
        payload: false,
      });
      dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
    },

    handleChangeBusinessUnitName(value) {
      dispatch({
        type: BUSINESS_UNIT_NAME,
        payload: value,
      });
    },
    handleChangeICCode(value) {
      dispatch({
        type: IC_CODE,
        payload: value,
      });
    },
    handleChangeSbgCode(value) {
      dispatch({
        type: SET_SBG_CODE,
        payload: value,
      });
    },
    handleChangeBusinessUnit(value) {
      dispatch({
        type: BUSINESS_UNIT_NAME,
        payload: value,
      });
    },
    handleBuStatus(value) {
      dispatch({
        type: BU_STATUS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const businessUnit = store.getState().businessUnit;
  return {
    businessUnit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBusinessUnit);
