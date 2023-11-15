import "./leadinfo.css";
import { useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { RiQuillPenLine } from "react-icons/ri";
import { useState } from "react";

// data
import { users } from "../../Data/data";

// Audio player
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function LeadInfo() {
  const { id } = useParams();
  const user = users[0];
  const [inputPlaceholder, setInputPlaceholder] = useState(true);

  const blurTextarea = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setInputPlaceholder(true);
    }
  };

  return (
    <>
      <div className="leadinfo-head">
        <h3 className="h-100">Form Details</h3>
        <span>
          <TiArrowBackOutline style={{ fontSize: "30px" }} />
          <p className="text-body">Back</p>
        </span>
      </div>
      <div className="leadinfo">
        <div className="leadinfo-left">
          <div className="leadinfo-left__user">
            <div className="leadinfo-left__user-avatar">
              <h2 className="h-200">AO</h2>
            </div>

            <div className="leadinfo-left__user-status">
              <p className="text-small text-bold">Status: </p>
              <span className="status called">Called</span>
              <span className="status converted">Converted</span>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">First Name: </p>
              <p className="text-body text-bold">{user.fullName}</p>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">Email: </p>
              <p className="text-body text-bold">{user.Email}</p>
            </div>

            <div className="leadinfo-left__user-info">
              <p className="text-small">Phone: </p>
              <p className="text-body text-bold">{user.Phone}</p>
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
              src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
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
            <p className="text-small">{user.fullName} at 10:00am</p>
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
    </>
  );
}
