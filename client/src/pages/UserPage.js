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
        });
    };

    if (!fetchedData) {
      fetchData();
    }
  }, [fetchedData, currentPage]);

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

    // PAGINATION
    if (pageNumber) {
      const start = pageSize * (pageNumber - 1);
      const end = start + pageSize;
      renderData = renderData.slice(start, end);
    }

    // FILTER BY GENDER
    if (category === "gender") {
      renderData = renderData.filter(
        ({ Gender, FirstName }) =>
          Gender.toLowerCase() === filterOption &&
          (searchInput
            ? RegExp(`^${searchInput}`, "ig").test(FirstName.toLowerCase())
            : true)
      );
    }

    // FILTER BY PAYMENT METHOD
    if (category === "creditCardType") {
      renderData = renderData.filter(
        ({ CreditCardType, FirstName }) =>
          CreditCardType.toLowerCase() === filterOption &&
          (searchInput
            ? RegExp(`^${searchInput}`, "ig").test(FirstName.toLowerCase())
            : true)
      );
    }

    // SEARCH BY FIRST NAME
    if (category === "searchByName") {
      renderData = renderData.filter(({ FirstName }) =>
        searchInput
          ? RegExp(`^${searchInput}`, "ig").test(FirstName.toLowerCase())
          : true
      );
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
    const data = renderProfile(
      fetchedData,
      currentPage,
      category,
      filterOption,
      null
    );
    setProfiles(data);
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
    if (pageNumber < 1) return;

    const data = renderProfile(fetchedData, pageNumber);
    setProfiles(data);
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center items-center">
        <h1>Loading data....</h1>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div>
          {noOfProfiles ? (
            <div className="w-100">
              <CardHeader
                total={noOfProfiles}
                activePage={currentPage}
                handleSearch={handleSearch}
              />
            </div>
          ) : null}
          {profiles && profiles.length > 0 ? (
            <div className="d-lg-flex justify-content-between flex-lg-row flex-sm-row">
              <div className="mr-2">
                <SideFilters handleFilters={handleFilters} />
              </div>
              <div>{profiles}</div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <h1>NO record available</h1>
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
