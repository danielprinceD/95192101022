import axios from "axios";
import { useState } from "react";

const data = {
  companyName: "PSR Engineering College",
  clientID: "d37a1870-1c12-41a2-8fbe-dba8546dd931",
  clientSecret: "xpcXtMvaOiymUmXM",
  ownerName: "Daniel Prince D",
  ownerEmail: "d.danielprince2003@gmail.com",
  rollNo: "95192101022",
};

function App() {
  const [top, setTop] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [company, setCompany] = useState("");
  const [cat, setCat] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `http://localhost:4000/categories/${cat}/products`
    );
    setList(result.data);
    console.log(result.data);
  };
  return (
    <div className="App">
      <form action="post" onSubmit={(e) => handleSubmit(e)}>
        <br />
        <br />
        <label htmlFor="name">Category : </label>
        <input
          type="text"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          required
        />
        <button> Submit</button>
      </form>
      {list &&
        list.map((it) => (
          <div>
            Product Name : <p>{it.productName}</p>
            Price : <p>{it.price}</p>
            Rating : <p>{it.rating}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
