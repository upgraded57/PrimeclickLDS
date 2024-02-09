import "./lead.css";
import "../Leads/leads.css";
import Card from "../../Component/Card/Card";
import Button from "../../Component/button/Button";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useFetchLeads } from "./../../ApiCalls/Lead/Lead";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import Loader from "./../../Component/Loader/Loader";

export default function Lead() {
  const navigate = useNavigate();
  const { id: campaign_id } = useParams();

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
        leads.leads.filter((lead) =>
          lead.full_name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredLeads(
        leads.leads.filter(
          (lead) =>
            lead.full_name.toLowerCase().includes(searchValue.toLowerCase()) &&
            lead.status.toLowerCase() === filterValue.toLowerCase()
        )
      );
    }
  };

  const pendingLeads = leads?.leads?.filter((lead) => {
    return lead.status === "Pending";
  });

  const convertedLeads = leads?.leads?.filter((lead) => {
    return lead.status === "Converted";
  });

  const rejectedLeads = leads?.leads?.filter((lead) => {
    return lead.status === "Rejected";
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
            <h3 className="h-100">{leads?.campaign_name}</h3>
            <div className="btn-group">
              <Button variant="back" clickEvent={() => navigate(-1)} />
            </div>
          </div>

          <div className="lead__top cards">
            <Card text="Total Leads" qty={leads?.leads?.length} />
            <Card text="Total Converted" qty={convertedLeads.length} />
            <Card text="Total Rejected" qty={rejectedLeads.length} />
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
                  icon={<RiArrowDownSLine />}
                />
              </div>
            </div>
          </div>

          <div className="leads__table">
            <div className="leads__table-head">
              <h3 className="h-100">Lead List</h3>

              <div className="pagination">
                <p>{`${start} - ${end} of ${filteredLeads?.length}`}</p>
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
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Phone number</th>
                  <th>Created Date</th>
                  <th>Status</th>
                  <th>Actions</th>
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
                        className={
                          lead.status === "Pending"
                            ? "called"
                            : lead.status === "Converted"
                            ? "converted"
                            : "rejected"
                        }
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <span className="tooltip lead-delete-icon">
                        <IoTrashOutline />
                      </span>
                      {/* <Tooltip
                        id={lead.id}
                        place="bottom-end"
                        offset={20}
                        noArrow
                        clickable
                        openOnClick
                        globalCloseEvents="clickOutsideAnchor"
                        style={{
                          padding: "0",
                          background: "transparent",
                        }}
                      >
                        <LeadTooltip id={lead.id} />
                      </Tooltip> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
