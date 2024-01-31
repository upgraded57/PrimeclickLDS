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
    .then((res) => {
      toast.success("File uploaded successfully", {
        id: toastId,
      });
      navigate(`/new/${res.data.campaign_id}/follow-up-method`);
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

// set campaign follow up method
export const chooseFollowUpOption = async (
  campaign_id,
  followUpOption,
  navigate
) => {
  const toastId = toast.loading("Setting up follow up option");
  // contact_option: call | sms
  await axiosInstance
    .put(`${baseURL}/campaign/add/contact/${campaign_id}/`, {
      contact_option: followUpOption,
    })
    .then((res) => {
      toast.success("Follow up method set", { id: toastId });
      navigate(`/new/${campaign_id}/follow-up-method/call`);
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", { id: toastId });
      console.log(err);
    });
};

// add audio files to campaign with calls follow up method
export const addCampaignAudios = async (audios, campaign_id, navigate) => {
  const toastId = toast.loading("Assigning audios to call");

  await axiosInstance
    .put(`campaign/call/create/${campaign_id}/`, {
      audio_link_1: audios[0],
      audio_link_2: audios[1],
      audio_link_3: audios[2],
    })
    .then((res) => {
      toast.success("Audios assigned to calls", { id: toastId });
      navigate("/leads");
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", { id: toastId });
      console.log(err);
    });
};

// launch campaign
export const launchCampaign = async (campaign_id) => {
  const toastId = toast.loading("Launching Campaigns");

  await axiosInstance
    .post(`${baseURL}/campaign/call/launch/${campaign_id}/`)
    .then((res) => {
      toast.success("Campaign Started", { id: toastId });
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", { id: toastId });
      console.log(err);
    });
};
