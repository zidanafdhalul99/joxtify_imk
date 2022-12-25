import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import gitar from "../Search/img/gitar.jfif";

export default function Gitar() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">Gitar</div>
        <div className="flex mt-10 ">
          <div>
            <img
              className=""
              src={gitar}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">Intrumental - Gitar</div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : Instrumen
            </div>
            <Link to="/gitar">
              <div className="w-56 text-white mt-2 text-sm ml-3">......</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}