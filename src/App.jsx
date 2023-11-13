import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import HomePage from "./pages/HomePage";
import Enroll from "./pages/Enroll";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route index path="/home" element={<HomePage />} />
            <Route path="/enroll" element={<Enroll />} />
          </Route>

          <Route path="/login" element={<p>Login</p>} />
          <Route path="/signup" element={<p>Sign Up</p>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#323232",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
