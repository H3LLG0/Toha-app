import { BrowserRouter,Routes, Route } from "react-router-dom";
import { MainPage } from "./Components/Pages/MainPage";
import { PricePage, CreateOrder } from "./Components/Pages/Pages";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/price" element={<PricePage/>}/>
        <Route path="/create-order" element={<CreateOrder/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
