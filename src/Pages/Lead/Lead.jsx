import "./lead.css";
import "../Leads/leads.css";
import Card from "../../Component/Card/Card";
import Button from "../../Component/button/Button";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useFetchLeads } from "./../../ApiCalls/Lead/Lead";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import Loader from "./../../Component/Loader/Loader";
import EmptyState from "../../Component/emptyState/EmptyState";
import ShareLead from "./ShareLead";
import { exportFile } from "../../ApiCalls/exportTable";

export default function Lead() {
  const navigate = useNavigate();
  const { id: campaign_id } = useParams();
  const [shareCampaignModal, setShareCampaignModal] = useState(false);

  // fetch lead
  const [filteredLeads, setFilteredLeads] = useState([]);
  const { data: leads, isLoading } = useFetchLeads(
    campaign_id,
    setFilteredLeads
  );

  // table data pagination
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);

  const increaseCount = () => {
    if (end < filteredLeads?.length) {
      setStart((prev) => prev + 10);
      setEnd((prev) => prev + 10);
    }
  };

  const decreaseCount = () => {
    if (start > 1 && start !== 1) {
      setStart((prev) => prev - 10);
      setEnd((prev) => prev - 10);
    }
  };

  // filter values
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  // filter leads
  const filterLeads = () => {
    if (filterValue === "all") {
      setFilteredLeads(
        leads.leads.filter((lead) => {
          return lead.full_name
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        })
      );
    } else {
      setFilteredLeads(
        leads.leads.filter((lead) => {
          return (
            lead.full_name.toLowerCase().includes(searchValue.toLowerCase()) &&
            lead.contacted_status.toLowerCase() === filterValue.toLowerCase()
          );
        })
      );
    }
  };

  const convertedLeads = leads?.leads?.filter((lead) => {
    return lead.contacted_status === "Converted";
  });

  const rejectedLeads = leads?.leads?.filter((lead) => {
    return lead.contacted_status === "Rejected";
  });

  const calledLeads = leads?.leads?.filter((lead) => {
    return lead.status !== "Pending";
  });

  return (
    <div className="lead">
      {isLoading ? (
        <Loader type="spinner" />
      ) : (
        <>
          <div
            className="lead__top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="h-100">{leads?.campaign_name || "Campaign Name"}</h3>
            <div className="btn-group">
              <Button variant="back" clickEvent={() => navigate(-1)} />
            </div>
          </div>

          <div className="lead__top cards">
            <Card text="Total Leads" qty={leads?.leads?.length || "0"} />
            <Card text="Total Called" qty={calledLeads?.length || "0"} />
            <Card text="Total Qualified" qty={convertedLeads?.length || "0"} />
            <Card text="Total Rejected" qty={rejectedLeads?.length || "0"} />
          </div>
          <div className="leads__center" style={{ width: "100%" }}>
            <div className="search-filter" style={{ width: "100%" }}>
              <div className="search-filter-group">
                <div className="search-options">
                  <select onChange={(e) => setFilterValue(e.target.value)}>
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="converted">Converted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div className="search-input">
                  <input
                    type="text"
                    placeholder="Search by full name ..."
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>
              <Button variant="pill" text="Search" clickEvent={filterLeads} />

              <div className="lead__export-btn">
                <Button
                  variant="pill"
                  text="Export"
                  clickEvent={() => exportFile(leads)}
                />
                <Button
                  variant="pill"
                  text="Share"
                  clickEvent={() => setShareCampaignModal(true)}
                />
              </div>
            </div>
          </div>

          <div className="leads__table">
            <div className="leads__table-head">
              <h3 className="h-100">Lead List</h3>

              <div className="pagination">
                <p>{`${start} - ${end} of ${filteredLeads?.length || "0"}`}</p>
                <span onClick={decreaseCount}>
                  <AiOutlineLeft
                    style={{ opacity: start === 1 ? "0.5" : "1" }}
                  />
                </span>
                <span onClick={increaseCount}>
                  <AiOutlineRight
                    style={{
                      opacity: end === filteredLeads?.length ? "0.5" : 1,
                    }}
                  />
                </span>
              </div>
            </div>
            {filteredLeads?.length > 0 ? (
              <table id="lead_table">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Phone number</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads?.slice(start - 1, end).map((lead) => (
                    <tr key={lead.id}>
                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        {lead.full_name}
                      </td>
                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        {lead.email}
                      </td>
                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        {lead.phone_number}
                      </td>
                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        {moment(lead.created).format("lll")}
                      </td>
                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        <span
                          className={lead.status === "Pending" ? "" : "called"}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td onClick={() => navigate(`/leads/${lead.id}/info`)}>
                        <span
                          className={
                            lead.contacted_status === "Converted"
                              ? "converted"
                              : lead.contacted_status === "Rejected"
                              ? "rejected"
                              : ""
                          }
                        >
                          {lead.contacted_status || "NIL"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <EmptyState />
            )}
          </div>
        </>
      )}
      {shareCampaignModal && (
        <ShareLead
          setShareCampaignModal={setShareCampaignModal}
          campaign_id={leads.campaign_id}
        />
      )}
    </div>
  );
}
