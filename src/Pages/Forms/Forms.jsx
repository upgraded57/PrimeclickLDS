import axios from "axios";
import "./forms.css";
import { baseURL } from "./../../ApiCalls/baseUrl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Forms() {
  const { campaign_id } = useParams();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getFormData = async () => {
      await axios
        .get(`${baseURL}/campaign/form-design/BPJV/`)
        .then((res) => setFormData(res.data.design))
        .catch((err) => console.log(err));
    };

    getFormData();
  }, []);

  console.log(formData);

  const submitForm = (e) => {
    e.preventDefault();
    toast.success("Thank you. You'll be contacted");
  };
  return (
    <div className="forms">
      <form onSubmit={submitForm}>
        <h2 className="h-100">FORM TITLE</h2>
        <p>
          Form Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos, quibusdam.
        </p>

        <div className="form__body">
          <label htmlFor="fullName">
            <p>Full Name</p>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="e.g. John Doe"
              required
            />
          </label>
          <label htmlFor="email">
            <p>Email Address</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. johndoe@mail.com"
              required
            />
          </label>
          <label htmlFor="phone">
            <p>Phone Number</p>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="e.g. 08111223344"
              required
            />
          </label>
          <label htmlFor="location">
            <p>Location</p>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="e.g. Lagos, Nigeria"
              required
            />
          </label>
          <button type="submit">Contact Me</button>
        </div>
      </form>
    </div>
  );
}
