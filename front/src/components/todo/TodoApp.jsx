import './TodoApp.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent' 
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthenticatedRouter({children}){
    const  authContext = useAuth()
    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRouter>
                                <WelcomeComponent/>
                            </AuthenticatedRouter>
                        }/>
                        <Route path='/todos' element={
                            <AuthenticatedRouter>
                                <ListTodosComponent/>
                            </AuthenticatedRouter>
                        }/>
                        <Route path='/todo/:id' element={
                            <AuthenticatedRouter>
                                <TodoComponent/>
                            </AuthenticatedRouter>
                        }/>
                        <Route path='/logout' element={
                            <AuthenticatedRouter>
                                <LogoutComponent/>
                            </AuthenticatedRouter>
                        }/>
                        <Route path='*' element={<ErrorComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}