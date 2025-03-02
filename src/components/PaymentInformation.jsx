import {
  AccountBalance,
  CreditCard,
  MonetizationOn,
} from "@mui/icons-material";
import React from "react";

const PaymentInformation = () => {
  return (
    <div className="w-75 pb-3 bg-dark m-auto text-light flex-column d-flex  align-items-center">
      <div
        style={{ width: "95%" }}
        className=" d-flex flex-column p-3 align-items-center  bg-black  "
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>Payment Information</span>{" "}
          {">"}
          ------
        </h2>

        <div className="d-flex w-100 p-4 gap-3">
          <div style={{ width: "48%", height: "23rem" }} className="image mx-2">
            <img
              style={{ width: "100%", height: "23rem", borderRadius: "1rem" }}
              src="https://cdn.pixabay.com/photo/2021/03/19/13/40/online-6107598_1280.png"
              alt=""
            />
          </div>

          <div className="payment_details d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <div
                style={{ width: "9rem", height: "9rem", borderRadius: "1rem" }}
                className="paytm bg-dark d-flex align-items-center justify-content-center flex-column gap-1 "
              >
                <MonetizationOn
                  style={{ color: "rgb(207,241,30)" }}
                  fontSize="large"
                />
                <h4>Paytm</h4>
                <h5>7879701086</h5>
              </div>

              <div
                style={{ width: "9rem", height: "9rem", borderRadius: "1rem" }}
                className="paytm bg-dark d-flex align-items-center justify-content-center flex-column  gap-1 "
              >
                <CreditCard
                  style={{ color: "rgb(207,241,30)" }}
                  fontSize="large"
                />
                <h4>PhonePe</h4>
                <h5>7879701086</h5>
              </div>
              <div
                style={{ width: "9rem", height: "9rem", borderRadius: "1rem" }}
                className="paytm bg-dark d-flex align-items-center justify-content-center flex-column  gap-1"
              >
                <AccountBalance
                  style={{ color: "rgb(207,241,30)" }}
                  fontSize="large"
                />
                <h4>Google Pay</h4>
                <h5>7879701086</h5>
              </div>
            </div>

            <div
              style={{ borderRadius: "1rem" }}
              className="barcode d-flex flex-column justify-content-center align-items-center py-3 bg-dark"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>QR CODE AND STATUS</h4>
              <div className="d-flex py-2   justify-content-center gap-3 w-100 align-items-center">
                <div
                  style={{ width: "8rem", height: "7rem" }}
                  className="bg-light text-dark"
                >
                  <img
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "white",
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgPAvbF7rCkkRYnoZ8Oq9ehtm9S85bdkI8Q&s"
                    alt=""
                  />
                </div>
                <div>
                  <h6>
                    <span style={{ color: "rgb(207,241,30)" }}>Status</span>:
                    Payment Received
                  </h6>
                  <h6>Terms & Conditions Apply</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{  width: "95%" }}
          className="barcode d-flex mb-4 flex-column justify-content-center align-items-center py-3 bg-dark"
        >
          <h4 style={{ color: "rgb(207,241,30)" }}>BANK DETAILS</h4>
          <div className="d-flex py-2 flex-column  justify-content-center gap-3 w-100 align-items-center">
            <AccountBalance fontSize="large" />
            <div className="d-flex gap-4">
              <h5 className="d-flex gap-2">
                <span style={{ color: "rgb(207,241,30)" }}>Bank Name:</span>
                State Bank Of India
              </h5>
              <h5 className="d-flex gap-2">
                <span style={{ color: "rgb(207,241,30)" }}>Account No:</span>
                34033964318
              </h5>
              <h5 className="d-flex gap-2">
                <span style={{ color: "rgb(207,241,30)" }}>IFSC CODE:</span>
                SBIN0030450
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
