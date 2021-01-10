import React from "react";

function Card({ item }) {
  return (
    <div className="bg-white shadow rounded mb-3 fff">
      {/* <div className="d-flex justify-content-between p-4 card-container"> */}
      <div className="p-4">
        <div className="w-100">
          <div className="d-lg-flex justify-content-between flex-lg-row  flex-md-row flex-sm-column">
            <div>
              <h6>
                <span className="text-info">Name:</span> {item.FirstName}{" "}
                {item.LastName}
              </h6>
              <h6>
                <span className="text-info">Username:</span> {item.UserName}
              </h6>
              <h6>
                <span className="text-info">Email:</span> {item.Email}
              </h6>
              <h6>
                <span className="text-info">Gender:</span> {item.Gender}
              </h6>
            </div>
            <div>
              <h6>
                <span className="text-info">Phone Number:</span>{" "}
                {item.PhoneNumber}
              </h6>
              <h6>
                <span className="text-info">Credit card Number:</span>{" "}
                {item.CreditCardNumber}
              </h6>
              <h6>
                <span className="text-info">Credit card type:</span>{" "}
                {item.CreditCardType}
              </h6>
              <h6>
                <span className="text-info">Payment method:</span>{" "}
                {item.PaymentMethod}
              </h6>
            </div>
            <div>
              <h6>
                <span className="text-info">Domain name:</span>{" "}
                {item.DomainName}
              </h6>
              <h6>
                <span className="text-info">Mac address:</span>{" "}
                {item.MacAddress}
              </h6>
              <h6>
                <span className="text-info">URL:</span> {item.MacAddress}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 bg-info d-lg-flex justify-content-between align-items-center">
        <p className="text-white p-1 mb-0">Last login: {item.LastLogin}</p>
        <p className="text-white p-1 mb-0">Latitude: {item.Latitude}</p>
        <p className="text-white p-1 mb-0">Longitude: {item.Longitude}</p>
      </div>
    </div>
  );
}

export default Card;
