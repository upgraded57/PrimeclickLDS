import "./formwizard.css";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { useState } from "react";

export default function FormWizard() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  return (
    <div className="formwizard">
      <div className="formwizard-top">
        <h3 className="h-100">Customize your form</h3>
        <p className="text-body">
          Welcome {`${user.first_name} ${user.last_name}`}
        </p>
      </div>

      <div className="wizard">
        <div className="wizard-form-container">
          <div className="wizard-form">
            <h3 className="h-100">FORM TITLE</h3>
            <Input
              name="wizard-firstName"
              label="First Name"
              placeholder="e.g John"
              type="text"
            />
            <Input
              name="wizard-lastName"
              label="Last Name"
              placeholder="e.g Doe"
              type="text"
            />
            <Input
              name="wizard-email"
              label="Email Address"
              placeholder="e.g sample@mail.com"
              type="email"
            />
            <Input
              name="wizard-phone"
              label="Phone Number"
              placeholder="e.g 09011223344"
              type="text"
            />
            <Input
              name="wizard-location"
              label="Location"
              placeholder="e.g Lagos, Nigeria"
              type="text"
            />
            <Button variant="solid" text="CALL ME" />
          </div>
          <Button variant="accent" text="Save Form" />

          <div className="wizard-control">
            <h5 className="h-50">Form Settings</h5>
            <div className="wizard-control-texts">
              <label htmlFor="wizard-control-title">
                <p>Form Title</p>
                <input type="text" id="wizard-control-title" />
              </label>
              <label htmlFor="wizard-control-btn-text">
                <p>Button Text</p>
                <input type="text" id="wizard-control-btn-text" />
              </label>
            </div>

            <div className="wizard-control-checks">
              <p>Check the options below for fields to display</p>
              <label htmlFor="wizard-control-check-firstName">
                <input type="checkbox" id="wizard-control-check-firstName" />
                <p>First Name</p>
              </label>
              <label htmlFor="wizard-control-check-lastName">
                <input type="checkbox" id="wizard-control-check-lastName" />
                <p>Last Name</p>
              </label>
              <label htmlFor="wizard-control-check-email">
                <input type="checkbox" id="wizard-control-check-email" />
                <p>Email Address</p>
              </label>
              <label htmlFor="wizard-control-check-phone">
                <input type="checkbox" id="wizard-control-check-phone" />
                <p>Phone Number</p>
              </label>
              <label htmlFor="wizard-control-check-location">
                <input type="checkbox" id="wizard-control-check-location" />
                <p>Location</p>
              </label>
            </div>

            <div className="wizard-control-colors">
              <p>Edit and customize form aesthetics with the options below </p>
              <label htmlFor="wizard-control-color-bg">
                <p>Background Color</p>
                <input type="color" id="wizard-control-color-bg" />
              </label>
              <label htmlFor="wizard-control-color-input-bg">
                <p>Input Field Background</p>
                <input type="color" id="wizard-control-color-input-bg" />
              </label>
              <label htmlFor="wizard-control-color-text">
                <p>Text Color</p>
                <input type="color" id="wizard-control-color-text" />
              </label>
              <label htmlFor="wizard-control-color-btn-bg">
                <p>Button Color</p>
                <input type="color" id="wizard-control-color-btn-bg" />
              </label>
              <label htmlFor="wizard-control-color-btn-text-clr">
                <p>Button Text Color</p>
                <input type="color" id="wizard-control-color-btn-text-clr" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
