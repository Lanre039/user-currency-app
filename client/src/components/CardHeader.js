import React from "react";
function CardHeader({ total, activePage, handleSearch }) {
  return (
    <div className="d-lg-flex d-md-flex justify-content-between align-items-center">
      <div className="">
        <header className="header">All User Profile</header>
        <h6 className="bg-primry font-weight-light text-dark-50 mb-2 spacing">
          Currently showing page{" "}
          <span className="font-weight-bold">
            {activePage} of {total} profiles
          </span>
        </h6>
      </div>
      <div className="md-width">
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
                placeholder="Search by name (e.g jane doe)"
                aria-label="Search"
              ></input>
              <i className="fas fa-search" aria-hidden="true"></i>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
