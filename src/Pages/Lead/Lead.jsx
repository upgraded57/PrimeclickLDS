import "./lead.css";
import "../Leads/leads.css";
import Card from "../../Component/Card/Card";
import Button from "../../Component/button/Button";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { users } from "../../Data/data";
import {
  AiOutlineCaretDown,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import LeadTooltip from "./LeadTooltip";

export default function Lead() {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  const [tooltipActive, setTooltipActive] = useState(false);

  const increaseCount = () => {
    if (end < users.length) {
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
  return (
    <div className="lead">
      <div className="lead__top">
        <h3 className="h-100">Grapes Landing Page</h3>
      </div>

      <div className="lead__top cards">
        <Card text="Total Converted" qty="3000" />
        <Card text="Total Converted" qty="3000" />
        <Card text="Total Converted" qty="3000" />
      </div>
      <div className="leads__center">
        <div className="search-filter">
          <div className="search-filter-group">
            <div className="search-options">
              <div className="select">
                <div className="select selected">
                  <p
                    className="text-body"
                    onClick={() => setSearchOptionActive(!searchOptionActive)}
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
              <span onClick={() => setSearchOptionActive(!searchOptionActive)}>
                <AiOutlineCaretDown />
              </span>
            </div>
            <div className="search-input">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <Button variant="pill" text="Search" />

          <div className="lead__export-btn">
            <Button variant="pill" text="Export" icon={<RiArrowDownSLine />} />
          </div>
        </div>
      </div>

      <div className="leads__table">
        <div className="leads__table-head">
          <h3 className="h-100">Lead List</h3>

          <div className="pagination">
            <p>{`${start} - ${end} of ${users.length}`}</p>
            <span onClick={decreaseCount}>
              <AiOutlineLeft style={{ opacity: start === 1 ? "0.5" : "1" }} />
            </span>
            <span onClick={increaseCount}>
              <AiOutlineRight
                style={{ opacity: end === users.length ? "0.5" : 1 }}
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
            {users.slice(start, end).map((user) => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>{user.created}</td>
                <td>
                  <span
                    className={
                      user.Status === "Called"
                        ? "called"
                        : user.Status === "Converted"
                        ? "converted"
                        : "rejected"
                    }
                  >
                    {user.Status}
                  </span>
                </td>
                <td>
                  <span
                    className="tooltip"
                    onClick={() => setTooltipActive(!tooltipActive)}
                  >
                    <PiDotsThreeOutlineVerticalDuotone />
                  </span>
                  <Tooltip
                    anchorSelect=".tooltip"
                    place="bottom-end"
                    offset={20}
                    noArrow
                    clickable
                    isOpen={tooltipActive}
                    style={{
                      padding: "0",
                      background: "transparent",
                    }}
                  >
                    <LeadTooltip />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
