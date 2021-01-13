import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import Pagination from "../components/Pagination";
import SideFilters from "../components/SideFilters";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [noOfProfiles, setNoOfProfiles] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [pageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [gender, setGender] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(process.env.REACT_APP_API_KEY)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const { records } = data;
            setNoOfProfiles(records.profiles.length);
            setFetchedData(records.profiles);
            const formatData = renderProfile(records.profiles, currentPage);
            setProfiles(formatData);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to fetch data. Try again");
        });
    };

    if (!fetchedData) {
      fetchData();
    }

    if (gender || paymentMethod) {
      const data = renderProfile(fetchedData, currentPage);
      setProfiles(data);
    }
  }, [fetchedData, currentPage, gender, paymentMethod]);

  const renderProfile = (
    data,
    pageNumber = null,
    category = "",
    filterOption = "",
    searchInput = ""
  ) => {
    if (!searchInput || searchInput.trim().length === 0) {
      searchInput = false;
    }

    let renderData = data;

    // FILTER BY GENDER
    if (gender) {
      renderData = renderData.filter(
        ({ Gender }) => Gender.toLowerCase() === gender
      );
      setNoOfProfiles(renderData.length);
    }

    // FILTER BY PAYMENT METHOD
    if (paymentMethod) {
      renderData = renderData.filter(
        ({ PaymentMethod }) => PaymentMethod.toLowerCase() === paymentMethod
      );
      setNoOfProfiles(renderData.length);
    }

    // FILTER BY GENDER AND PAYMENT METHOD
    if (gender && paymentMethod) {
      renderData = renderData.filter(
        ({ PaymentMethod, Gender }) =>
          Gender.toLowerCase() === gender &&
          PaymentMethod.toLowerCase() === paymentMethod
      );
      setNoOfProfiles(renderData.length);
    }

    // SEARCH BY NAME
    if (category === "searchByName") {
      renderData = renderData.filter(({ FirstName, LastName }) =>
        searchInput
          ? RegExp(`^${searchInput}`, "ig").test(
              `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`
            ) ||
            RegExp(`^${searchInput}`, "ig").test(
              `${LastName.toLowerCase()} ${FirstName.toLowerCase()}`
            )
          : true
      );
      setNoOfProfiles(renderData.length);
    }

    // PAGINATION
    if (pageNumber) {
      const start = pageSize * (pageNumber - 1);
      const end = start + pageSize;
      renderData = renderData.slice(start, end);
    }

    const page = Math.ceil(renderData.length / 20);
    if (page < 1) {
      setCurrentPage(1);
    }

    return renderData.map((obj, index) => {
      return (
        <div key={index}>
          <Card item={obj} />
        </div>
      );
    });
  };

  const handleFilters = (category, filterOption) => {
    if (category === "gender") {
      setGender(filterOption);
    }

    if (category === "paymentMethod") {
      setPaymentMethod(filterOption);
    }
  };

  const handleSearch = (value) => {
    const data = renderProfile(
      fetchedData,
      currentPage,
      "searchByName",
      "",
      value.trim().toLowerCase()
    );
    setProfiles(data);
  };

  const handlePagination = (pageNumber) => {
    console.log("page", pageNumber);
    if (pageNumber < 1) return;

    const data = renderProfile(fetchedData, pageNumber);
    setProfiles(data);
    setCurrentPage(pageNumber);
  };

  if (loading || error) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        {error ? <h1>{error}</h1> : <h1>Loading data....</h1>}
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-column align-items-center">
        <div className="user-page">
          <div className="w-100">
            <CardHeader
              total={noOfProfiles}
              activePage={currentPage}
              handleSearch={handleSearch}
            />
          </div>
          {profiles && profiles.length > 0 ? (
            <div className="d-lg-flex justify-content-between flex-lg-row flex-sm-row">
              <div className="mr-2">
                <SideFilters data={fetchedData} handleFilters={handleFilters} />
              </div>
              <div className="flex-fill">{profiles}</div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-enter mt-5">
              <div className="mr-2">
                <SideFilters data={fetchedData} handleFilters={handleFilters} />
              </div>
              <div className="flex-fill ml-5">
                <h1 className="text-white">No record available</h1>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <br />
          <Pagination
            total={noOfProfiles}
            currentPage={currentPage}
            profilePerPage={20}
            paginate={handlePagination}
          />
        </div>
      </div>
    </>
  );
}

export default UserPage;
