import "./leadinfo.css";
import logo from "../../assets/images/logo-alt.png";
import { useNavigate, useParams } from "react-router-dom";
import { RiQuillPenLine } from "react-icons/ri";
import { useState } from "react";

// Audio player
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useFetchLeadInfo } from "../../ApiCalls/Lead/Lead";
import Loader from "./../../Component/Loader/Loader";
import Button from "../../Component/button/Button";
import moment from "moment";

export default function LeadInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch lead info
  const { isLoading, data: leadInfo } = useFetchLeadInfo(id);

  // control visibility of note placeholder
  const [inputPlaceholder, setInputPlaceholder] = useState(true);
  const blurTextarea = (e) => {
    if (e.target.value === "") {
      setInputPlaceholder(true);
    }
  };

  const initials1 = leadInfo?.full_name?.split(" ")[0]?.split("")[0] || "";

  const initials2 = leadInfo?.full_name?.split(" ")[1]?.split("")[0] || "";

  return (
    <div
      style={{
        paddingInline: "4vw",
        paddingBlock: "40px",
        maxWidth: "1440px",
        marginInline: "auto",
      }}
    >
      <img
        src={logo}
        alt="Autoleads"
        style={{ width: "200px", marginBottom: "40px" }}
      />
      {isLoading && <Loader type="placeholder" />}
      <div className="leadinfo-head">
        <h3 className="h-100">Lead Information</h3>
        <Button variant="back" clickEvent={() => navigate(-1)} />
      </div>
      <div className="leadinfo">
        <div className="leadinfo-left">
          <div className="leadinfo-left__user">
            <div className="leadinfo-left__user-avatar">
              <h2 className="h-200">
                {`${initials1 && initials1}${initials2 && initials2}`}
              </h2>
            </div>

            <div className="leadinfo-left__user-status">
              <p className="text-small text-bold">Status: </p>
              <span
                className={`status ${
                  leadInfo?.status === "Pending" ? "" : "pending"
                }`}
              >
                {leadInfo?.status}
              </span>
              <span
                className={`status ${
                  leadInfo?.contacted_status === "Converted"
                    ? "converted"
                    : leadInfo?.contacted_status === "Rejected"
                    ? "rejected"
                    : ""
                }`}
              >
                {leadInfo?.contacted_status || "NIL"}
              </span>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">First Name: </p>
              <p className="text-body text-bold">{leadInfo?.full_name}</p>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">Email: </p>
              <p className="text-body text-bold">{leadInfo?.email}</p>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">Phone: </p>
              <p className="text-body text-bold">{leadInfo?.phone_number}</p>
            </div>
          </div>
          <div className="leadinfo-left__comment">
            {inputPlaceholder && (
              <span>
                <RiQuillPenLine />
                <p className="text-small">Write a note</p>
              </span>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                rows="3"
                onFocus={() => setInputPlaceholder(false)}
                onBlur={blurTextarea}
              ></textarea>

              <button type="reset">
                <p className="text-small">Clear</p>
              </button>
              <button type="submit">
                <p className="text-small">Save</p>
              </button>
            </form>
          </div>
        </div>

        <div className="leadinfo-audio">
          <div className="leadinfo-audio__top">
            <AudioPlayer
              autoPlay={false}
              src={leadInfo?.recording_url}
              layout="horizontal-reverse"
              showJumpControls={false}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              customProgressBarSection={[
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION,
              ]}
            />
          </div>

          <div className="leadinfo-audio__info">
            <h4>Transcribe</h4>
            <p className="text-small">
              {leadInfo?.full_name} at{" "}
              {moment(leadInfo?.call_time).format("h:ma, MMMM DD YYYY")}
            </p>
          </div>

          <div className="leadinfo-audio__transcriptions">
            {/* <span>
              <p className="text-small">00:00</p>
              <p className="text-body">
                Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
              </p>
            </span> */}

            <p className="text-small">Transacript not available</p>
          </div>
        </div>

        <div className="leadinfo-log">
          <h3>Lead Log</h3>
          <hr style={{ marginBottom: "10px" }} />

          <div className="logs">
            <div className="log">
              <h5>Call</h5>
              <p className="time">
                {moment(leadInfo?.call_time).format("YYYY/MM/DD - h:mm a")}
              </p>
              <p className="text-small text-bold">
                Duration:{" "}
                {leadInfo?.call_duration
                  ? `${leadInfo?.call_duration}s`
                  : "Unavailable"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
