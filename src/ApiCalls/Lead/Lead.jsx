import toast from "react-hot-toast";
import { axiosInstance } from "../../Utils/AxiosInstance";
import { baseURL } from "../baseUrl";
import { useQuery } from "react-query";

const tempLeadId = "BK2O";
const campaign_id = JSON.parse(localStorage.getItem("campaign_id"));

// fetch all leads
const fetchLeads = () => {
  return axiosInstance({
    method: "get",
    url: `${baseURL}/leads/list/${campaign_id}`,
  });
};

export const useFetchLeads = () => {
  return useQuery(["leads", campaign_id], fetchLeads, {
    select: (data) => data.data,
  });
};

// export const fetchLeads = async () => {
//   await axiosInstance({
//     method: "get",
//     url: `${baseURL}/leads/list/${campaign_id}`,
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

// create new lead
export const createLead = async (data, navigate) => {
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
      navigate("/leads");
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", {
        id: toastId,
      });
      console.log(err);
    });
};
