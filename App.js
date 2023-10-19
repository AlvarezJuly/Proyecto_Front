import React, { Suspense } from "react";
import { fetchData } from "./src/fetchData.js";
import "./src/App.css"


const apiData= fetchData("https://localhost:44358/api/Clientes");

function App(){

  const data = apiData.read();
  console.log(data)
  return(
    <div className="App">
      <h1>Clientes de Pulperia_JA</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id_cliente}> {item.nombre} {item.apellido} {item.telefono}</li>
          ))}
          </ul>
          </Suspense>
          </div>
  );

  }
export default App;