import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import CartPage from './containers/CartPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// export function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
