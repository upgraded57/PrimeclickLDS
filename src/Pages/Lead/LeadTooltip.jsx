import "./lead.css";
import { CiGrid2H } from "react-icons/ci";
import { BsSoundwave, BsMusicNoteList } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function LeadTooltip({ id }) {
  const navigate = useNavigate();
  return (
    <div
      className="lead-tooltips"
      onClick={() => navigate(`/leads/${id}/info`)}
    >
      <div className="lead-toolip">
        <span>
          <CiGrid2H />
        </span>
        <p className="text-body">View Data</p>
      </div>

      <div className="lead-toolip">
        <span>
          <BsSoundwave />
        </span>
        <p className="text-body">Listen to Call</p>
      </div>
      <div className="lead-toolip">
        <span>
          <BsMusicNoteList />
        </span>
        <p className="text-body">Read Transcript</p>
      </div>
      <div className="lead-toolip">
        <span>
          <IoTrashOutline />
        </span>
        <p className="text-body">Delete entry</p>
      </div>
    </div>
  );
}
