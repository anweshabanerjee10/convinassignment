import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div
        style={{
          margin: "0 auto",
          width: "90%",
        }}
      >
        {/* <div style={{ padding: "2rem 0", marginBottom: "5rem" }}>
          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "1.25rem",
              letterSpacing: "-0.08rem",
            }}
          >
            404 Not Found
          </h3>
        </div> */}
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              src="https://img.freepik.com/premium-vector/scarecrow-stock-cartoon-colored-clipart_576561-3500.jpg?w=2000"
              alt="not found"
              style={{ height: "50vh", width: "50%", margin: "100px 0px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                letterSpacing: "0.035em",
                margin: "50px 0px",

                fontSize: "3.5rem",
                fontFamily: "monospace",
              }}
            >
              404
            </h1>
            <h1
              style={{
                fontWeight: "bolder",
                letterSpacing: "0.035em",
                fontFamily: "monospace",
                fontSize: "3.5rem",
              }}
            >
              Page Not Found!
            </h1>

            <h6
              style={{
                display: "block",
                fontFamily: "sans-serif",
                width: "50%",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "2.4rem",
                fontSize: "1rem",
                color: "#333",
              }}
            >
              The page you are looking for might be removed or is temporary
              unavailable
            </h6>
            <div>
              <Link
                to="/"
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  backgroundColor: "red",
                  fontFamily: "sans-serif",
                  borderRadius: "2rem",
                  fontSize: "1rem",
                  padding: "1rem 1.2rem",
                }}
              >
                back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
