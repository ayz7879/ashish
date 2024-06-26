import { TextField } from "@mui/material";
import React from "react";

const AppointMent = () => {
  return (
    <div className="w-75 pb-3 bg-dark m-auto text-light flex-column d-flex  align-items-center ">
      <div
        style={{ width: "95%" }}
        className=" d-flex flex-column align-items-center justify-content-center bg-black  "
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>
            Available AppointMent
          </span>{" "}
          {">"}
          ------
        </h2>

        <div className="d-flex flex-column align-items-center p-4 w-100">
          <div
            style={{ width: "90%" }}
            className="d-flex bg-dark p-4 justify-content-around"
          >
            <h4 style={{ color: "rgb(207,241,30)" }}>Select Date</h4>
            <TextField
              sx={{
                width: "85%",
                "& .MuiInputBase-input": {
                  backgroundColor: "#333", // Adjust this color to suit your background
                  color: "#fff", // Text color
                  borderRadius: "4px", // Optional: Rounded corners
                  paddingLeft: "8px", // Optional: Adjust padding for input text
                },
              }}
              type="date"
              InputLabelProps={{ shrink: true }} // Ensures the label floats properly
              InputProps={{
                style: { color: "#fff" }, // Text color (optional)
              }}
            />
          </div>

          <div
            style={{ width: "90%" }}
            className="bg-dark d-flex flex-column align-items-center my-4 p-4 "
          >
            <h3 className="py-2">July 9, 2024</h3>
            <div
              style={{ width: "90%", color: "rgb(207,241,30)" }}
              className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
            >
              <h3>8:00 am -- 9:00 am</h3>
              <h5>3 SPACE AVAILABLE</h5>
            </div>
            <div
              style={{ width: "90%", color: "rgb(207,241,30)" }}
              className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
            >
              <h3>9:00 am -- 10:00 am</h3>
              <h5>BOOKED</h5>
            </div>
            <div
              style={{ width: "90%", color: "rgb(207,241,30)" }}
              className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
            >
              <h3>11:00 am -- 12:00 pm</h3>
              <h5>1 SPACE AVAILABLE</h5>
            </div>
            <div
              style={{ width: "90%", color: "rgb(207,241,30)" }}
              className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
            >
              <h3>1:00 pm -- 4:00 pm</h3>
              <h5>BOOKED</h5>
            </div>
            <div
              style={{ width: "90%", color: "rgb(207,241,30)" }}
              className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
            >
              <h3>6:00 pm -- 9:00 pm</h3>
              <h5>9 SPACE AVAILABLE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointMent;
