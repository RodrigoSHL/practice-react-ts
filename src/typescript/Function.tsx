export function Function() {
  const add = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Function</h3>
      <span>Result is: {add(10, 5)}</span>
    </>
  );
}
