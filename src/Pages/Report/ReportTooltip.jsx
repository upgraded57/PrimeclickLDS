import "./report.css";
import { CiGrid2H } from "react-icons/ci";
import { BsSoundwave, BsMusicNoteList } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

export default function ReportTooltip() {
  return (
    <div className="report-tooltips">
      <div className="report-toolip">
        <span>
          <CiGrid2H />
        </span>
        <p className="text-body">View Data</p>
      </div>

      <div className="report-toolip">
        <span>
          <BsSoundwave />
        </span>
        <p className="text-body">Listen to Call</p>
      </div>
      <div className="report-toolip">
        <span>
          <BsMusicNoteList />
        </span>
        <p className="text-body">Read Transcript</p>
      </div>
      <div className="report-toolip">
        <span>
          <IoTrashOutline />
        </span>
        <p className="text-body">Delete entry</p>
      </div>
    </div>
  );
}
