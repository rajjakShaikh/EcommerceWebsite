 import Home from "./component/Home"
 import About from "./component/About"
//  import Service from "./component/Service"
 import Contact from "./component/Contact"
 import Login from "./component/Login"
 import Men from "./component/Men"
 import Women from "./component/Women"
 import Kids from "./component/Kids"
import Notfound  from "./component/Notfound"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardDetails from "./component/CardDetails"


import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <div className="App">
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />

          <Route path="/About" element={<About />} />
          {/* <Route path="/Service" element={<Service />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/*" element={<Navigate to="/Notfound" />} />

          <Route path="/Notfound" element={<Notfound />} />
          <Route path="/cart/:id" element={<CardDetails />} />


        </Routes>
      </BrowserRouter>

      </Provider>

    </div>
  );
};

export default App;
