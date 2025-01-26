import { Route, Switch, useLocation } from 'react-router-dom';

// import AuthProvider from './lib/auth-provider';
import HomePage from './pages/Home';
import AdminConsolePage from "./pages/AdminConsole";
import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation();
    return (
        // <AuthProvider>
            <div className="App">
                <div className="content">
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/close" exact>
                        <HomePage />
                    </Route>
                    <Route path="/admin" exact>
                        <AdminConsolePage />
                    </Route>
                    <Route path="/login" exact>
                        <LoginPage />
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage />
                    </Route>
                </Switch>
                </div>
                <Footer />
            </div>
        // </AuthProvider>
    );

}

export default App;
