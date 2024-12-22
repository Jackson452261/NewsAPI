import React from 'react'
import './Pagination.css'

const Pagination = ({currentPage, setCurrentPage, totalResults}) => {

     const pageSize = 6
     const totalPages =  Math.ceil(totalResults / pageSize)
     const  pageNumbers = []
     for (let i = 0; i<= totalPages; i++){
        pageNumbers.push(i)
     }

     const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
     }
  return (
    <div className='pagination'>
        <button className='prev-btn' disabled={currentPage === 1} onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}>前一個</button>
         <ul className='page-numbers'>
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber} className={`page-number${pageNumber === currentPage ? " active" : ""}`}
                onClick={() => handlePageClick(pageNumber)}
                >
            {pageNumber}
            
                </li>
            )

            )}

         </ul>

         <button className='next-btn' disabled={currentPage === totalPages} onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}> 下一個</button>
        
        </div>
  )
}

export default Pagination