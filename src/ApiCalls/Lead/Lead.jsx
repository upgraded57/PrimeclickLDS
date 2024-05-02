import toast from "react-hot-toast";
import { axiosInstance } from "../../Utils/AxiosInstance";
import { baseURL } from "../baseUrl";
import { useQuery } from "react-query";
import { inlineCode, modalCode } from "../modalCode";

// const new_campaign_id = JSON.parse(localStorage.getItem("campaign_id"));

// fetch all leads
const fetchLeads = (campaign_id) => {
  return axiosInstance({
    method: "get",
    url: `${baseURL}/leads/list/${campaign_id}`,
  });
};

export const useFetchLeads = (campaign_id, setFilteredLeads) => {
  return useQuery(["leads", campaign_id], () => fetchLeads(campaign_id), {
    select: (data) => data.data,
    onSuccess: (data) => setFilteredLeads(data.leads),
  });
};

// create new lead
export const createLead = async (data, campaign_id, navigate) => {
  const toastId = toast.loading("Creating lead...");
  await axiosInstance({
    method: "post",
    url: `${baseURL}/lead/create/${campaign_id}/`,
    data,
  })
    .then((res) => {
      toast.success(res.data.message, {
        id: toastId,
      });
      navigate(`/leads/${campaign_id}`);
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", {
        id: toastId,
      });
      console.log(err);
    });
};

// fetch lead info
const fetchLeadInfo = (lead_id) => {
  return axiosInstance({
    url: `/leads/detail/${lead_id}/`,
  });
};

export const useFetchLeadInfo = (lead_id) => {
  return useQuery(["leadInfo", lead_id], () => fetchLeadInfo(lead_id), {
    select: (data) => data.data,
  });
};

// copy lead form code
export const copyCodeAsPopup = (campaign_id) => {
  const code = modalCode(campaign_id);
  navigator.clipboard
    .writeText(code)
    .then(() => {
      toast.success("Code copied to clipboard");
    })
    .catch(() => toast.error("Something went wrong. Unable to copy code"));
};

// copy lead form code
export const copyCodeAsInline = (campaign_id) => {
  const code = inlineCode(campaign_id);
  navigator.clipboard
    .writeText(code)
    .then(() => {
      toast.success("Code copied to clipboard");
    })
    .catch(() => toast.error("Something went wrong. Unable to copy code"));
};
