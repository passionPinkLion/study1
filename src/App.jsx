import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sukhun from "./pages/sukhun";
import Main from "./pages/main";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import D from "./pages/d";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen min-w-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/A" element={<A />} />
          <Route path="/B" element={<B />} />
          <Route path="/C" element={<C />} />
          <Route path="/D" element={<D />} />
          <Route path="/sukhun" element={<Sukhun />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
