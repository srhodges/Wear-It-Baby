import ReactPaginate from "react-paginate";
import React from 'react';
import { useState } from 'react';
import Inventory from "./Inventory";
import Card from "./Card";

function Pagination() {
  const inventoryData = { Inventory };

  const [items, setItems] = useState(inventoryData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);



  const itemsperPage = 12
  const pagesVisited = pageNumber * itemsperPage

  const displayInventory = items
    .slice(pagesVisited, pagesVisited + itemsperPage);
    .map((items) => {
    return (
      <div>
        {items.map((item) => {
          return (
            <Card item={item} />
          );
        })}
      </div>
    )
    })
  
  const pageCount = Math.ceil(items.length / itemsperPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  
  return (
    <div>  
    { displayInventory }
      < ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"page-button"}
        previousLinkClassName={"prev-page-button"}
        nextLinkClassName={"next-page-button"}
        disabledClassName={"page-disabled"}
        activeClassName={"active-page"}
    />
    </div>
  );

}



export default Pagination
