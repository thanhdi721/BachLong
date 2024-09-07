import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/index";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <PageTracker/> */}
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          return <Route path={route.path} element={<Page />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
