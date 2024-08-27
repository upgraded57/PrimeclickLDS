import "./lead.css";
import Input from "./../../Component/Input/Input";
import Button from "./../../Component/button/Button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../Utils/AxiosInstance";

export default function ShareLead({ setShareCampaignModal, campaign_id }) {
  const [guestEmail, setGuestEmail] = useState("");

  const sendGuestInvite = async (e) => {
    e.preventDefault();
    const inviteData = { campaign_id, email: guestEmail };
    const toastId = toast.loading("Sending invite...");
    await axiosInstance
      .post("/collect-email/", inviteData)
      .then(() => {
        toast.success("Invite link sent successfully", { id: toastId });
        setShareCampaignModal(false);
      })
      .catch((err) => {
        toast.error("Something went wrong. Please retry!", { id: toastId });
      });
  };
  return (
    <div className="shareleads">
      <div
        className="shareleads_overlay"
        onClick={() => setShareCampaignModal(false)}
      ></div>
      <div className="shareleads_content">
        <h3 className="h-50">Invite user to view this campaign</h3>
        <p>
          Enter the email address of who you wish to invite as viewer to this
          campaign. They will not be able to modify or alter the progress of the
          campaign.
        </p>

        <form className="shareleads_form" onSubmit={sendGuestInvite}>
          <Input
            name="guest"
            label="Email address of user"
            placeholder="Enter the email address of the recipient user"
            type="email"
            required
            setValue={setGuestEmail}
          />
          <Button type="submit" text="Invite User" variant="solid" />
        </form>
      </div>
    </div>
  );
}
