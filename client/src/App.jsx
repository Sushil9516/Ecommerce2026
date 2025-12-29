import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* Common Components */}
        <h1>Header Component</h1>
        <Routes>
          <Route path="/*" element={<h1>Home Component</h1>} />
          <Route path="/auth" element={<AuthLayout />}>
            {" "}
            {/* Nested(Parent) Routes for AuthLayout */}
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
