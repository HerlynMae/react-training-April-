import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChildrenList from "./components/pages/developer/children-list/ChildrenList";
import Parent from "./components/pages/developer/parent/Parent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient(); // object para magamit ang QueryClientProvider
  return (
    <>
      {/* para ma fetch ang data kaya may QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path={`*`} element={<h1>404 Error</h1>} />
            <Route path={`/children`} element={<ChildrenList />} />
            <Route path={`/parent`} element={<Parent />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
