import "./emptystate.css";
import emptyTable from "../../assets/images/empty-table.png";
import { Link } from "react-router-dom";

export default function EmptyState() {
  return (
    <div className="empty">
      <img src={emptyTable} alt="empty table state" />
      <p className="text-body">
        Nothing here yet! <Link to="/new">Click here</Link> to Add Leads and get
        started
      </p>
    </div>
  );
}
