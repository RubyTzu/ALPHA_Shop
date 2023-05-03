//import

//export
export default function FormInput({ inputLabel, children }) {
  return (
    <>
      <div className="input-label">{inputLabel}</div>
      {children}
    </>
  );
}
