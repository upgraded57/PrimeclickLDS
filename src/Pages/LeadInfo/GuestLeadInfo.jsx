import "./leadinfo.css";
import logo from "../../assets/images/logo-alt.png";
import { useNavigate, useParams } from "react-router-dom";
import { RiQuillPenLine } from "react-icons/ri";
import { useState } from "react";
import sampleAudio from "../../assets/audio/sample-audio.mp3";

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
    <>
      {isLoading && <Loader type="placeholder" />}
      <div className="guest_leadinfo">
        <div className="guest_logo">
          <img src={logo} alt="Autoleads" />
        </div>
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

              <div className="leadinfo-left__user-info">
                <p className="text-small">Company: </p>
                <p className="text-body text-bold">Bosun's enterprise</p>
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
                src={sampleAudio}
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
                {moment(leadInfo?.created).format("h:m, MMMM DD YYYY")}
              </p>
            </div>

            <div className="leadinfo-audio__transcriptions">
              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>

              <span>
                <p className="text-small">00:00</p>
                <p className="text-body">
                  Lorem ipsum dolor sit amet,con sec tetur adipiscing elit, sed
                </p>
              </span>
            </div>
          </div>

          <div className="leadinfo-log">
            <h3>Lead Log</h3>
            <hr style={{ marginBottom: "10px" }} />

            <div className="logs">
              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>

              <div className="log">
                <h5>Offer Call</h5>
                <p className="time">24 Jun, 2023 - 10:00AM</p>
                <p className="text-small text-bold">Duration: 4min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
