import React from "react";
// import Pagination from "../components/Pagination";

function CardHeader({ total, activePage, handlePagination, handleSearch }) {
  return (
    // <div className="d-lg-flex justify-content-start align-items-center flex-lg-row flex-sm-column mb-3 w-100">
    <div className="d-lg-flex d-md-flex justify-content-between align-items-center">
      <div className="mr-5">
        <header className="header">All User Profile</header>
        <h6 className="bg-primry font-weight-light text-dark-50 lead mb-2 spacing">
          Currently showing all users - &nbsp;{" "}
          <span className="font-weight-bold">
            {activePage}/{total}
          </span>
        </h6>
      </div>
      {/* <div className="mr-5"></div> */}
      <div className="md-width">
        {/* <div className="d-flex justify-content-between align-items-start"> */}
        {/* <div className=""> */}
        <div className="w-100">
          <div className="bg-white border rounded shadow p-1 pr-3 pl-3">
            <form
              className="form-inline border-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control-sm mr-lg-3 mr-sm-2 border-0 input-width"
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                placeholder="Search by name..."
                aria-label="Search"
              ></input>
              <i className="fas fa-search" aria-hidden="true"></i>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
