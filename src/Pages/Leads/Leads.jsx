import "./leads.css";
import Card from "../../Component/Card/Card";
import Button from "../../Component/button/Button";
import { AiOutlinePlus, AiOutlineCaretDown } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchCampaigns } from "../../ApiCalls/Campaign/Campaign";
import moment from "moment";
import Loader from "./../../Component/Loader/Loader";

export default function Leads() {
  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState("All");
  const [filterOptionActive, setFilterOptionActive] = useState(false);
  const pickFilterOption = (e) => {
    setFilterOption(e.target.dataset.value);
    setFilterOptionActive(false);
  };

  const [searchOption, setSearchOption] = useState("");
  const [searchOptionActive, setSearchOptionActive] = useState(false);
  const pickSearchOption = (e) => {
    setSearchOption(e.target.dataset.value);
    setSearchOptionActive(false);
  };

  // fetch all campaigns
  const { data: campaigns, isLoading } = useFetchCampaigns();

  return (
    <div className="leads">
      {isLoading ? (
        <Loader type="spinner" />
      ) : (
        <>
          <div className="leads__top">
            <div className="title">
              <h3 className="h-100">Campaigns</h3>
              <Button
                variant="pill"
                icon={<AiOutlinePlus />}
                text="Add Campaign"
                clickEvent={() => navigate("/new")}
              />
            </div>
            <div className="cards">
              <Card qty={campaigns?.length} text="Total Campaigns" />
            </div>
          </div>
          <div className="leads__center">
            <div className="sort">
              <p className="text-body" style={{ whiteSpace: "nowrap" }}>
                Sort by:
              </p>
              <div className="sort-select">
                <div className="select">
                  <div className="select selected">
                    <p
                      className="text-body"
                      onClick={() => setFilterOptionActive(!filterOptionActive)}
                    >
                      {filterOption === "" ? "All" : filterOption}
                    </p>
                  </div>
                  {filterOptionActive && (
                    <div className="select options">
                      <p
                        className="text-body"
                        data-value="All"
                        onClick={(e) => pickFilterOption(e)}
                      >
                        All
                      </p>
                      <p
                        className="text-body"
                        data-value="Contacted"
                        onClick={(e) => pickFilterOption(e)}
                      >
                        Contacted
                      </p>
                      <p
                        className="text-body"
                        data-value="Converted"
                        onClick={(e) => pickFilterOption(e)}
                      >
                        Converted
                      </p>
                      <p
                        className="text-body"
                        data-value="Rejected"
                        onClick={(e) => pickFilterOption(e)}
                      >
                        Rejected
                      </p>
                    </div>
                  )}
                </div>
                <span>
                  <CgSortAz />
                </span>
              </div>
            </div>
            <div className="search-filter">
              <div className="search-filter-group">
                <div className="search-options">
                  <div className="select">
                    <div className="select selected">
                      <p
                        className="text-body"
                        onClick={() =>
                          setSearchOptionActive(!searchOptionActive)
                        }
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {searchOption === "" ? "Search Option" : searchOption}
                      </p>
                    </div>
                    {searchOptionActive && (
                      <div className="select options">
                        <p
                          className="text-body"
                          data-value="Option One"
                          onClick={(e) => pickSearchOption(e)}
                        >
                          Option One
                        </p>
                        <p
                          className="text-body"
                          data-value="Option Two"
                          onClick={(e) => pickSearchOption(e)}
                        >
                          Option Two
                        </p>
                        <p
                          className="text-body"
                          data-value="Option Three"
                          onClick={(e) => pickSearchOption(e)}
                        >
                          Option Three
                        </p>
                        <p
                          className="text-body"
                          data-value="Option Four"
                          onClick={(e) => pickSearchOption(e)}
                        >
                          Option Four
                        </p>
                      </div>
                    )}
                  </div>
                  <span
                    onClick={() => setSearchOptionActive(!searchOptionActive)}
                  >
                    <AiOutlineCaretDown />
                  </span>
                </div>
                <div className="search-input">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <Button variant="pill" text="Search" />
            </div>
          </div>
          <div className="leads__table">
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
                {campaigns?.map((campaign) => (
                  <tr key={campaign.id}>
                    <td>{campaign.id}</td>
                    <td>{campaign.title}</td>
                    <td>{campaign.leads}</td>
                    <td>{moment(campaign.created).format("lll")}</td>
                    <td>{campaign.contacted || "N/A"}</td>
                    <td>{campaign.type_of}</td>
                    <td>{campaign.converted || "N/A"}</td>
                    <td>
                      <button onClick={() => navigate(`/leads/${campaign.id}`)}>
                        View more
                      </button>
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
