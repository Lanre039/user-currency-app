import React from "react";

function SideFilters({ data, handleFilters }) {
  const renderData = (data, category) => {
    let result = [];
    if (category === "gender") {
      result = data.map(({ Gender }) => Gender);
    }

    if (category === "paymentMethod") {
      result = data.map(({ PaymentMethod }) => PaymentMethod);
    }

    result = [...new Set(result)];

    return result.map((item, index) => {
      return (
        <div key={index}>
          <input
            type="radio"
            value={item.toLowerCase()}
            id={item}
            name={category}
            onClick={(e) => handleFilters(e.target.name, e.target.value)}
          />
          <label htmlFor={item} className="pointer text-capitalize">
            &nbsp; {item}
          </label>
        </div>
      );
    });
  };

  return (
    <aside className="bg-white shadow p-3 filter mb-2">
      <h5>Filter by:</h5>
      <div className="d-lg-flex d-md-flex justify-content-between flex-lg-column flex-md-row flex-sm-row">
        <div>
          <p className="text-info">Gender</p>
          {renderData(data, "gender")}
        </div>
        <div>
          <p className="text-info">Payment method</p>
          {renderData(data, "paymentMethod")}
        </div>
      </div>
    </aside>
  );
}

export default SideFilters;
