import * as React from "react";
import { useEffect } from "react";
import "../assets/css/homepage.css";
import { getDataPlayer } from "../Service/getDataPlayer";

export const Homepage = () => {
  const DataMock: string[] = ["1", "2", "3", "4", "5", "6"];

  useEffect(() => {
    getDataPlayer();
  }, []);

  // Function
  const RenderOverview = () => {
    return DataMock.map((value: any, i) => {
      return (
        <div className="dataOverview" key={i}>
          value
        </div>
      );
    });
  };

  return (
    <div className="homepage">
      <section className="sectionTop">
        <div className="details">
          <div className="headLine">
            <h1>Details</h1>
          </div>
          <div className="detailData">
            <p>Real Name</p>
            <p>Player Name</p>
            <p>Asset</p>
          </div>
        </div>
        <div className="controls">
          <div className="headLine">
            <h1>Controls</h1>
          </div>
          <div className="buttonWarp">
            <button className="buttonControls">SORT ASC</button>
            <button className="buttonControls">SORT DESC</button>
          </div>
          <button className="buttonControlsSubmit">SUBMIT</button>
        </div>
      </section>
      <section className="sectionBottom">
        <div className="overview">
          <h1>Overview</h1>
          <div className="contentOverview">{RenderOverview()}</div>
        </div>
      </section>
    </div>
  );
};
