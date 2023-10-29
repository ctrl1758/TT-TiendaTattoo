import React from "react";

export default function FormTalles({ item, keysStock, settalle }) {
  console.log(keysStock);

  const isDisabled = item > 0;
  return (
    <>
      {isDisabled ? (
        <>
          <input
            type="radio"
            className="btn-check"
            name="optionsTalle"
            id={keysStock}
            onClick={(e) => settalle(e.target.id)}
          />
          <label className="btn btn-outline-secondary" htmlFor={keysStock}>
            {keysStock}
          </label>
        </>
      ) : (
        <>
          <input
            type="radio"
            className="btn-check"
            name="optionsTalle"
            id={keysStock}
            onClick={(e) => settalle(e.target.id)}
            disabled
          />
          <label className="btn btn-outline-secondary" htmlFor={keysStock}>
            {keysStock}
          </label>
        </>
      )}
    </>
  );
}
