import "./formsetup.css";
import Topbar from "./../../Component/Topbar/Topbar";
import { useState } from "react";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Modal from "./../../Component/Modal/Modal";

export default function FormSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState("1");
  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");
  const [nameChecked, setNameChecked] = useState(false);
  const [titleChecked, setTitleChecked] = useState(false);
  const [btnChecked, setBtnChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const submitEntries = () => {
    setStep("2");
    console.log(title, btnText);
  };

  const navigateBack = () => {
    step === "2" ? setStep("1") : navigate(-1);
  };

  const [modal, setModal] = useState(false);
  const generateForm = () => {
    setModal(true);
  };
  return (
    <>
      <Topbar />
      <div className="back-btn" onClick={navigateBack}>
        <span>
          <AiOutlineLeft />
        </span>
        <p>Back</p>
      </div>
      <div className="formsetup">
        {step === "1" && (
          <div className="formsetup-center">
            <h3 className="h-100">
              Choose your form options for your form input
            </h3>
            <div className="formsetup-box">
              <label>
                <Input
                  name="title"
                  label="Form Title"
                  placeholder="example"
                  type="text"
                  setValue={setTitle}
                />
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => setTitleChecked((prev) => !prev)}
                />
              </label>

              <label htmlFor="fullname">
                <p className="text-body">Full Name</p>
                <input
                  type="checkbox"
                  id="fullname"
                  onChange={() => setNameChecked((prev) => !prev)}
                />
              </label>

              <label htmlFor="email">
                <p className="text-body">Email</p>
                <input
                  type="checkbox"
                  id="email"
                  onChange={() => setEmailChecked((prev) => !prev)}
                />
              </label>

              <label htmlFor="phone">
                <p className="text-body">Phone Number</p>
                <input
                  type="checkbox"
                  id="phone"
                  onChange={() => setPhoneChecked((prev) => !prev)}
                />
              </label>

              <label htmlFor="location">
                <p className="text-body">Location</p>
                <input
                  type="checkbox"
                  id="location"
                  onClick={() => setLocationChecked((prev) => !prev)}
                />
              </label>
              <label>
                <Input
                  name="btnText"
                  label="Button Title"
                  placeholder="example"
                  type="text"
                  setValue={setBtnText}
                />
                <input
                  type="checkbox"
                  onChange={() => setBtnChecked((prev) => !prev)}
                />
              </label>
              <Button
                variant="solid"
                type="button"
                text="Continue"
                clickEvent={submitEntries}
              />
            </div>
          </div>
        )}

        {step === "2" && (
          <div className="formsetup-center">
            <h3 className="h-100">View the created form</h3>
            <div className="formsetup-box">
              {titleChecked && <h3 style={{ textAlign: "center" }}>{title}</h3>}

              {nameChecked && (
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="example"
                  type="text"
                  setValue={setFirstName}
                />
              )}

              {nameChecked && (
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="example"
                  type="text"
                  setValue={setLastName}
                />
              )}

              {emailChecked && (
                <Input
                  name="email"
                  label="Email Address"
                  placeholder="example"
                  type="email"
                  setValue={setEmail}
                />
              )}

              {phoneChecked && (
                <Input
                  name="phone"
                  label="Phone Number"
                  placeholder="example"
                  type="text"
                  setValue={setPhone}
                />
              )}

              {locationChecked && (
                <Input
                  name="location"
                  label="Location"
                  placeholder="example"
                  type="text"
                  setValue={setLocation}
                />
              )}

              {btnChecked && (
                <Button variant="accent" type="button" text={btnText} />
              )}
            </div>
            <Button
              variant="solid"
              type="button"
              text="Continue"
              clickEvent={generateForm}
            />
          </div>
        )}
      </div>
      {modal && (
        <Modal
          header="Form created successfully"
          text="The form has been created successully"
          btnText="Go to dashboard"
          btnLocation="/dashboard"
          setState={setModal}
        />
      )}
    </>
  );
}
