import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/loginPage";
import { HomePage } from "./pages/homePage";
import { createClient } from "@supabase/supabase-js";

function App() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  );

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage supabase={supabase}></LoginPage>}
      ></Route>
      <Route
        path="/home"
        element={<HomePage supabase={supabase}></HomePage>}
      ></Route>
    </Routes>
  );
}

export default App;
