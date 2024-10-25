import React from 'react'
import {useUpdateProductMutation} from '../app/service/productData'


const Updateproduct = () => {

    const [updateProduct, { data, isError, isLoading }] = useUpdateProductMutation();

    const handleUpdateProduct = async () => {
        // try {
        const updateProductTitle = {
            title: 'New Laptop',
        };
        await updateProduct({
            id:1,
            updateProductDetails:updateProductTitle
        }); // Perform the mutation
        // } catch (error) {
        // console.log('Error adding product:', error);
        // }
    };

  return (
    <div>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        {isLoading ? 'Updating...' : 'update Product'}
      </button>
      {isError && <p>Error updating product!</p>}
      {data && (
        <div>
          <h3>Product updated:</h3>
          <p>{data.title}</p>
        </div>
      )}
    </div>
  )
}



export default Updateproduct
