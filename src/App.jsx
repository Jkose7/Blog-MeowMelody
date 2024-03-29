import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Index } from "./pages/index";
import { CreateNews } from "./pages/createNew";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { ThemeProviter } from "./providers/ThemeProviter.jsx";
import { NewProviter } from "./providers/NewProviter.jsx";

import { ViewNews } from "./pages/viewNews.jsx";

function App() {
  return (
    <NewProviter>
      <ThemeProviter>
        <main className="bg-primary-color dark:bg-second-color -z-10 w-full h-[100vh] flex flex-col justify-center py-10 md:px-16 lg:px-28 xl:px-48 2xl:px-80 gap-2">
          <Nav />

          <Routes>
            <Route
              path="/"
              element={<Index></Index>}
            />
            <Route
              path="/createNew"
              element={<CreateNews></CreateNews>}
            />
            <Route
              path="/news/:title"
              element={<ViewNews></ViewNews>}
            />
          </Routes>

          <Footer />
        </main>
      </ThemeProviter>
    </NewProviter>
  );
}

export default App;
