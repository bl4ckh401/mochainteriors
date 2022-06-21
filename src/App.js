import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import CartPage from './containers/CartPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './components/Editor';
import Unprotected from './Unprotected';


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
      <Router>
        <Routes>
          <Route path='/' element={<Unprotected />} />
        </Routes>
      </Router>
      <Footer />
      <div className='parallax' id='parallax2_image'>
        <div className='overlay'></div>
      </div>
    </div>
  );
}

export default App;
