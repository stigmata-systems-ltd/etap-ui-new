import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";
import { transformDropDownData } from "../../utils/dataTransformer";
import SimpleRow from "../../common/forms/SimpleRow";


class AddUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjectList();
    this.props.getRolesList();
  }



  render() {
    return (
      <Modal
        title={`${this.props.users.isEdit ? "Update" : "Add"} User`}
        showModal={this.props.showAddComponentModal}
        handleSave={
          this.props.users.isEdit
            ? this.props.updateUser
            : this.props.addUser
        }
        handleClose={
          this.props.users.isEditMode
            ? this.props.closeAddUserModal
            : this.props.closeAddUserModal
        }
        size="lg"
        isShowFooter={true}
      >
        {console.log("isLoading", this.props.isLoading)}
        {this.props.users.isLoading && <Loader />}
        <SimpleRow>
          <TextInput
            label="First Name"
            name="firstName"
            id="firstName"
            onChange={e =>
              this.props.handleChangeFirstName(e.target.value)
            }
            value={this.props.users.firstName}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            id="lastName"
            onChange={e =>
              this.props.handleChangeLastName(e.target.value)
            }
            value={this.props.users.lastName}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            label="E-mail"
            name="email"
            id="email"
            onChange={e =>
              this.props.handleChangeEmail(e.target.value)
            }
            value={this.props.users.email}
          />
          <TextInput
            label="PS.No"
            name="psNo"
            id="psNo"
            onChange={e =>
              this.props.handleChangePsNo(e.target.value)
            }
            value={this.props.users.psNo}

          />
        </SimpleRow>
        <SimpleRow>

          <SimpleDropDown
            label="Project"
            name="project"
            selectOptions={transformDropDownData(this.props.users.projectCodesList, "id", "name")}
            onChange={(obj) => this.props.handleChangeProject(obj)}
            value={this.props.users.project}
          />

          <SimpleDropDown
            label="Role"
            name="role"
            selectOptions={transformDropDownData(this.props.users.rolesList, "id", "name")}
            onChange={(obj) => this.props.handleChangeRole(obj)}
            value={this.props.users.role}
          />
        </SimpleRow>
        <SimpleRow>
          <TextInput
            size="col-md-6"
            label="BU Name"
            name="businessUnit"
            id="businessUnit"
            onChange={e =>
              this.props.handleChangeBusinessUnit(e.target.value)
            }
            value={this.props.users.bu}
            placeholder="Auto Fetch"
            disabled={true}
          />
          {/* <TextInput
                size="col-md-4"
                label="Segment"
                name="segment"
                id="segment"
                onChange={e =>
                  this.props.handleChangeSegment(e.target.value)
                }
                value={this.props.users.segment}
                placeholder="Auto Fetch"
              /> */}
          <TextInput
            size="col-md-6"
            label="IC Name"
            name="independentCompany"
            id="independentCompany"
            onChange={e =>
              this.props.handleIndependentCompany(e.target.value)
            }
            value={this.props.users.ic}
            placeholder="Auto Fetch"
            disabled={true}
          />

        </SimpleRow>


        {this.props.users.isModalMsg && (
          <p className="text-danger">{this.props.component.message}</p>
        )}
      </Modal>
    );
  }
}

export default AddUser;
