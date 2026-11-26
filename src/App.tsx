import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { SlideDeckPage } from './pages/SlideDeckPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subject/:subjectSlug" element={<SubjectPage />} />
        <Route
          path="/subject/:subjectSlug/class/:classSlug"
          element={<SlideDeckPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
