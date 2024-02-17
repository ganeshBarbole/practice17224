import React from 'react'
import Category from './Category';
import ProductRow from './ProductRow';

const ProductTable = ({products,filterChange,inStock}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterChange.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <Category
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}
      />
    )
    lastCategory = product.category
  });
  
  return (
    <table className='div'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prices</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
   
  )
}

export default ProductTable