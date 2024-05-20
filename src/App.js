import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  return (
   
  <>
   <Navbar setCategory={setCategory}/>
   <NewsBoard category={category} />
   <Footer/>
  </>
  );
}

export default App;
