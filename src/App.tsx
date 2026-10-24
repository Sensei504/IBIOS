import { Navigate,Route,Routes } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from './context/AuthContext'
import Brand from './components/Brand'
import Shell from './components/Shell'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import IssuesPage from './pages/IssuesPage'
import UsersPage from './pages/UsersPage'
import AuditPage from './pages/AuditPage'
import ProfilePage from './pages/ProfilePage'
import CommunityPage from './pages/CommunityPage'
import MessagesPage from './pages/MessagesPage'
import DataToolsPage from './pages/DataToolsPage'
import ModerationPage from './pages/ModerationPage'
function LoadingScreen(){return <div className="boot-screen"><Brand/><div className="loader"/><p>Preparing your workspace…</p></div>}
function isAdminRole(role?:string|null){return role==='admin'||role==='super_admin'}
function Protected({children,admin=false}:{children:ReactNode;admin?:boolean}){const{user,loading}=useAuth();if(loading)return <LoadingScreen/>;if(!user)return <Navigate to="/login" replace/>;if(admin&&!isAdminRole(user.role))return <Navigate to="/" replace/>;return <>{children}</>}
export default function App(){const{user,loading}=useAuth();if(loading)return <LoadingScreen/>;return <Routes><Route path="/login" element={user?<Navigate to="/" replace/>:<LoginPage/>}/><Route path="/" element={<Protected><Shell/></Protected>}><Route index element={isAdminRole(user?.role)?<AdminDashboardPage/>:<DashboardPage/>}/><Route path="issues" element={<IssuesPage/>}/><Route path="community" element={<CommunityPage/>}/><Route path="messages" element={<MessagesPage/>}/><Route path="users" element={<Protected admin><UsersPage/></Protected>}/><Route path="audit" element={<Protected admin><AuditPage/></Protected>}/><Route path="data" element={<Protected admin><DataToolsPage/></Protected>}/><Route path="moderation" element={<Protected admin><ModerationPage/></Protected>}/><Route path="profile" element={<ProfilePage/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
