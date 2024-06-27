import { useState } from "react";
import "./settings.css";
import { IoClose } from "react-icons/io5";
import Button from "./../../Component/button/Button";
import toast from "react-hot-toast";

export default function InviteUserModal({ setInviteUserModal }) {
  const [inviteesCount, setInviteesCount] = useState(["1"]);

  const addInviteField = () => {
    setInviteesCount((prev) => [...prev, "1"]);
  };
  const sendUserInvites = (e) => {
    e.preventDefault();
    const invitees = Object.fromEntries(new FormData(e.target));
    toast.success("Invites will be sent");
    setInviteUserModal(false);
  };
  return (
    <div className="inviteUserModal">
      <div className="box">
        <div className="header">
          <h3 className="h-50">Add a new user</h3>
          <IoClose className="icon" onClick={() => setInviteUserModal(false)} />
        </div>

        <form onSubmit={sendUserInvites}>
          {inviteesCount.map((_, idx) => (
            <div key={idx} className="form_field">
              <label htmlFor={`email${idx}`}>
                <p className="text-sm">Email</p>
                <input
                  type="email"
                  id={`email${idx}`}
                  name={`email${idx}`}
                  required
                />
              </label>

              <label htmlFor={`role${idx}`}>
                <p className="text-sm">Role</p>
                <select name={`role${idx}`} id={`role${idx}`} required>
                  <option value="">Select Role</option>
                  <option value="superAdmin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="viewer">Viewer</option>
                </select>
              </label>
            </div>
          ))}
          <div className="btns">
            <Button
              variant="ghost"
              text="Add New Field"
              clickEvent={addInviteField}
            />
            <Button type="submit" variant="solid" text="Send Invites" />
          </div>
        </form>
      </div>
    </div>
  );
}
