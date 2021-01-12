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
              id="male"
              name="gender"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="male" className="pointer">
              &nbsp; Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="female"
              id="female"
              name="gender"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="female" className="pointer">
              &nbsp; Female
            </label>
          </div>

          <div>
            <input
              type="radio"
              value="prefer to skip"
              id="prefer to skip"
              name="gender"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="prefer to skip" className="pointer">
              &nbsp; Prefer to skip
            </label>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div>
          <p className="text-info">Payment method</p>
          <div>
            <input
              type="radio"
              value="check"
              id="check"
              name="paymentMethod"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="check" className="pointer">
              &nbsp; Check
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="paypal"
              id="paypal"
              name="paymentMethod"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="paypal">&nbsp; Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              value="cc"
              id="cc"
              name="paymentMethod"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="cc" className="pointer">
              &nbsp; cc
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="money order"
              id="money order"
              name="paymentMethod"
              onClick={(e) => handleFilters(e.target.name, e.target.value)}
            />
            <label htmlFor="money order" className="pointer">
              &nbsp; Money order
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideFilters;
