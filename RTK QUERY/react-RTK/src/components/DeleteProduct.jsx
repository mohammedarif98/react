

import React from 'react'
import {useDeleteProductMutation} from '../app/service/productData'



const DeleteProduct = () => {

    const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation();

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(1)
        } catch (error) {
        console.log('Error adding product:', error);
        }
    };


  return (
    <div>
        <button onClick={handleDeleteProduct} disabled={isLoading}>
        {isLoading ? 'deleing...' : 'delete Product'}
        </button>
        {isError && <p>Error deleteing product!</p>}
        {data && (
            <div>
            <h3>deleted Product:</h3>
            <p>{data.title}</p>
            </div>
        )}
    </div>
  )
}

export default DeleteProduct