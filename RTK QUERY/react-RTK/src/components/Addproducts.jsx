import React from 'react';
import { useAddNewProductMutation } from '../app/service/productData';

const AddProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] = useAddNewProductMutation();

  const handleAddProduct = async () => {
    try {
      const productData = {
        title: 'New Laptop',
        description: 'A powerful gaming laptop'
      };
      await addNewProduct(productData); // Perform the mutation
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAddProduct} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
      {isError && <p>Error adding product!</p>}
      {data && (
        <div>
          <h3>Product Added:</h3>
          <p>{data.title}</p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
