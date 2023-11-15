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
      localStorage.setItem("campaign_id", JSON.stringify(res.data.campaign_id));
      navigate("/temp-form");
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something went wrong. Please Retry", {
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

export const useFetchCampaigns = () => {
  return useQuery(["Campaigns", businessId], fetchCampaigns, {
    select: (data) => data.data,
  });
};
