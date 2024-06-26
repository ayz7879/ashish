import { LocationCity, Phone, Email } from "@mui/icons-material";
import { Box, Button, TextField, TextareaAutosize } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-75 py-1 bg-dark m-auto text-light flex-column d-flex align-items-center">
      <div
        style={{ width: "95%" }}
        className="bg-black p-3 d-flex flex-column align-items-center justify-content-center"
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>Get In Touch</span> {">"}
          ------
        </h2>
        <div className="d-flex p-3 w-100 gap-5">
          <div style={{ width: "60%", height: "20rem" }} className="image">
            <img
              style={{ width: "100%" }}
              src="https://cdn.pixabay.com/photo/2024/05/19/11/57/ai-generated-8772394_1280.png"
              alt=""
            />
          </div>
          <div className="contactus w-50">
            <h3>Contact Us</h3>
            <Box component="form" sx={{ width: "100%", margin: "auto" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name</label>
                <TextField
                  id="name"
                  placeholder="Enter Your Name"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: "#333", // Adjust to match your dark background
                      color: "#fff", // Text color
                      borderRadius: "4px", // Optional: Rounded corners
                      "&:hover": {
                        backgroundColor: "#444", // Hover background color
                      },
                      "&:focus": {
                        backgroundColor: "#555", // Focus background color
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" }, // Label color
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email</label>
                <TextField
                  id="email"
                  placeholder="Enter Your Valid Email"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: "#333", // Adjust to match your dark background
                      color: "#fff", // Text color
                      borderRadius: "4px", // Optional: Rounded corners
                      "&:hover": {
                        backgroundColor: "#444", // Hover background color
                      },
                      "&:focus": {
                        backgroundColor: "#555", // Focus background color
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" }, // Label color
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message</label>
                <TextareaAutosize
                  id="message"
                  aria-label="empty textarea"
                  placeholder="Text Here..."
                  minRows={4}
                  style={{
                    width: "100%",
                    backgroundColor: "#333", // Adjust to match your dark background
                    color: "#fff", // Text color
                    borderRadius: "4px", // Optional: Rounded corners
                    "&:hover": {
                      backgroundColor: "#444", // Hover background color
                    },
                    "&:focus": {
                      backgroundColor: "#555", // Focus background color
                    },
                  }}
                />
              </div>
              <div
                className="d-flex align-items-center gap-2"
                style={{ marginBottom: "1rem" }}
              >
                <input
                  style={{ width: "1.2rem", height: "1.2rem" }}
                  type="checkbox"
                />
                <label htmlFor="message">
                  I accept the{" "}
                  <span className="text-danger">term of service</span>
                </label>
              </div>
              <div
                className="d-flex align-items-center gap-2"
                style={{ marginBottom: "1rem" }}
              >
                <button className="btn btn-warning w-100">Submit</button>
              </div>
            </Box>
          </div>
        </div>

        <div className="d-flex justify-content-around  align-items-center w-100 my-3  ">
          <div
            style={{ width: "30%", height: "8rem", borderRadius: "1rem" }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <Phone />
              CALL US
            </div>
            <div>
              <h6>7879701086</h6>
              <h6>8770945434</h6>
            </div>
          </div>

          <div
            style={{ width: "30%", height: "8rem", borderRadius: "1rem" }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <LocationCity />
              LOCATION
            </div>
            <div>
              <h6>65/3 Ravi jagrati Nagar,Indore,</h6>
              <h6>Madhya Pradesh</h6>
            </div>
          </div>

          <div
            style={{ width: "30%", height: "8rem", borderRadius: "1rem" }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <Email />
              EMAIL
            </div>

            <h6>yashish393@gmail.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
