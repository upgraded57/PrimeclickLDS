import axios from "axios";
import "./forms.css";
import { baseURL } from "./../../ApiCalls/baseUrl";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

export default function Forms() {
  const { campaign_id } = useParams();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getFormData = async () => {
      await axios
        .get(`${baseURL}/campaign/form-design/${campaign_id}/`)
        .then((res) => setFormData(JSON.parse(res.data.design)))
        .catch((err) => console.log(err));
    };

    getFormData();
  }, []);

  const texts = formData?.texts;
  const styles = formData?.styles;

  const fields = formData?.fields;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    if (fullName.length < 1 || email.length < 1 || phone.length < 1) {
      return toast.error("Please fill the required fields");
    }

    // const formattedPhone = () => {
    //   if(phone.split[0] === "+"){

    //   }
    // }

    const userData = {
      full_name: fullName,
      email,
      phone_number: phone,
    };

    const toastId = toast.loading("Collecting your contact data");
    await axios({
      method: "post",
      url: `${baseURL}/lead/create/${campaign_id}/`,
      data: userData,
    })
      .then((res) => {
        console.log(res.data);
        toast.success("You will be contacted within five minutes", {
          id: toastId,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
        console.log(err);
      });
  };

  return (
    <div
      className="forms"
      style={{ backgroundColor: styles?.bgClr || "inherit" }}
    >
      <div className="form-close-msg">
        <p>*Click outside to close form</p>
      </div>
      <form onSubmit={submitForm} id="form">
        <h2 className="h-100" style={{ color: styles?.textClr || "inherit" }}>
          {texts?.title}
        </h2>
        <p style={{ color: styles?.textClr || "inherit" }}>{texts?.subtitle}</p>

        <div className="form__body">
          {fields?.includes("fullName") && (
            <label htmlFor="fullName">
              <p style={{ color: styles?.textClr || "inherit" }}>Full Name</p>
              <input
                style={{ backgroundColor: styles?.inputBG || "inherit" }}
                type="text"
                name="fullName"
                id="fullName"
                placeholder="e.g. John Doe"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          )}

          {fields?.includes("email") && (
            <label htmlFor="email">
              <p style={{ color: styles?.textClr || "inherit" }}>
                Email Address
              </p>
              <input
                style={{ backgroundColor: styles?.inputBG || "inherit" }}
                type="email"
                name="email"
                id="email"
                placeholder="e.g. johndoe@mail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          )}
          {fields?.includes("phone") && (
            <label htmlFor="phone">
              <p style={{ color: styles?.textClr || "inherit" }}>
                Phone Number
              </p>
              <input
                style={{ backgroundColor: styles?.inputBG || "inherit" }}
                type="text"
                name="phone"
                id="phone"
                placeholder="e.g. 08111223344"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          )}
          {fields?.includes("location") && (
            <label htmlFor="location">
              <p style={{ color: styles?.textClr || "inherit" }}>Location</p>
              <input
                style={{ backgroundColor: styles?.inputBG || "inherit" }}
                type="text"
                name="location"
                id="location"
                placeholder="e.g. Lagos, Nigeria"
                required
              />
            </label>
          )}
          <button
            id="submitBtn"
            type="submit"
            style={{
              backgroundColor: styles?.btnBG || "var(--pry-clr)",
              color: styles?.btnTextClr || "white",
            }}
          >
            {texts?.btnText || "Contact Me"}
          </button>
        </div>
      </form>
    </div>
  );
}
