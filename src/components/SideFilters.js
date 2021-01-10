import React from "react";

function SideFilters({ handleFilters }) {
  return (
    <aside className="bg-white shadow p-3 filter mb-2">
      <h5>Filter by:</h5>
      <div className="d-lg-flex d-md-flex justify-content-between flex-lg-column flex-md-row flex-sm-row">
        <div>
          <p className="text-info">Gender</p>
          <div>
            <input
              type="radio"
              value="male"
              id="gender"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="male">&nbsp; Male</label>
          </div>
          <div>
            <input
              type="radio"
              value="female"
              id="gender"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="female">&nbsp; Female</label>
          </div>

          <div>
            <input
              type="radio"
              value="prefer to skip"
              id="gender"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="skip">&nbsp; Prefer to skip</label>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div>
          {/* <hr /> */}
          <p className="text-info">Payment Method</p>
          <div>
            <input
              type="radio"
              value="visa"
              id="creditCardType"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="visa">&nbsp; VISA</label>
          </div>
          <div>
            <input
              type="radio"
              value="master card"
              id="creditCardType"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="masterCard">&nbsp; Master Card</label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideFilters;
