import "./formwizard.css";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "./../../Utils/AxiosInstance";
import { baseURL } from "../../ApiCalls/baseUrl";
import toast from "react-hot-toast";
import { IoClose, IoExitOutline, IoCopyOutline } from "react-icons/io5";
import { modalCode } from "../../ApiCalls/modalCode";
import { copyCodeAsInline, copyCodeAsPopup } from "../../ApiCalls/Lead/Lead";
import axios from "axios";

export default function FormEdit() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  const { campaign_id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [fullNameInput, setFullNameInput] = useState(true);
  const [emailInput, setEmailInput] = useState(true);
  const [phoneInput, setPhoneInput] = useState(true);
  const [locationInput, setLocationInput] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [inputBgColor, setInputBgColor] = useState("");
  const [btnBgColor, setBtnBgColor] = useState("");
  const [btnTextColor, setBtnTextColor] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState("");

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

  const redirectPage = formData?.redirect?.url;

  const design = {
    styles: {
      textClr: textColor,
      bodyClr: bgColor,
      btnBG: btnBgColor,
      btnTextClr: btnTextColor,
      bgClr: bgColor,
      inputBG: inputBgColor,
    },
    texts: {
      title,
      subtitle: formSubtitle,
      btnText,
    },
    fields: [
      emailInput ? "email" : "",
      fullNameInput ? "fullName" : "",
      phoneInput ? "phone" : "",
      locationInput ? "location" : "",
    ],
    redirect: {
      url: nextPageUrl || "",
    },
  };

  const editForm = async () => {
    const toastId = toast.loading("Updating form");
    await axiosInstance
      .patch(`${baseURL}/campaign/form-design/${campaign_id}/update/`, {
        design: JSON.stringify(design),
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Form edited successully", { id: toastId });
        setModalActive(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please retry", { id: toastId });
      });
  };

  const codeToCopy = modalCode(campaign_id);

  return (
    <div className="formwizard">
      <div className="formwizard-top">
        <h3 className="h-100">Edit your form</h3>
        <p className="text-body">
          Welcome {`${user.first_name} ${user.last_name}`}
        </p>
      </div>

      <div className="wizard">
        <div className="wizard-form-container">
          <div
            className="wizard-form"
            style={{
              background: bgColor ? bgColor : styles?.bodyClr || "inherit",
            }}
          >
            <h3 className="h-100" style={{ color: textColor || "inherit" }}>
              {title ? title : texts?.title || "FORM TITLE"}
            </h3>
            <p
              className="text-body"
              style={{
                marginBottom: "30px",
                textAlign: "center",
                color: textColor || "inherit",
              }}
            >
              {formSubtitle
                ? formSubtitle
                : texts?.subtitle || "Enter your contact information below"}
            </p>

            {fullNameInput && (
              <Input
                name="wizard-lastName"
                label="Full Name"
                disabled
                placeholder="e.g John Doe"
                type="text"
                textClr={textColor || "inherit"}
                bgColor={inputBgColor || "inherit"}
              />
            )}
            {emailInput && (
              <Input
                name="wizard-email"
                label="Email Address"
                disabled
                placeholder="e.g sample@mail.com"
                type="email"
                textClr={textColor || "inherit"}
                bgColor={inputBgColor || "inherit"}
              />
            )}
            {phoneInput && (
              <Input
                name="wizard-phone"
                label="Phone Number"
                disabled
                placeholder="e.g 09011223344"
                type="text"
                textClr={textColor || "inherit"}
                bgColor={inputBgColor || "inherit"}
              />
            )}
            {locationInput && (
              <Input
                name="wizard-location"
                label="Location"
                disabled
                placeholder="e.g Lagos, Nigeria"
                type="text"
                textClr={textColor || "inherit"}
                bgColor={inputBgColor || "inherit"}
              />
            )}
            <Button
              variant="solid"
              text={btnText ? btnText : texts?.btnText || "CALL ME"}
              textClr={btnTextColor ? btnTextColor : styles?.btnTextClr}
              bgColor={btnBgColor ? btnBgColor : styles?.btnBG}
            />
          </div>
          <Button variant="accent" text="UPDATE FORM" clickEvent={editForm} />

          <div className="wizard-control">
            <h5 className="h-50">Form Settings</h5>
            <div className="wizard-control-texts">
              <label htmlFor="wizard-control-title">
                <p>Form Title</p>
                <input
                  type="text"
                  defaultValue={texts?.title}
                  id="wizard-control-title"
                  onChange={(e) => setTitle(e.target.value.toUpperCase())}
                />
              </label>
              <label htmlFor="wizard-control-subtitle">
                <p>Form Subtitle</p>
                <input
                  type="text"
                  defaultValue={texts?.subtitle}
                  id="wizard-control-subtitle"
                  onChange={(e) => setFormSubtitle(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-btn-text">
                <p>Button Text</p>
                <input
                  type="text"
                  defaultValue={texts?.btnText}
                  id="wizard-control-btn-text"
                  onChange={(e) => setBtnText(e.target.value.toUpperCase())}
                />
              </label>
              <label htmlFor="wizard-control-url">
                <p>
                  Thank you page URL (User will be redirected to this URLafter
                  they fill the form)
                </p>
                <input
                  type="text"
                  id="wizard-control-url"
                  defaultValue={redirectPage || ""}
                  onChange={(e) => setNextPageUrl(e.target.value)}
                />
              </label>
            </div>

            <div className="wizard-control-checks">
              <p>Check the options below for fields to display</p>

              <label htmlFor="wizard-control-check-lastName">
                <input
                  type="checkbox"
                  id="wizard-control-check-lastName"
                  checked={
                    fullNameInput ? fullNameInput : fields?.includes("fullName")
                  }
                  onChange={(e) =>
                    e.target.checked
                      ? setFullNameInput(true)
                      : setFullNameInput(false)
                  }
                />
                <p>Full Name</p>
              </label>
              <label htmlFor="wizard-control-check-email">
                <input
                  type="checkbox"
                  id="wizard-control-check-email"
                  checked={emailInput ? emailInput : fields?.includes("email")}
                  onChange={(e) =>
                    e.target.checked
                      ? setEmailInput(true)
                      : setEmailInput(false)
                  }
                />
                <p>Email Address</p>
              </label>
              <label htmlFor="wizard-control-check-phone">
                <input
                  type="checkbox"
                  id="wizard-control-check-phone"
                  checked={phoneInput ? phoneInput : fields?.includes("phone")}
                  onChange={(e) =>
                    e.target.checked
                      ? setPhoneInput(true)
                      : setPhoneInput(false)
                  }
                />
                <p>Phone Number</p>
              </label>
              <label htmlFor="wizard-control-check-location">
                <input
                  type="checkbox"
                  id="wizard-control-check-location"
                  checked={
                    locationInput ? locationInput : fields?.includes("location")
                  }
                  onChange={(e) =>
                    e.target.checked
                      ? setLocationInput(true)
                      : setLocationInput(false)
                  }
                />
                <p>Location</p>
              </label>
            </div>

            <div className="wizard-control-colors">
              <p>Edit and customize form aesthetics with the options below </p>
              <label htmlFor="wizard-control-color-bg">
                <p>Background Color</p>
                <input
                  type="color"
                  id="wizard-control-color-bg"
                  value={styles?.bgClr || ""}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-input-bg">
                <p>Input Field Background</p>
                <input
                  type="color"
                  id="wizard-control-color-input-bg"
                  value={styles?.inputBG || ""}
                  onChange={(e) => setInputBgColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-text">
                <p>Text Color</p>
                <input
                  type="color"
                  id="wizard-control-color-text"
                  value={styles?.textClr || ""}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-btn-bg">
                <p>Button Text Color</p>
                <input
                  type="color"
                  id="wizard-control-color-btn-bg"
                  value={styles?.btnTextClr || ""}
                  onChange={(e) => setBtnTextColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-btn-text-clr">
                <p>Button Color</p>
                <input
                  type="color"
                  id="wizard-control-color-btn-text-clr"
                  value={styles?.btnBG || ""}
                  onChange={(e) => setBtnBgColor(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={modalActive ? "iframe_modal active" : "iframe_modal"}>
        <div className="iframe_modal__backdrop"></div>
        <div className="iframe_modal__content">
          {/* <div
            className="iframe_modal__close-btn"
            onClick={() => setModalActive(false)}
          >
            <IoClose />
          </div> */}
          <h3 className="h-50">View Code</h3>
          <p className="text-body">
            Copy the code below and paste into your website to display the
            contact form as a popup. Website reload required
          </p>
          <div className="iframe_modal__code">{codeToCopy}</div>
          <div className="iframe_modal__code-btns">
            <button onClick={() => copyCodeAsPopup(campaign_id)}>
              <IoCopyOutline className="copy-icon" /> Copy pop up Code
            </button>
            <button onClick={() => copyCodeAsInline(campaign_id)}>
              <IoCopyOutline className="copy-icon" /> Copy In-line form code
            </button>
            <button
              className="goto-campaign"
              onClick={() => navigate("/leads")}
            >
              <IoExitOutline className="copy-icon" />
              Go to Campaigns Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
