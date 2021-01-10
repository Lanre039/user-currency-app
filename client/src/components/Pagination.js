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
          <a
            className="page-link pointer"
            href="#*"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a
              onClick={() => paginate(num)}
              href="#*"
              className="page-link pointer"
            >
              {num}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link pointer"
            href="#*"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
