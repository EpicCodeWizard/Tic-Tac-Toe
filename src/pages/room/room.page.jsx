import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// CROSS = 1 --> CIRCLE = 2
import "./room.styles.scss";
import Button from "../../components/button/button.component";
import Github from "../../components/github/github.component";
import ClickToCopy from "../../components/click-to-copy/click-to-copy.component";
import { makeRoomId } from "../../utils";

const RoomPage = () => {
  const [room, setRoom] = useState("");
  const [newRoom, setnewRoom] = useState("");

  useEffect(() => {
    setnewRoom(makeRoomId(8).toUpperCase());
  }, []);

  return (
    <div className="roomPage">
      <div className="create-container">
        <p className="text">
          <em>Create</em> a room and copy the <strong>ID</strong> to invite your
          opponent:
        </p>
        <div className="form">
          <ClickToCopy content={newRoom} />
          <Link to={`/game?room=${newRoom}&player=${"cross"}`}>
            <Button content="Create" />
          </Link>
        </div>
      </div>
      <p className="text">or</p>
      <div className="join-container">
        <p className="text">
          <em>Join</em> an existing room by copying the <strong>ID</strong>:
        </p>
        <div className="form">
          <input
            maxlength="8"
            className="input-text"
            placeholder="Paste ID here"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Link to={`/game?room=${room}&player=${"circle"}`}>
            <Button content="join" />
          </Link>
        </div>
        <Github />
      </div>
    </div>
  );
};

export default RoomPage;
