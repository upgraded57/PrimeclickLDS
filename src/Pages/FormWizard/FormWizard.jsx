import "./formwizard.css";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "./../../Utils/AxiosInstance";
import { baseURL } from "../../ApiCalls/baseUrl";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { modalCode } from "../../ApiCalls/modalCode";
import { copyCode } from "../../ApiCalls/Lead/Lead";

export default function FormWizard() {
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

  const inputStyle = `"background-color: ${
    inputBgColor ? inputBgColor : "inherit"
  }; width: 100%; height: 50px; padding-inline: 10px; border: 1px solid grey; border-radius: 10px;"`;

  // const form = `
  //   <section style= "background-color: ${
  //     bgColor ? bgColor : "inherit"
  //   }; display: flex; flex-direction-column; justify-content: center; align-items: center; gap: 20px; width: 100%; padding-block: 50px; padding-inline: 20px; color: ${
  //   textColor ? textColor : "inherit"
  // }; ">

  //   <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
  //   <form action = "https://jsonplaceholder.typicode.com/users/1" method = "GET" target = "dummyframe" onsubmit = "submitform()" style = "width: 100%">

  //     <h2 style = "text-align: center">
  //       ${title ? title : "CONTACT ME"}
  //     </h2>

  //     ${
  //       fullNameInput
  //         ? `<label for = "fullName">
  //       <p style = "font-family: "inherit"; font-size: "inherit"; color: ${
  //         textColor ? textColor : "inherit"
  //       };"> Full Name</p>
  //       <input type = "text" name = fullName id = fullName placeholder = "e.g. John Doe" style =${inputStyle} required/>
  //     </label>`
  //         : ""
  //     }

  //     ${
  //       emailInput
  //         ? `<label for = "email">
  //       <p style = "font-family: "inherit"; font-size: "inherit"; color: ${
  //         textColor ? textColor : "inherit"
  //       };"> Email Address</p>
  //       <input type = "email" name = email id = email placeholder = "e.g. johndoe@email.com" style =${inputStyle} required/>
  //     </label>`
  //         : ""
  //     }

  //     ${
  //       phoneInput
  //         ? `<label for = "phone">
  //       <p style = "font-family: "inherit"; font-size: "inherit"; color: ${
  //         textColor ? textColor : "inherit"
  //       };"> Phone Number</p>
  //       <input type = "text" input-mode = "numeric" name = phone id = phone placeholder = "e.g. 08011122233" style =${inputStyle} required/>
  //     </label>`
  //         : ""
  //     }

  //     ${
  //       locationInput
  //         ? `<label for = "location">
  //       <p style = "font-family: "inherit"; font-size: "inherit"; color: ${
  //         textColor ? textColor : "inherit"
  //       };"> Location</p>
  //       <input type = "text" name = location id = location placeholder = "e.g. Lagos, Nigeria" style =${inputStyle}/>
  //     </label>`
  //         : ""
  //     }

  //     <button type = submit style = "font-family: inherit; font-size: inherit; background-color: ${
  //       btnBgColor ? btnBgColor : "inherit"
  //     }; height: 50px; width: 100%; margin-top: 20px; border-radius: 10px; border: 1px solid transparent; color: ${
  //   btnTextColor ? btnTextColor : "inherit"
  // }">
  //       ${btnText ? btnText : "CONTACT ME"}
  //     </button>
  //   </form>

  //   </section>

  //   <script>
  //     function submitform(){
  //       alert("Data received. You will be contacted soon")
  //     }
  //   </script>
  //     `;

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
  };

  const createForm = async () => {
    const toastId = toast.loading("Creating form");
    await axiosInstance
      .post(`${baseURL}/campaign/${campaign_id}/form-design/`, {
        design: JSON.stringify(design),
      })
      .then((res) => {
        toast.success("Form created successully", { id: toastId });
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
        <h3 className="h-100">Customize your form</h3>
        <p className="text-body">
          Welcome {`${user.first_name} ${user.last_name}`}
        </p>
      </div>

      <div className="wizard">
        <div className="wizard-form-container">
          <div
            className="wizard-form"
            style={{ background: bgColor || "inherit" }}
          >
            <h3 className="h-100" style={{ color: textColor || "inherit" }}>
              {title || "FORM TITLE"}
            </h3>
            <p
              className="text-body"
              style={{
                marginBottom: "30px",
                textAlign: "center",
                color: textColor || "inherit",
              }}
            >
              {formSubtitle || "Enter your contact information below"}
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
              text={btnText || "CALL ME"}
              textClr={btnTextColor}
              bgColor={btnBgColor}
            />
          </div>
          <Button variant="accent" text="CREATE FORM" clickEvent={createForm} />

          <div className="wizard-control">
            <h5 className="h-50">Form Settings</h5>
            <div className="wizard-control-texts">
              <label htmlFor="wizard-control-title">
                <p>Form Title</p>
                <input
                  type="text"
                  id="wizard-control-title"
                  onChange={(e) => setTitle(e.target.value.toUpperCase())}
                />
              </label>
              <label htmlFor="wizard-control-subtitle">
                <p>Form Subtitle</p>
                <input
                  type="text"
                  id="wizard-control-subtitle"
                  onChange={(e) => setFormSubtitle(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-btn-text">
                <p>Button Text</p>
                <input
                  type="text"
                  id="wizard-control-btn-text"
                  onChange={(e) => setBtnText(e.target.value.toUpperCase())}
                />
              </label>
            </div>

            <div className="wizard-control-checks">
              <p>Check the options below for fields to display</p>

              <label htmlFor="wizard-control-check-lastName">
                <input
                  type="checkbox"
                  id="wizard-control-check-lastName"
                  checked={fullNameInput}
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
                  checked={emailInput}
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
                  checked={phoneInput}
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
                  checked={locationInput}
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
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-input-bg">
                <p>Input Field Background</p>
                <input
                  type="color"
                  id="wizard-control-color-input-bg"
                  onChange={(e) => setInputBgColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-text">
                <p>Text Color</p>
                <input
                  type="color"
                  id="wizard-control-color-text"
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-btn-bg">
                <p>Button Text Color</p>
                <input
                  type="color"
                  id="wizard-control-color-btn-bg"
                  onChange={(e) => setBtnTextColor(e.target.value)}
                />
              </label>
              <label htmlFor="wizard-control-color-btn-text-clr">
                <p>Button Color</p>
                <input
                  type="color"
                  id="wizard-control-color-btn-text-clr"
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
          <div
            className="iframe_modal__close-btn"
            onClick={() => setModalActive(false)}
          >
            <IoClose />
          </div>
          <h3 className="h-50">FORM CREATED SUCCESSFULLY</h3>
          <p className="text-body">
            Copy the code below and paste into your website to display the
            contact form. Website reload required
          </p>
          <div className="iframe_modal__code">{codeToCopy}</div>
          <Button
            variant="accent"
            text="COPY CODE"
            clickEvent={() => copyCode(campaign_id)}
          />
          <Button
            variant="solid"
            text="GO TO CAMPAIGNS PAGE"
            clickEvent={() => navigate("/leads")}
          />
        </div>
      </div>
    </div>
  );
}
