import "./lead.css";
import { CiGrid2H } from "react-icons/ci";
import { BsSoundwave, BsMusicNoteList } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

export default function LeadTooltip() {
  return (
    <div className="lead-tooltips">
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
