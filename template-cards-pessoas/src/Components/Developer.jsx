import "./Developer.css"

export const Developer = ({ name, age, country }) => {
  return (
    <div className="div">
      <label className="usuario" htmlFor="name">Dev: {name}</label>
      <br />
      <label htmlFor="age">Idade: {age}</label>
      <br />
      <label htmlFor="country">País: {country}</label>
    </div>
  );
};
