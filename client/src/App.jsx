import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <Main />
            </main>

            <Footer />
        </>
    );
}

export default App;
