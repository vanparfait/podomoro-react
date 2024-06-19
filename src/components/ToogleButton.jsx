import React from "react";
import play from "../assets/play-button.svg";
import reset from "../assets/reset.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetChrono, startChrono } from "../features/chrono";

const ToogleButton = () => {
  const dispatch = useDispatch();
  const chronoValue = useSelector((state) => state.chrono);

  function toogleChrono() {
    if (!chronoValue.isPlaying) {
      dispatch(startChrono());
    } else {
      dispatch(resetChrono());
    }
  }

  return (
    <button
      onClick={toogleChrono}
      className="px-4 py-2 text-slate-800 flex justify-center items-center mx-auto bg-slate-300 rounded hover:bg-slate-200"
    >
      <span className="mr-3 text-lg">
        {chronoValue.isPlaying ? "reset" : "start"}{" "}
      </span>
      <img className="w-5" src={chronoValue.isPlaying ? reset : play} alt="" />
    </button>
  );
};

export default ToogleButton;
