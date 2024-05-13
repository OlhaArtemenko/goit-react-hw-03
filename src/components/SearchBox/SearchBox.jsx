export default function SearchBox({ handleSearch }) {
  const handleChange = (event) => {
    const query = event.target.value;
    handleSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </div>
  );
}
