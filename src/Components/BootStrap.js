import React from "react";

function BootStrap() {
  // // typical function
  // function add(a, b) {
  //   return a + b;
  // }
  // const x = add(5, 6);
  // // console.log(x);

  // // Arrow function
  // const sum = (a, b) => a + b;
  // // console.log(sum(4, 3));

  // // template literals
  // const name = "Mohsin";
  // const age = "22";
  // console.log(`my name is ${name} and age ${age}`);

  // // destrcucturing
  // const person = {
  //   Name: "mohsin",
  //   profession: "engineer",
  //   hobbies: "gym",
  // };
  // const { Name, hobbies } = person;
  // // console.log(Name, hobbies);

  // // spread Operator
  // const numbers = [1, 2, 3, 4];
  // const addNumber = [...numbers, 5, 6, 7];
  // // console.log(addNumber);

  // const extendPerson = { ...person, Age: "24" };
  // // console.log(extendPerson);

  // const Numbers = [1, 2, 3, 4, 5];

  // const TwelveAdded = Numbers.map((x) => x + 12);

  // console.log(TwelveAdded);

  // Numbers.forEach((num) => {
  //   console.log(num * 2);
  // });

  // console.log(Numbers);

  // const evenNumbers = Numbers.filter((num) => num * 2 === 10);
  // console.log("Print 5 ", evenNumbers);

  // const found = Numbers.find((num) => num > 3);

  // console.log(found);

  // function fetchData() {
  //   return new Promise((resolve, reject) => {});
  // }

  // async function getData() {
  //   try {
  //     console.log("Fetching data...");

  //     const data = await fetchData();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // getData();

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border">One</div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border"> two</div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 border"> three</div>
    </div>
  );
}

export default BootStrap;
