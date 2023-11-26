import "./reports.css";
import "../Dashboard/dashboard.css";
import Card from "../../Component/Card/Card";
import LeadTooltip from "../Lead/LeadTooltip";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { users } from "../../Data/data";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

import pieImg from "../../assets/images/pie.png";
import lineImg from "../../assets/images/line.png";

export default function Reports() {
  const navigate = useNavigate();

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
  return (
    <div className="reports">
      <h3 className="h-100">Reports</h3>
      <p className="text-body">Analyze your campaigns performance</p>

      <div className="dashboard-summary" style={{ marginTop: "50px" }}>
        <div className="dashboard-summary__top">
          <p className="text-body text-bold">Summary</p>

          <select>
            <option value="month">Monthly</option>
            <option value="week">Weekly</option>
            <option value="day">Daily</option>
            <option value="year">Yearly</option>
          </select>
        </div>

        <div className="dashboard-summary__card">
          <Card text="Total Leads Reached" qty="3000" />
          <Card text="Total Positive" qty="3000" />
          <Card text="Total Negative" qty="3000" />
          <Card text="Lost Leads" qty="3000" />
        </div>
      </div>

      <div className="report__cards">
        <div className="report__card">
          <div className="report__card-top">
            <p className="text-body text-bold">Response Rate</p>

            <div className="report__card-top-sort">
              <p className="text-body">Sort By: </p>
              <select>
                <option value="all">All</option>
                <option value="quick">Quick</option>
                <option value="slow">Slow</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="report__card-body">
            <div className="pie">
              <img src={pieImg} alt="" />
            </div>
            <div className="legends">
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Converted</p>
                </span>
                <p className="text-body">20%</p>
              </div>
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Contacted</p>
                </span>
                <p className="text-body">50%</p>
              </div>
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Rejected</p>
                </span>
                <p className="text-body">30%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="report__card">
          <div className="report__card-top">
            <p className="text-body text-bold">Platform Engagements</p>
            <div className="report__card-top-sort">
              <p className="text-body">Sort By: </p>
              <select>
                <option value="all">All</option>
                <option value="quick">Quick</option>
                <option value="slow">Slow</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="report__card-body">
            <div className="pie">
              <img src={pieImg} alt="" />
            </div>
            <div className="legends">
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Call</p>
                </span>
                <p className="text-body">20%</p>
              </div>
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Email</p>
                </span>
                <p className="text-body">50%</p>
              </div>
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">Text Messages</p>
                </span>
                <p className="text-body">30%</p>
              </div>
              <div className="legend">
                <span>
                  <div className="marker"></div>
                  <p className="text-body">ChatBot</p>
                </span>
                <p className="text-body">30%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="report__card">
          <div
            className="report__card-top"
            style={{
              borderBottom: "1px solid lightgrey",
              paddingBottom: "10px",
            }}
          >
            <p className="text-body text-bold">Lead Forms</p>
            <div className="report__card-top-sort">
              <p className="text-body">Sort By: </p>
              <select>
                <option value="all">Monthly</option>
                <option value="quick">Weekly</option>
                <option value="slow">Daily</option>
                <option value="rejected">Yearly</option>
              </select>
            </div>
          </div>

          <div className="report__card-leads">
            <div className="report__card-lead">
              <p className="text-body">Lead Form for Website</p>
              <span>
                <p className="text-small text-bold">Used 50 times</p>
              </span>
            </div>
            <div className="report__card-lead">
              <p className="text-body">Lead Form for Instagram</p>
              <span>
                <p className="text-small text-bold">Used 50 times</p>
              </span>
            </div>
            <div className="report__card-lead">
              <p className="text-body">Lead Form for Facebook</p>
              <span>
                <p className="text-small text-bold">Used 50 times</p>
              </span>
            </div>
            <div className="report__card-lead">
              <p className="text-body">Lead Form for Twitter</p>
              <span>
                <p className="text-small text-bold">Used 50 times</p>
              </span>
            </div>
            <div className="report__card-lead">
              <p className="text-body">Lead Form for Link</p>
              <span>
                <p className="text-small text-bold">Used 50 times</p>
              </span>
            </div>
          </div>
        </div>

        <div className="report__card">
          <img src={lineImg} alt="" />
        </div>
      </div>
      <div className="leads__table">
        <div className="leads__table-head">
          <h3 className="h-100">Lead Feedback</h3>

          <div className="leads__table-search">
            <select>
              <option value="">Search Option</option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
            </select>
            <form>
              <input type="text" className="dashboard-search" />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
          </div>

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
                    <LeadTooltip id={user.id} />
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
