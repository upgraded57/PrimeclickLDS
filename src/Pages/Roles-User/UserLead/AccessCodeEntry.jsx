import { useEffect } from "react";
import "./userlead.css";
import Button from "../../../Component/button/Button";
import Input from "./../../../Component/Input/Input";
import axios from "axios";
import { baseURL } from "../../../ApiCalls/baseUrl";
import toast from "react-hot-toast";

export default function AccessCodeEntry({
  setAccessCodeEntryModal,
  accessCode,
  setAccessCode,
  campaign_id,
  setFilteredLeads,
  setLeads,
}) {
  // useEffect(() => {
  //   setLeads(leads);
  // }, [leads]);

  const verifyAccessCode = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Verifying access code...");
    await axios
      .get(`${baseURL}/dashboard/${campaign_id}/${accessCode}`)
      .then((res) => {
        toast.success("Access code verified", { id: toastId });
        setLeads(res.data);
        setFilteredLeads(res.data.leads);
        sessionStorage.setItem("guestVerified", "true");
        sessionStorage.setItem("access_code", JSON.stringify(accessCode));
        setAccessCodeEntryModal(false);
      })
      .catch((err) => {
        if (err.response.status && err.response.status === 401) {
          return toast.error("Access denied. Access code invalid", {
            id: toastId,
          });
        }
        toast.error("Something went wrong", { id: toastId });
        console.log(err);
      });
  };
  return (
    <div className="modal">
      <div className="modal__backdrop"></div>
      <div className="modal__box">
        <h2 className="h-200">Enter Access Code</h2>
        <p className="text-body">
          Enter the access code that was sent to your mail
        </p>
        <form onSubmit={verifyAccessCode}>
          <Input setValue={setAccessCode} required />
          <Button variant="solid" type="submit" text="Verify Access Code" />
        </form>
      </div>
    </div>
  );
}
