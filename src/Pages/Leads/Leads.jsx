import "./leads.css";
import Button from "../../Component/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  launchCampaign,
  useFetchCampaigns,
} from "../../ApiCalls/Campaign/Campaign";
import moment from "moment";
import Loader from "./../../Component/Loader/Loader";
import emptyTable from "../../assets/images/empty-table.png";

export default function Leads() {
  const navigate = useNavigate();

  // fetch all campaigns
  const [filteredCampaign, setFilteredCampaign] = useState([]);
  const {
    data: campaigns,
    isLoading,
    isFetching,
  } = useFetchCampaigns(setFilteredCampaign);

  // filter values
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  // filter campaigns
  const filterCampaigns = () => {
    if (filterValue === "all") {
      setFilteredCampaign(
        campaigns?.filter((campaign) =>
          campaign.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredCampaign(
        campaigns?.filter(
          (campaign) =>
            campaign.title.toLowerCase().includes(searchValue.toLowerCase()) &&
            campaign.type_of.toLowerCase() === filterValue.toLowerCase()
        )
      );
    }
  };

  return (
    <div className="leads">
      {isLoading || isFetching ? (
        <Loader type="spinner" />
      ) : (
        <>
          <div className="leads__top">
            <div className="title">
              <span>
                <h3 className="h-100">Campaigns</h3>
                <p className="text-body">All your campaigns in one place</p>
              </span>
              <Button
                variant="pill"
                icon={<AiOutlinePlus />}
                text="Add Campaign"
                clickEvent={() => navigate("/new")}
              />
            </div>
            {/* <div className="cards">
              <Card qty={campaigns?.length} text="Total Campaigns" />
            </div> */}
          </div>
          <div className="leads__table" style={{ marginTop: "50px" }}>
            <div className="leads__center">
              <div className="sort">
                <p className="text-body" style={{ whiteSpace: "nowrap" }}>
                  Filter by:
                </p>
                <select onChange={(e) => setSortValue(e.target.value)}>
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="search-filter">
                <div className="search-filter-group">
                  <div className="search-options">
                    <select onChange={(e) => setFilterValue(e.target.value)}>
                      <option value="all">All Types</option>
                      <option value="direct">Direct</option>
                      <option value="upload">Upload</option>
                    </select>
                  </div>
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Search by lead title ..."
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  variant="pill"
                  text="Search"
                  clickEvent={filterCampaigns}
                />
              </div>
            </div>
            {filteredCampaign?.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Leads</th>
                    <th>Created date/time</th>
                    <th>Contacted</th>
                    <th>Type</th>
                    <th>Converted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCampaign?.map((campaign) => (
                    <tr key={campaign.id}>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.id}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.title}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.leads}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {moment(campaign.created).format("lll")}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.contacted || "N/A"}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.type_of}
                      </td>
                      <td onClick={() => navigate(`/leads/${campaign.id}`)}>
                        {campaign.converted || "N/A"}
                      </td>
                      <td>
                        <button onClick={() => launchCampaign(campaign.id)}>
                          Launch Campaign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              // empty state
              <div className="empty">
                <img src={emptyTable} alt="empty table state" />
                <p className="text-body">
                  Nothing here yet! <Link to="/new">Click here</Link> to Add
                  Leads and get started
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
