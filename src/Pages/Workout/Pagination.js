import { Button,Container } from "@chakra-ui/react";

function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }
  
  function Pagination({totalPages=10,currentPage,handlePageChange}) {
    let pages = createArrayOfSize(totalPages).map((a, i) => <Button bg='#2EB0C7' key={i} data-testid="page-btn" disabled={currentPage==i+1} onClick={()=>handlePageChange(i+1)}>{i+1}</Button>);
    return   <Container maxW='md' mt={4} mb={6} color='black'>
    {pages}</Container>;
  }
  
  export default Pagination;
  