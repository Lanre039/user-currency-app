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
          <p className="text-info">Payment method</p>
          <div>
            <input
              type="radio"
              value="check"
              id="paymentMethod"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="visa">&nbsp; Check</label>
          </div>
          <div>
            <input
              type="radio"
              value="paypal"
              id="paymentMethod"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="visa">&nbsp; Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              value="cc"
              id="paymentMethod"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="visa">&nbsp; cc</label>
          </div>
          <div>
            <input
              type="radio"
              value="money order"
              id="paymentMethod"
              name="category"
              onClick={(e) => handleFilters(e.target.id, e.target.value)}
            />
            <label htmlFor="masterCard">&nbsp; Money order</label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideFilters;
