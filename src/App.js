// import AuthProvider from './lib/auth-provider';
import HomePage from './pages/Home';
import AdminConsolePage from "./pages/AdminConsole";
import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from "./components/Dashboard/Dashboard";

import { Switch, Route } from "react-router-dom";

import { useState } from 'react';

function App() {

    const [about, setAbout] = useState(false);

    // return (
    //     <div className="App">
    //         <Header setAbout={setAbout}/>
    //         {about?(
    //             <AboutPage/>
    //         ):(
    //             <div className="content">
    //                 <Route path="/dashboard" component={Dashboard}/>
    //                 <HomePage setAbout={setAbout}/>
    //                 <Footer />
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Header setAbout={setAbout}/>
                    {about?(
                        <AboutPage/>
                    ):(
                        <div className="content">
                            <HomePage setAbout={setAbout}/>
                            <Footer />
                        </div>
                    )}
                </Route>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    );

}

export default App;
