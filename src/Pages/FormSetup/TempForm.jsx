import React, { useState } from "react";
import "./formsetup.css";
import Input from "../../Component/Input/Input";
import Button from "../../Component/button/Button";
import { createLead } from "./../../ApiCalls/Lead/Lead";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function TempForm() {
  const navigate = useNavigate();
  const { campaign_id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const create = () => {
    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      email.length < 1 ||
      phone.length < 1
    ) {
      toast.error("One or more required field is empty");
      return;
    }
    const data = {
      full_name: `${firstName} ${lastName}`,
      email,
      phone_number: phone,
    };

    createLead(data, campaign_id, navigate);
  };

  return (
    <div
      className="formsetup-center"
      style={{ margin: "auto", marginTop: "10vh" }}
    >
      <div className="formsetup-box">
        <h3 style={{ textAlign: "center" }}>Sample form title</h3>
        <Input
          name="firstName"
          label="First Name"
          placeholder="example"
          type="text"
          setValue={setFirstName}
        />
        <Input
          name="lastName"
          label="Last Name"
          placeholder="example"
          type="text"
          setValue={setLastName}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="example"
          type="email"
          setValue={setEmail}
        />
        <Input
          name="phone"
          label="Phone Number"
          placeholder="example"
          type="text"
          setValue={setPhone}
        />
        <Input
          name="location"
          label="Location"
          placeholder="example"
          type="text"
          setValue={setLocation}
        />
        <Button
          variant="accent"
          type="button"
          text="Continue"
          clickEvent={create}
        />
      </div>
    </div>
  );
}
