const SearchBar = ({filterChange,inStock,onFilterChange,onInStockChange}) => {
    return(
        <div className="div">
        <form>
            <input 
             type="text" 
             placeholder="Search here"
             value={filterChange}
             onChange={(e)=>onFilterChange(e.target.value)}
             />
            <label>
            <input 
          type="checkbox" 
          checked={inStock} 
          onChange={(e) => onInStockChange(e.target.checked)} />
                {" "}
                    only show product in stock
            </label>
        </form>
        </div>
    )
}
export default SearchBar