import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectOverview from './pages/ProjectOverview'
import SystemArchitecture from './pages/SystemArchitecture'
import MIClient from './pages/MIClient'
import BusinessCentral from './pages/BusinessCentral'
import AIFeatures from './pages/AIFeatures'
import DataFlow from './pages/DataFlow'
import Integrations from './pages/Integrations'
import ProjectStatus from './pages/ProjectStatus'
import FutureDevelopment from './pages/FutureDevelopment'

const NAV = [
  { path: '/', label: 'Home', icon: '🏠', section: 'main' },
  { path: '/overview', label: 'Project Overview', icon: '📋', section: 'docs' },
  { path: '/architecture', label: 'System Architecture', icon: '🏗️', section: 'docs' },
  { path: '/mi-client', label: 'MI Client (CRM)', icon: '💼', section: 'docs' },
  { path: '/business-central', label: 'ERP – Business Central', icon: '🏢', section: 'docs' },
  { path: '/ai-features', label: 'AI Functionalities', icon: '🤖', section: 'docs' },
  { path: '/data-flow', label: 'Data Flow', icon: '🔄', section: 'docs' },
  { path: '/integrations', label: 'System Integrations', icon: '🔌', section: 'docs' },
  { path: '/project-status', label: 'Project Status', icon: '📊', section: 'status' },
  { path: '/future-development', label: 'Future Development', icon: '🚀', section: 'status' },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <div className="sidebar-logo-badge">
            <span>CCIL Docs</span>
          </div>
          <h2>CCIL Technical Portal</h2>
          <p>Digital Transformation 2026</p>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-label">Navigation</div>
          <ul className="sidebar-nav">
            {NAV.filter(n => n.section === 'main').map(item => (
              <li key={item.path}>
                <NavLink to={item.path} end className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-label">Documentation</div>
          <ul className="sidebar-nav">
            {NAV.filter(n => n.section === 'docs').map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-label">Status & Roadmap</div>
          <ul className="sidebar-nav">
            {NAV.filter(n => n.section === 'status').map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <p>Prepared by Anirudh<br />Under supervision of Dr. Pal<br />March 2026 · Confidential</p>
        </div>
      </aside>
    </>
  )
}

function TopBar({ onMenuClick }) {
  const location = useLocation()
  const current = NAV.find(n => n.path === location.pathname) || NAV[0]
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="hamburger-btn" onClick={onMenuClick} aria-label="Open menu">
          ☰
        </button>
        <div className="topbar-breadcrumb">
          <span>CCIL</span>
          <span className="sep">/</span>
          <span className="current">{current?.label}</span>
        </div>
      </div>
      <div className="topbar-meta">
        <span>Version 1.0 · March 2026</span>
        <div className="live-badge">
          <div className="live-dot" />
          Live Docs
        </div>
      </div>
    </header>
  )
}

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="app-layout">
      <Sidebar isOpen={isMobileMenuOpen} onClose={closeMenu} />
      <div className="main-area">
        <TopBar onMenuClick={toggleMenu} />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<ProjectOverview />} />
          <Route path="/architecture" element={<SystemArchitecture />} />
          <Route path="/mi-client" element={<MIClient />} />
          <Route path="/business-central" element={<BusinessCentral />} />
          <Route path="/ai-features" element={<AIFeatures />} />
          <Route path="/data-flow" element={<DataFlow />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/project-status" element={<ProjectStatus />} />
          <Route path="/future-development" element={<FutureDevelopment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
