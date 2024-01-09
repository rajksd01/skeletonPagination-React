import { useState } from "react";
function Pagination({ itemsLength, setEndIndex, perPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(itemsLength / perPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div className="flex gap-8 items-center ">
      {pages.map((page) => {
        return (
          <button
            className="border p-1"
            onClick={() => {
              setEndIndex(page * perPage);
            }}
            key={page}
          >
            {" "}
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
