import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'C:/projetos/dsmovie/frontend/src/pages/Listing';
import Form from 'C:/projetos/dsmovie/frontend/src/pages/Form';
import Navbar from 'C:/projetos/dsmovie/frontend/src/components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;