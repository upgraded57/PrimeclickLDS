import { useNavigate } from "react-router-dom";
import "./notifications.css";
import Button from "./../../Component/button/Button";
import { IoCheckmarkSharp, IoTrashOutline } from "react-icons/io5";

export default function Notifications() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const navigate = useNavigate();
  return (
    <div className="notifications">
      <div className="notifications-top">
        <span>
          <h3 className="h-100">Notifications</h3>
          <p className="text-body">
            Welcome {`${user.first_name} ${user.last_name}`}
          </p>
        </span>

        <div className="mark-btns">
          <Button
            variant="pill"
            text="Mark all as read"
            icon={<IoCheckmarkSharp />}
            bgColor="#1CBFD9"
          />
          <Button variant="pill" text="Clear All" icon={<IoTrashOutline />} />
        </div>
      </div>

      <div className="notifications-section">
        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-avatar"></div>
          <div className="notifications-body">
            <div className="time">
              <small className="text-small">2 days ago</small>
              <h4 className="h-50-alt">
                New Campaign Added - (New campaign name)
              </h4>
              <small className="text-small">
                Click{" "}
                <a href="#" className="text-link-alt">
                  {" "}
                  here
                </a>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
