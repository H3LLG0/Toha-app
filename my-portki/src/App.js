import { BrowserRouter,Routes, Route } from "react-router-dom";
import { MainPage } from "./Components/Pages/MainPage";
import { PricePage, OurWork, CreateOrder } from "./Components/Pages/Pages";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/price" element={<PricePage/>}/>
        <Route path="/Our-work" element={<OurWork/>}/>
        <Route path="/create-order" element={<CreateOrder/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
