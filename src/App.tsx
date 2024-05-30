import { LoginPage } from './main/login-page';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './main/dashboard';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';


function App() {

  return (
    <Provider store={store}>
    <HashRouter>
    <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </HashRouter>
    </Provider>


  )
}

export default App
