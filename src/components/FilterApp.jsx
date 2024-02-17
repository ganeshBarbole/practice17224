import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "./ProductData";
import { useState } from "react";

const FilterApp = () => {
    const [filterChange,setFilterChange] = useState('')
    const [inStock,setInStock] = useState(false)
   
    return(
        <div className="center">
            <SearchBar 
            filterChange={filterChange}
            inStock={inStock}
            onFilterChange={setFilterChange}
            onInStockChange={setInStock}
            />
            <ProductTable 
            products={PRODUCTS}
            filterChange={filterChange}
            inStock={inStock} 
            />
        </div>
    )
}
export default FilterApp; 