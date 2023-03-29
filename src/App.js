import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import OrderedProducts from "./Components/OrderedProducts";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import SignUp2 from "./Components/SignUp2";
import EditProfile from "./Components/EditProfile"
import About from "./Components/About"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/getById/:productId" component={Product}/>
        <Route exact path="/signup" component={SignUp2}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/orderedProducts" component={OrderedProducts}/>
        <Route exact path="/addProduct" component={AddProduct}/>
        <Route exact path="/editProfile" component={EditProfile}/>
        <Route exact path="/about" component={About}/>
        {/* <Route exact path="/about" */}
      </Switch>
    </>
  );
}

export default App;
