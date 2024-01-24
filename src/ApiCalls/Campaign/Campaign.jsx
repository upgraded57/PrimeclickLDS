import { baseURL } from "../baseUrl";
import toast from "react-hot-toast";
import { axiosInstance } from "./../../Utils/AxiosInstance";
import { useQuery } from "react-query";

const businessId = JSON.parse(localStorage.getItem("user")).business_id;

// create campaign
export const createCampaign = async (name, navigate) => {
  const toastId = toast.loading("Creating campaign");
  await axiosInstance({
    method: "post",
    url: `${baseURL}/campaign/create/${businessId}/`,
    data: { name },
  })
    .then((res) => {
      toast.success("Campaign name created", {
        id: toastId,
      });
      navigate(`/form/${res.data.campaign_id}/wizard`);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something went wrong. Please Retry", {
        id: toastId,
      });
    });
};

// create campaign by upload
export const uploadCampaign = async (file, navigate) => {
  const toastId = toast.loading("Uploading File...");
  const data = new FormData();
  data.append("campaign", file);
  await axiosInstance({
    method: "post",
    url: `${baseURL}/campaign/upload/${businessId}/`,
    data,
  })
    .then(() => {
      toast.success("File uploaded successfully", {
        id: toastId,
      });
      navigate("/leads");
    })
    .catch(() => {
      toast.error("Please check the file and retry", {
        id: toastId,
      });
    });
};

// fetch all campaigns
const fetchCampaigns = () => {
  return axiosInstance({
    method: "get",
    url: `${baseURL}/campaigns/list/${businessId}/`,
  });
};

export const useFetchCampaigns = (setFilteredCampaign) => {
  return useQuery(["Campaigns", businessId], fetchCampaigns, {
    select: (data) => data.data,
    onSuccess: (data) => (setFilteredCampaign ? setFilteredCampaign(data) : ""),
  });
};
