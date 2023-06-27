import React from "react";
import Card1 from "./CardsComponent/Card1";
import Card2 from "./CardsComponent/Card2";
import Card3 from "./CardsComponent/Card3";

function App() {
  return (
    <>
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
    </section>
    </>
  );
}

export default App;



