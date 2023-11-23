import toast from "react-hot-toast";
import { axiosInstance } from "../../Utils/AxiosInstance";
import { baseURL } from "../baseUrl";
import { useQuery } from "react-query";

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
