export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 35;
  const active: boolean = false;

  const powers: string[] = ['Vel', 'Fly', 'Eat'];

  return (
    <>
      <h3>BasicTypes</h3>
      <b>name:</b> {name}, <b>age:</b> {age}, <b>is active?:</b> {(active) ? 'is active' : 'is not active'} <br />
      <b>powers:</b> {powers.join(', ')}
    </>
  );
};
