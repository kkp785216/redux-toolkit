import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const Layout = ({ children }) => {
  return (<>
    {children}
  </>)
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Layout>
                <Navbar />
                <Home />
              </Layout>
            } />
            <Route path='/cart' element={
              <Layout>
                <Navbar />
                <Cart />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
