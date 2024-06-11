import "./settings.css";

// Components
import CustomTextBody from "./CustomTextBody";
import RolesAndPermissions from "./RolesAndPermissions";
import AudioUpload from "./AudioUpload";
import ContactForm from "./ContactForm";
import { useState } from "react";

export default function Settings() {
  const [currentTab, setCurrentTab] = useState("roles");
  const activateTab = () => {
    if (currentTab === "roles") return RolesAndPermissions;

    if (currentTab === "upload") return AudioUpload;

    if (currentTab === "contact") return ContactForm;

    if (currentTab === "text") return CustomTextBody;
  };

  const ActiveTab = activateTab();

  const settingsTabs = [
    {
      title: "Custom text body",
      path: "text",
    },
    {
      title: "Upload Audio Recording",
      path: "upload",
    },
    {
      title: "Contact Form",
      path: "contact",
    },
    {
      title: "Roles And Permissions",
      path: "roles",
    },
  ];

  return (
    <div className="settings">
      <div className="settings_top">
        <span>
          <h3 className="h-100">Settings</h3>
          <p className="text-body">Customize platform to suit your needs</p>
        </span>
      </div>

      <div className="settings_tab">
        {settingsTabs.map((tab, idx) => (
          <div
            key={idx}
            className={`tab ${tab.path === currentTab && "active"}`}
            onClick={() => setCurrentTab(tab.path)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <ActiveTab />
    </div>
  );
}
