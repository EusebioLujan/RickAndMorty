export default function SearchBar(props) {
   return (
      <form onSubmit={props.onSearch}>
        <input class="searchbarin" type="text" placeholder="Search..." />
        <button class="searchbarbut" type="submit">ADD</button>
      </form>
    );
}
