import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query";
import TableView from "./tableComponent/TableView";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddButton from "./tableComponent/AddButton";
import FormField from "./tableComponent/FormField";

const queryClient = new QueryClient()
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddButton />}></Route>
        <Route path="/formField" element={<FormField />}></Route>
      </Routes>
      </BrowserRouter>
      <TableView />
    </QueryClientProvider>
  )
}

export default App;
