import { useState } from "react";
import { faker } from "@faker-js/faker";
import Pagination from "./components/Pagination";
import ItemCard from "./components/ItemCard";

function App() {
  const numberOfItemsPerPage = 5;
  const [endIndex, setEndIndex] = useState(numberOfItemsPerPage);
  const numberOfItems = 84;

  const dataList = [];
  const getData = () => {
    for (let i = 0; i < numberOfItems; i++) {
      dataList.push({
        name: faker.person.fullName(),
        gender: faker.person.gender(),
        bio: faker.person.bio(),
        zodiacSign: faker.person.zodiacSign(),
      });
    }
  };
  getData();
  console.log(dataList);
  return (
    <>
      <div className="grid  place-content-center">
        <h1 className="text-3xl ">Pagination In React</h1>
        <ItemCard
          items={dataList}
          endIndex={endIndex}
          perPage={numberOfItemsPerPage}
        />
        <Pagination
          itemsLength={numberOfItems}
          setEndIndex={setEndIndex}
          perPage={numberOfItemsPerPage}
        />
      </div>
    </>
  );
}

export default App;
