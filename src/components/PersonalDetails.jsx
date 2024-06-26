import {
  BugReport,
  Dashboard,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const PersonalDetails = () => {
  return (
    <div
      style={{ height: "65vh" }}
      className="w-75 bg-dark m-auto text-light flex-column d-flex"
    >
      {/* top content */}
      <div className="w-100 d-flex justify-content-around align-items-center">
        <div className="py-2 d-flex gap-1">
          <BugReport fontSize="large" style={{ color: "rgb(207,241,30)" }} />
          <h3> I-SoftZone</h3>
        </div>
        <div className="py-2 d-flex gap-4">
          <Facebook /> <LinkedIn /> <Twitter /> <Instagram />
        </div>
        <div className="py-2 d-flex gap-2 align-items-center">
          <h5>Ashish Yadav</h5>
          <Dashboard
            fontSize="large"
            style={{ color: "rgb(207,241,30)" }}
          />{" "}
          {/* Enter name Data */}
        </div>
      </div>

      {/* bottom content */}
      <div className="w-100 pt-5 px-3 d-flex justify-content-around align-items-center">
        {/* details content */}
        <div
          style={{ width: "20rem", height: "15rem" }}
          className="d-flex gap-2  justify-content-center p-2 gap-3   flex-column"
        >
          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Name:-
            </span>
            <span className=" fs-5">Ashish Yadav</span>
          </div>

          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Email:-
            </span>
            <span className=" fs-5">Yashish393@gmail.com</span>
          </div>

          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Phone:-
            </span>
            <span className=" fs-5">+917879701086</span>
          </div>
          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Address:-
            </span>
            <span className=" fs-5">65/3 Ravi Jagrati Nagar</span>
          </div>
        </div>

        {/* image content */}
        <div
          style={{
            borderRadius: "50%",
            marginRight: "1.7rem",
            width: "17rem",
            height: "17rem",
          }}
        >
          <img
            style={{ borderRadius: "50%", width: "17rem", height: "17rem" }}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb90fc3-494f-434b-8f15-88ca13ef981b/d5d7wrm-3ba2fa5f-829d-438d-8667-1c5c4f0f2000.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjkwZmMzLTQ5NGYtNDM0Yi04ZjE1LTg4Y2ExM2VmOTgxYlwvZDVkN3dybS0zYmEyZmE1Zi04MjlkLTQzOGQtODY2Ny0xYzVjNGYwZjIwMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s4_Nby-jHQTni4OFfEwrj28_dyhP2xfe1C9gpkX23cQ"
            alt=""
          />
        </div>

        {/* Score content */}
        <div className="bg-black d-flex flex-column justify-content-around p-3 px-4 gap-3">
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              13+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              14+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              18+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
