import { LoginPage } from './main/login-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './main/dashboard';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>

    </BrowserRouter>
    </Provider>


  )
}

export default App
