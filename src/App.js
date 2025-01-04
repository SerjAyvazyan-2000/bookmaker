import './App.css';
import './assets/flex.scss'
import './assets/normalize.scss'
import './assets/icons/icon.scss'

import Header from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Casino from "./pages/casino/casino";
import {Route, Routes, useLocation} from "react-router-dom";
import Replenish from "./pages/replenish/replenish";
import Confirm from "./pages/confirm/confirm";
import {BalanceProvider} from "./BalanceContext";

function App() {
    const location = useLocation();

    const isHomePage = location.pathname === '/home' || location.pathname === '/';
    const isCasinoPage = location.pathname === '/casino';
    const isConfirmPage = location.pathname === '/confirm';

    return (
        <BalanceProvider>
            <div className="App">
                {!isConfirmPage && <Header/>}

                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/casino" element={<Casino/>}/>
                    <Route path="/replenish" element={<Replenish/>}/>
                    <Route path="/confirm" element={<Confirm/>}/>
                </Routes>

                {!isConfirmPage && (
                    <Footer
                        className={`${isHomePage ? 'home-footer' : ''} ${
                            isCasinoPage ? 'casino-footer' : ''
                        }`}
                    />
                )}
            </div>
        </BalanceProvider>

    );
}

export default App;