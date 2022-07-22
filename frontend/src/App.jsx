import { CurrentUserContextProvider } from "./contexts/currentUser";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CurrentUserContextProvider>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContextProvider>
    </div>
  );
}

export default App;
