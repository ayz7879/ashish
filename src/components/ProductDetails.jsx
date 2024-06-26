import { Button } from "@mui/material";
import React from "react";

const ProductDetails = () => {
  return (
    // grey div
    <div className="w-75 py-4 bg-dark m-auto text-light flex-column d-flex  align-items-center">
      {/* black div */}
      <div
        style={{ width: "95%" }}
        className="bg-black    d-flex flex-column align-items-center justify-content-center "
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>Our Products</span> {">"}
          ------
        </h2>

        <div className="d-flex py-2 gap-3">
          <div
            style={{ borderRight: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center py-2 gap-3  w-50 justify-content-center"
          >
            <div
              style={{ width: "50%" }}
              className="content d-flex gap-1 flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>Product 1</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                inventore, ut sit autem sint consequatur.
              </span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold "
              >
                $899.99
              </button>
            </div>
            <div
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "1rem",
              }}
              className="image"
            >
              <img
                style={{
                  width: "100%",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/71DFCg4yVBL._SL1500_.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ borderLeft: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center gap-3 py-4 w-50 justify-content-center "
          >
            <div className="image">
              <img
                style={{
                  width: "10rem",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "50%" }}
              className="content gap-1  d-flex flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>Product 2</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                inventore, ut sit autem sint consequatur.
              </span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $299.99
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex py-2 gap-3">
          <div
            style={{ borderRight: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center py-2 gap-3  w-50 justify-content-center"
          >
            <div
              style={{ width: "50%" }}
              className="content d-flex gap-1 flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>Product 3</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                inventore, ut sit autem sint consequatur.
              </span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold "
              >
                $499.99
              </button>
            </div>
            <div
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "1rem",
              }}
              className="image"
            >
              <img
                style={{
                  width: "100%",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ borderLeft: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center gap-3 py-4 w-50 justify-content-center"
          >
            <div className="image">
              <img
                style={{
                  width: "10rem",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "50%" }}
              className="content gap-1  d-flex flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>Product 4</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                inventore, ut sit autem sint consequatur.
              </span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $699.99
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
