interface Person {
    fullName: string;
    age: number;
    address: Address
}

interface Address {
    country: string;
    n: number;
}

export const LiteralObject = () => {
  const person: Person = {
    fullName: "Fernando",
    age: 35,
    address: {
      country: "Canada",
      n: 615,
    },
  };

  return (
    <>
      <h3>LiteralObject</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
