function ItemCard({ items, endIndex,perPage}) {
  const startIndex = endIndex - perPage;
  const persons = items.slice(startIndex, endIndex);
  console.log(persons);
  return (
    <div>
      {persons.map((item) => {
        return (
          <div className="border-2 border-spacing-1 m-5" key={item.name}>
            <div className="p-2">
              {" "}
              {item.name}
              {item.gender}
              {item.bio}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
