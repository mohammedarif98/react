import React from 'react';
import { useGetAllProductsQuery } from '../app/service/productData'; // Correct import for the hook



const Allproducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(); // Destructure error correctly

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error in fetching data</div>;
  }

  return (
    <div>
      {data?.products?.map((product) => (
        <React.Fragment key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </React.Fragment>
      ))}
    </div>
  );
};




export default Allproducts;
