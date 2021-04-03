import { connect } from "react-redux";
import {
  SHOW_EDIT_COMPONENT_MODAL,
  RESET_EDIT_COMPONENT_FORM,
  MODIFY_BREADTH,
  MODIFY_HEIGHT,
  MODIFY_LENGTH,
  MODIFY_WEIGHT,
  MODIFY_WIDTH,
} from "../../actions/types";
import ViewStructures from "../../pages/cmpcModification/ViewStructures";

const mapDispatchToProps = (dispatch, props) => {
  return {
    redirectToComponentPage(id) {
      props.history.push(
        `/etrack/structure/modifyComponent/${window.btoa(id)}`
      );
    },
  };
};

const mapStateToProps = (state) => {
  const cmpc = state.cmpc;
  return { cmpc };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructures);