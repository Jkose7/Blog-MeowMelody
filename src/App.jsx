import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Index } from "./pages/index";
import { CreateNews } from "./pages/createNew";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { ThemeProviter } from "./providers/ThemeProviter.jsx";
import { NewProviter } from "./providers/NewProviter.jsx";

function App() {
  return (
    <ThemeProviter>
      <NewProviter>
        <main className="bg-primary-color dark:bg-second-color -z-10 h-full w-full absolute flex flex-col justify-center py-6 px-5 md:px-16 lg:px-28 xl:px-48 2xl:px-80">
          <Nav />

          <Routes>
            <Route path="/" element={<Index></Index>}></Route>
            <Route
              path="/createNew"
              element={<CreateNews></CreateNews>}
            ></Route>
          </Routes>

          <Footer />
        </main>
      </NewProviter>
    </ThemeProviter>
  );
}

export default App;
