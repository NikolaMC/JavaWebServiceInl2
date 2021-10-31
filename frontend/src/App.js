import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/views/users/Home";
import Products from "./Components/views/products/Products";
import { PrivateRoute } from "./Components/routeComponents/PrivateRoute";
import { LoggedInRoute } from "./Components/routeComponents/LoggedInRoute";

const App = () => {
    return (
        <Router className="App">
            <LoggedInRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/products" component={Products} />
        </Router>
    )
}

export default App;
