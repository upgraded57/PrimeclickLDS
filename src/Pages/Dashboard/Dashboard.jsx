import "./dashboard.css";
import { FaPlus } from "react-icons/fa6";
import Button from "./../../Component/button/Button";
import Card from "./../../Component/Card/Card";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { users } from "../../Data/data";
import { useFetchCampaigns } from "../../ApiCalls/Campaign/Campaign";
import EmptyState from "./../../Component/emptyState/EmptyState";

export default function Dashboard() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
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

  const { data: campaigns } = useFetchCampaigns();

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <span>
          <h3 className="h-100">Dashboard</h3>
          <p className="text-body">
            Welcome {`${user.first_name} ${user.last_name}`}
          </p>
        </span>

        <div className="btns">
          <Button
            variant="pill"
            icon={<FaPlus />}
            text="Add New Campaign"
            clickEvent={() => navigate("/new")}
          />
        </div>
      </div>

      <div className="dashboard-summary">
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
          <Card text="Total Leads Reached" qty="0" />
          <Card text="Total Leads Reached" qty="0" />
          <Card text="Total Leads Reached" qty="0" />
          <Card text="Total Leads Reached" qty="0" />
        </div>
      </div>

      <div className="dashboard-mid">
        <div className="dashboard-graph">Graph will show here</div>
        <div className="dashboard-recent">
          <div className="top">
            <p className="text-body text-bold">Recent Form Activity</p>
            <p
              className="text-small"
              style={{ opacity: "0.7", cursor: "pointer" }}
              onClick={() => navigate("/leads")}
            >
              View Details
            </p>
          </div>

          <div className="table">
            <EmptyState />
          </div>
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
          {/* <tbody>
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
                  <span className="tooltip lead-delete-icon">
                    <IoTrashOutline />
                  </span>
                  
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
        <EmptyState />
      </div>
    </div>
  );
}
