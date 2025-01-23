import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import APODList from '../components/FetchAPOD/FetchAPOD';
import LoginOutPage from '../pages/Login';
import NotFound from '../pages/404Page';
import Contact from '../components/Contact/Contact';
import PrivateRoute from '../auth/PrivateRoute';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apodlist" element={
                <PrivateRoute>
                    <APODList />
                </PrivateRoute>
            } />
            <Route path='/loginout-page' element={<LoginOutPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}