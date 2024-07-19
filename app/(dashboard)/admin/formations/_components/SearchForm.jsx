const SearchForm = ({ searchTerm, onSearchChange }) => (
  <div className="p-4 row">
    <form className="d-flex align-items-center col-12 col-md-12 col-lg-12">
      <span className="position-absolute ps-3 search-icon">
        <i className="fe fe-search"></i>
      </span>
      <input
        type="search"
        className="form-control ps-6"
        placeholder="البحث في الدورات"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </form>
  </div>
);

export default SearchForm;
