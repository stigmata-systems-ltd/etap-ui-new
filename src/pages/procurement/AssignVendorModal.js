import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import Button from "../../common/forms/Button";
import DateInput from "../../common/forms/DateInput";
import {
  transformStructureListData,
  transformVendorCodeListData,
  fabricationTableMetaData,
  outSourcingTableMetaData,
} from "./utils";
import CustomDataTable from "../../common/DataTable";

class AssignVendorModal extends Component {
  populateVendorStructures = () => {
    if (
      this.props.procurement.selectedStructures !== [] &&
      this.props.procurement.vendor.value !== undefined
    ) {
      let tempArr = [];
      if (this.props.procurement.activeItem.serviceType === "Fabrication") {
        if (this.props.procurement.fabricationCost !== []) {
          this.props.procurement.selectedStructures.map((structure) => {
            let tempObj = {
              subContId: this.props.procurement.vendor.value,
              vendorName: this.props.procurement.vendor.label,
              structureId: structure.value,
              structureName: structure.label,
              fabricationCost: this.props.procurement.fabricationCost.find(
                (item) => {
                  return item.structureId === structure.value;
                }
              ).cost,
            };
            tempArr.push(tempObj);
          });
        }
      } else {
        if (
          this.props.procurement.monthlyRent !== 0 &&
          this.props.procurement.contractYears !== 0 &&
          this.props.procurement.plannedReleaseDate !== "" &&
          this.props.procurement.actualStartDate !== "" &&
          this.props.procurement.expectedReleaseDate !== ""
        ) {
          this.props.procurement.selectedStructures.map((structure) => {
            let tempObj = {
              subContId: this.props.procurement.vendor.value,
              vendorName: this.props.procurement.vendor.label,
              structureId: structure.value,
              structureName: structure.label,
              monthlyRent: this.props.procurement.fabricationCost,
              contractYears: this.props.procurement.contractYears,
              plannedReleaseDate: this.props.procurement.plannedReleaseDate,
              expectedReleaseDate: this.props.procurement.expectedReleaseDate,
              actualStartDate: this.props.procurement.actualStartDate,
            };
            tempArr.push(tempObj);
          });
        }
      }
      this.props.setVendorStructures(tempArr);
    }
    this.props.setShowTableFlag(true);
  };

  removeStructureFromVendorStructures = (structureId) => {
    let tempArr = this.props.procurement.vendorStructures.filter(
      (structure) => {
        return structure.structureId !== structureId;
      }
    );
    this.props.setVendorStructures(tempArr);
  };

  render() {
    return (
      <Modal
        title="Assign Vendor"
        showModal={this.props.showModal}
        handleSave={() => {
          this.props.procurement.vendorStructures.length !== 0
            ? this.props.procurement.activeItem.serviceType === "Fabrication"
              ? this.props.fbAssignVendor()
              : this.props.osAssignVendor()
            : alert("Unable to save. Please check the fields");
        }}
        handleClose={this.props.closeAssignVendorModal}
        size="lg"
        isShowFooter={true}
      >
        <SimpleRow>
          <SearchableDropDown
            size="col-md-6"
            
            label="Structure Name"
            name="structureName"
            id="structureName"
            isMulti={true}
            selectOptions={transformStructureListData(
              this.props.procurement.structureListCode
            )}
            onChange={(item) => this.props.handleChangeSelectedStructures(item)}
          />
          <SearchableDropDown
            size="col-md-6"
            label="Vendor Name"
            name="vendorName"
            id="vendorName"
            selectOptions={transformVendorCodeListData(
              this.props.procurement.vendorCodeList
            )}
            onChange={(item) => this.props.handleChangeVendorId(item)}
          />
        </SimpleRow>
        
        
        <SimpleRow>
          <Button
            btnType="primary"
            btnText="Add"
            onClick={() => this.populateVendorStructures()}
          />
        </SimpleRow>
        {this.props.procurement.showTableFlag && (
          <>
            {this.props.procurement.vendorStructures && (
              <CustomDataTable
                metaData={
                []
                }
                // bodyData={this.props.procurement.vendorStructures}
                bodyData={[{}]}
              />
            )}
          </>
        )}
      </Modal>
    );
  }
}

export default AssignVendorModal;
