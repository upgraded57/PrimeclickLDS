import "./formwizard.css";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { useState } from "react";

import { LuSettings2 } from "react-icons/lu";

export default function FormWizard() {
  const [formTitle, setFormTitle] = useState("Your form header");
  const [btnText, setBtnText] = useState("Your button text");
  const [formBG, setFormBg] = useState("");
  const [textClr, setTextClr] = useState("");
  const [inputBGColor, setInputBGColor] = useState("");
  const [settingsActive, setSettingsActive] = useState(false);
  const [btnBG, setBtnBG] = useState("");
  const [btnTxtClr, setBtnTxtClr] = useState("");

  return (
    <div className="FormWizard">
      <h2 className="h-200">Customize your form</h2>
      <div className="formspace" style={{ backgroundColor: formBG }}>
        <h3 className="h-100" style={{ color: textClr }}>
          {formTitle.length > 0 ? formTitle : "Your Form Title"}
        </h3>
        <div className="formInputs">
          <Input
            type="text"
            label="First Name"
            placeholder="e.g. John"
            name="firstName"
            textClr={textClr}
            bgColor={inputBGColor}
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="e.g. Doe"
            name="lastName"
            textClr={textClr}
            bgColor={inputBGColor}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="e.g. sample@mail.com"
            name="email"
            textClr={textClr}
            bgColor={inputBGColor}
          />
          <Input
            type="text"
            label="Phone Number"
            placeholder="e.g. 08012345678"
            name="phone"
            textClr={textClr}
            bgColor={inputBGColor}
          />
          <Input
            type="text"
            label="Location"
            placeholder="e.g. Lagos, Nigeria"
            name="location"
            textClr={textClr}
            bgColor={inputBGColor}
          />
          <Button
            type="button"
            text={btnText.length > 0 ? btnText : "Your button text"}
            variant="accent"
            bgColor={btnBG}
            textClr={btnTxtClr}
          />
        </div>
      </div>

      <div className={settingsActive ? "formSettings active" : "formSettings"}>
        <Input
          type="text"
          name="setting_title"
          label="Form Title"
          placeholder="Enter your form title here"
          setValue={setFormTitle}
        />

        <Input
          type="text"
          name="setting_btn-text"
          label="Button Text"
          placeholder="Enter your button text"
          setValue={setBtnText}
        />

        <div className="formSettings_checkboxes">
          <p className="text-body text-bold">
            Check the options for fields to display
          </p>
          <label htmlFor="settings_firstName">
            <input type="checkbox" id="settings_firstName" />
            <p className="text-body">First Name</p>
          </label>
          <label htmlFor="settings_lastName">
            <input type="checkbox" id="settings_lastName" />
            <p className="text-body">Last Name</p>
          </label>
          <label htmlFor="settings_email">
            <input type="checkbox" id="settings_email" />
            <p className="text-body">Email Address</p>
          </label>
          <label htmlFor="settings_phone">
            <input type="checkbox" id="settings_phone" />
            <p className="text-body">Phone Number</p>
          </label>
          <label htmlFor="settings_location">
            <input type="checkbox" id="settings_location" />
            <p className="text-body">Location</p>
          </label>

          <label htmlFor="settings_bg">
            <p className="text-body">Background Color:</p>
            <input
              type="color"
              id="settings_bg"
              onChange={(e) => setFormBg(e.target.value)}
            />
          </label>

          <label htmlFor="input_bg">
            <p className="text-body">Input Field Background:</p>
            <input
              type="color"
              id="input_bg"
              onChange={(e) => setInputBGColor(e.target.value)}
            />
          </label>

          <label htmlFor="text_clr">
            <p className="text-body">Text Color</p>
            <input
              type="color"
              id="text_clr"
              onChange={(e) => setTextClr(e.target.value)}
            />
          </label>

          <label htmlFor="settings_btn-clr">
            <p className="text-body">Button Background Color:</p>
            <input
              type="color"
              id="settings_btn-clr"
              onChange={(e) => setBtnBG(e.target.value)}
            />
          </label>

          <label htmlFor="settings_btn-clr">
            <p className="text-body">Button Text Color:</p>
            <input
              type="color"
              id="settings_btn-clr"
              onChange={(e) => setBtnTxtClr(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="save-btn" style={{ width: "50%", marginInline: "auto" }}>
        <Button variant="solid" text="Save form" />
      </div>

      <div
        className="toggleSettingsTab"
        onClick={() => setSettingsActive((prev) => !prev)}
      >
        <LuSettings2 />
      </div>
    </div>
  );
}
