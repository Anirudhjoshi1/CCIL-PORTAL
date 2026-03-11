import { Link } from 'react-router-dom'

const quickLinks = [
  { path: '/overview', emoji: '📋', label: 'Project Overview' },
  { path: '/architecture', emoji: '🏗️', label: 'System Architecture' },
  { path: '/mi-client', emoji: '💼', label: 'MI Client (CRM)' },
  { path: '/business-central', emoji: '🏢', label: 'ERP – Business Central' },
  { path: '/ai-features', emoji: '🤖', label: 'AI Functionalities' },
  { path: '/data-flow', emoji: '🔄', label: 'Data Flow' },
  { path: '/integrations', emoji: '🔌', label: 'System Integrations' },
  { path: '/project-status', emoji: '📊', label: 'Project Status' },
  { path: '/future-development', emoji: '🚀', label: 'Future Development' },
]

export default function Home() {
  return (
    <div>
      <div className="home-hero">
        <div className="home-hero-tag">🏭 CCIL · ERP & CRM Transformation · 2026</div>
        <h1>
          Technical Documentation<br />
          <span>Portal</span>
        </h1>
        <p>
          Single source of truth for CCIL's digital transformation — covering the MI Client CRM and
          Microsoft Dynamics 365 Business Central ERP implementation, integration architecture, AI features,
          and development roadmap.
        </p>
        <div className="status-bar">
          <div className="status-chip">
            <span className="status-chip-label">MI Client Phase 1</span>
            <span className="badge badge-success">✓ Complete</span>
          </div>
          <div className="status-chip">
            <span className="status-chip-label">MI Client Phase 2</span>
            <span className="badge badge-danger">Not Started</span>
          </div>
          <div className="status-chip">
            <span className="status-chip-label">ERP Data Migration</span>
            <span className="badge badge-warning">In Progress</span>
          </div>
          <div className="status-chip">
            <span className="status-chip-label">ERP Go-Live Target</span>
            <span className="badge badge-danger">1 Apr 2026 ★</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📑 Quick Navigation</div>
        <div className="quick-nav">
          {quickLinks.map(link => (
            <Link key={link.path} to={link.path} className="quick-nav-item">
              <span className="nav-emoji">{link.emoji}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">⚡ At a Glance</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🏭</div>
            <h3>About CCIL</h3>
            <p>Consolidated Carpet Industries Limited, New Delhi. Manufactures broadloom carpets, carpet tiles, vinyl, wooden flooring, and specialty flooring solutions.</p>
          </div>
          <div className="card">
            <div className="card-icon">💼</div>
            <h3>MI Client CRM</h3>
            <p>AI-enabled sales automation CRM by MiClient Pvt. Ltd. (Gurgaon). Phase 1 live — Phase 2 (ERP integration, AI, OCR) pending. Contract: ₹7,32,000 + GST.</p>
          </div>
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>ERP – Business Central</h3>
            <p>Microsoft Dynamics 365 BC replacing legacy Navision 2016. Implemented by Transform Infotech (Mumbai). Contract: ₹15,00,000. Go-live: April 1, 2026.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔌</div>
            <h3>Integration</h3>
            <p>8 data flows connecting CRM (frontend) ↔ ERP (master backend) via OData REST APIs with OAuth 2.0. API contracts not yet finalized — critical risk.</p>
          </div>
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>AI Features</h3>
            <p>OCR data capture, AI chatbot for stock reservation, image-based product matching, MIS dashboards with synopsis, order AI parsing, dead stock detection.</p>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Key Stakeholders</h3>
            <p>CCIL: Ashish Garg (CFO), Dhruv Sodhani (Director), Anil Mehta. Vendor ERP: Shekhar Nadkar (Transform). CRM: Chandan Ghosh, Navneet Choudhary, Zohra (MiClient). Oversight: Dr. Pal.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">⚠️ Critical Alerts</div>
        <div className="callout callout-danger">
          <span className="callout-icon">🔴</span>
          <p><strong>API Contract Gap:</strong> Transform Infotech (ERP) and MiClient (CRM) have never aligned on API contracts. Both teams are building independently — this is the most critical risk to the April 1 Go-Live deadline.</p>
        </div>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <p><strong>MI Client Phase 2 Overdue:</strong> ERP integration, OCR, and AI features were due December 2025. Phase 2 Go-Live (originally Jan 2026) has not started. All AI features are Part of Phase 2.</p>
        </div>
        <div className="callout callout-info">
          <span className="callout-icon">ℹ️</span>
          <p><strong>Data Migration in Progress:</strong> Milestone M4 (Data Migration — Trial Loads) is partially complete. M5 (Integration Testing) and M6 (UAT) are still pending before the April 1 hard deadline.</p>
        </div>
      </div>
    </div>
  )
}
