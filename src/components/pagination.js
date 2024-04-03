// import React from 'react'
// const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
// const pageNumber =[Array(pageNumber+1).keys()].slice (1) // create array of numbers 0 to n
// const goToNextPage =() =>{
//     if(currentPage !==pageNumbers) setCurrentPage(currentPage +1)
//     }
//     const  goToPrevPage= ()=>{
//         if (currentPage!==1 ) setCurrentPage(currentPage -1)
//         }
//         return (
//             <nav>
//                 <ul className="pagination justify-content-center">
//                 <li>
//              class="page-item"
//             className="page-link"
//              onClick={goToPrevPage}
//              href= "#"
//              Previous
//              </li>
//                 </ul>
//                 {pageNumbers.map(pgNumber => (
//                 <li key={pageNumbers}>
//                     className={'page-item'}${currentPage === pageNumber ? 'active':'}'} 
//                 <a onClick={()=> setCurrentPage(pgNumber)}
//                     className="page-link"
//                     href="#">
//                      {pgNumber}
//                 </a>
//                 </li>
//                 ))}
//                 <li className= "page-item">
//                         <a className="page-link"
//                          onClick={goToNextPage}
//                          href= "#" > Next
//                          </a>   
//                     </li>

                
//             </nav>
//         )
// }
// export default Pagination;