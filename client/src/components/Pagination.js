import React from "react";

function Pagination({ total, profilePerPage, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / profilePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item">
          <button
            className="page-link pointer"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button
              onClick={() => paginate(num)}
              className={`page-link pointer  ${
                currentPage === num ? "btn" : ""
              }`}
            >
              {num}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link pointer"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
