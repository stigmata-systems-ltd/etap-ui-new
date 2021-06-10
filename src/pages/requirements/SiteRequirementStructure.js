import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import FormRow from "../../common/forms/FormRow";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import { transformDropDownData } from "../../utils/dataTransformer";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class SiteRequirementStructure extends Component {
  constructor() {
    super();
    this.state = {
      isModelOpen: true,
    };
  }
  // componentDidMount() {
  //   this.props.requirement.siteRequirementList[this.props.index].id =
  //     this.props.index;
  // }

  showErrorMessage = () => {
    NotificationManager.error("Select a structure first", "", 5000);
  };
  render() {
    return (
      <>
        {this.props.requirement.siteRequirementList.length > 0 &&
          this.props.requirement.siteRequirementList.map(
            (requirement, index) => {
              return (
                <Col6 key={requirement.itemId}>
                  <SimpleRow>
                    <SearchableDropDown
                      size="col-sm-5"
                      fieldSize="col-sm-12"
                      placeholder="Structure"
                      name="structureName"
                      selectOptions={transformDropDownData(
                        this.props.requirement.structureList,
                        "id",
                        "name"
                      )}
                      onChange={(obj) =>
                        this.props.handleStructureNameChange(
                          obj,
                          requirement.itemId
                        )
                      }
                      value={requirement.structureName}
                    />
                    {/* <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="No.of Comp"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.componentsCount}
            disabled
          />
        </div> */}
                    {/* <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="Str Family"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.onStructureIDChange(e, this.props.index)
            }
            value={this.props.structureFamily}
            disabled
          />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="Dr Number"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.drawingNumber}
            disabled
          />
        </div> */}
                    <NotificationContainer />
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Qty"
                        name="quantity"
                        id={requirement.itemId}
                        onChange={(e) =>
                          this.props.onQuantityChange(e, requirement.itemId)
                        }
                        value={requirement.quantity}
                      />
                    </div>
                    <div className="col-sm-1">
                      <IconButton
                        iconname="faEdit"
                        index={this.props.index}
                        rounded
                        onClick={() =>
                          requirement.structId
                            ? this.props.showModalOpen(requirement.itemId)
                            : this.showErrorMessage()
                        }
                      />
                    </div>
                    <div className="col-sm-1">
                      <IconButton
                        iconname="faTimesCircle"
                        index={this.props.index}
                        rounded
                        onClick={() =>
                          this.props.onSiteRequirementRemove(requirement.itemId)
                        }
                      />
                    </div>
                  </SimpleRow>
                </Col6>
              );
            }
          )}
      </>
    );
  }
}

export default SiteRequirementStructure;
