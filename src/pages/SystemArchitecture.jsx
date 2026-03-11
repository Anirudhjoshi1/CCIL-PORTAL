export default function SystemArchitecture() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🏗️ Section 2</div>
        <h1>System Architecture</h1>
        <p>
          The CCIL platform is a two-tier integrated system — ERP as the authoritative master backend,
          CRM as the sales-facing frontend — connected via secure OData REST APIs.
        </p>
      </div>

      <div className="section">
        <div className="section-title">🖼️ Architecture Overview</div>
        <div className="arch-diagram">
          <div className="arch-row">
            <div className="arch-node primary-node">
              <h4>🏢 Microsoft Dynamics 365</h4>
              <h4>Business Central (ERP)</h4>
              <p>Master System · Source of Truth</p>
              <p style={{marginTop: 6}}><small>Transform Infotech</small></p>
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 4}}>
            <div style={{display:'flex', gap:40, fontSize:12, color:'var(--text-muted)'}}>
              <span>← ERP→CRM: Master Data, Stock, Financials</span>
              <span>CRM→ERP: Orders, Reservations, Quotes →</span>
            </div>
            <div style={{width: 2, height: 40, background: 'var(--border-strong)'}} />
            <div style={{fontSize: 20}}>⇅</div>
            <div style={{width: 2, height: 40, background: 'var(--border-strong)'}} />
          </div>

          <div className="arch-row">
            <div className="arch-node accent-node">
              <h4>💼 MiClient CRM</h4>
              <p>Sales Frontend · Used by Sales Team Daily</p>
              <p style={{marginTop: 6}}><small>MiClient Pvt. Ltd.</small></p>
            </div>
          </div>

          <div style={{display:'flex', gap: 20, marginTop: 8}}>
            <div style={{width: 2, height: 32, background: 'var(--border-default)'}} />
            <div style={{width: 2, height: 32, background: 'var(--border-default)'}} />
            <div style={{width: 2, height: 32, background: 'var(--border-default)'}} />
          </div>

          <div className="arch-row" style={{gap: 12, flexWrap:'wrap'}}>
            <div className="arch-node" style={{minWidth:130, padding:'10px 16px'}}>
              <h4 style={{fontSize:12}}>📱 WhatsApp API</h4>
              <p style={{fontSize:11}}>Order delivery & chatbot</p>
            </div>
            <div className="arch-node" style={{minWidth:130, padding:'10px 16px'}}>
              <h4 style={{fontSize:12}}>📄 OCR Engine</h4>
              <p style={{fontSize:11}}>Visiting cards & documents</p>
            </div>
            <div className="arch-node" style={{minWidth:130, padding:'10px 16px'}}>
              <h4 style={{fontSize:12}}>🤖 AI / LLM</h4>
              <p style={{fontSize:11}}>MIS dashboards & parsing</p>
            </div>
            <div className="arch-node" style={{minWidth:130, padding:'10px 16px'}}>
              <h4 style={{fontSize:12}}>🏗️ n8n Workflows</h4>
              <p style={{fontSize:11}}>Automation orchestration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">⚖️ System Roles & Ownership</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>MiClient CRM</th>
                <th>Business Central ERP</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Role</strong></td><td>Frontend — Sales team uses this daily</td><td>Backend — Master database & system of record</td></tr>
              <tr><td><strong>Owns</strong></td><td>Leads, quotes, PIs, customer interactions</td><td>Stock, pricing, invoices, financials, orders</td></tr>
              <tr><td><strong>API Responsibility</strong></td><td>CRM-side connectors (MiClient builds)</td><td>ERP-side API Pages (Transform Infotech builds)</td></tr>
              <tr><td><strong>Who is Master?</strong></td><td>Follower — reads from ERP</td><td>Master — source of truth</td></tr>
              <tr><td><strong>Conflict Resolution</strong></td><td>ERP always wins</td><td>ERP always wins</td></tr>
              <tr><td><strong>Users</strong></td><td>Sales team, Sales Managers</td><td>Finance, Accounts, Operations, Management</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🛠️ Technical Stack</div>
        <div className="card-grid-2">
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>ERP Stack</h3>
            <ul className="doc-list" style={{marginTop:8}}>
              <li>Microsoft Dynamics 365 Business Central (Cloud)</li>
              <li>AL language for custom extensions</li>
              <li>OData v4 REST APIs (standard BC API Pages)</li>
              <li>Azure Active Directory (OAuth 2.0 authentication)</li>
              <li>Power BI for advanced analytics (planned)</li>
              <li>Microsoft Copilot (native AI features)</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-icon">💼</div>
            <h3>CRM Stack</h3>
            <ul className="doc-list" style={{marginTop:8}}>
              <li>MiClient CRM (proprietary SaaS web application)</li>
              <li>REST API connectors for BC 365 integration</li>
              <li>OCR engine (visiting cards, PO/WO/email documents)</li>
              <li>WhatsApp Business API (quote delivery & chatbot)</li>
              <li>AI/ML models for MIS dashboards and recommendations</li>
              <li>n8n workflow automation (integration orchestration)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🔌 API Architecture</div>
        <div className="section-body">
          <p>
            Business Central exposes data through <strong>OData REST APIs</strong> — Microsoft's standard for BC cloud.
            MiClient calls these APIs from the CRM side. The integration follows a standard REST pattern:
          </p>
        </div>
        <div className="code-block">
{`// BC 365 API endpoint pattern (OData v4)
GET  /api/v2.0/companies({id})/items
POST /api/v2.0/companies({id})/salesOrders
GET  /api/v2.0/companies({id})/items/{itemId}/itemVariants

// Authentication: OAuth 2.0 via Azure Active Directory
Authorization: Bearer {access_token}

// Data format: JSON
Content-Type: application/json`}
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>API Component</th>
                <th>Built By</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>API Pages in BC</strong></td><td>Transform Infotech</td><td>Custom AL API pages per data entity (Items, Customers, Sales Orders, Stock, etc.)</td></tr>
              <tr><td><strong>CRM Connectors</strong></td><td>MiClient</td><td>CRM-side HTTP clients calling BC OData endpoints</td></tr>
              <tr><td><strong>Authentication</strong></td><td>Azure AD</td><td>OAuth 2.0 with client credentials flow</td></tr>
              <tr><td><strong>Data Format</strong></td><td>Both</td><td>JSON payloads for all requests and responses</td></tr>
              <tr><td><strong>Staging Table</strong></td><td>Transform Infotech</td><td>BC-side buffer for incoming CRM orders before processing</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🏭 ERP Modules in Scope</div>
        <div className="card-grid-3">
          {[
            {icon:'💰', name:'Financial Accounting', desc:'Balance sheet, P&L, Schedule VI, budget vs actual'},
            {icon:'🏗️', name:'Fixed Assets', desc:'FAR with depreciation automation (Companies Act & IT Act)'},
            {icon:'📦', name:'Procurement', desc:'Domestic & imports with bonded warehouse, duty tracking, forex'},
            {icon:'🏪', name:'Inventory & Warehouse', desc:'Multi-location, bin-level with barcode integration'},
            {icon:'🛒', name:'Sales & Distribution', desc:'Domestic & export sales, channel partner management'},
            {icon:'📋', name:'GST Compliance', desc:'E-Way Bill, E-Invoice, GSTR automation, HSN mapping'},
            {icon:'💳', name:'Receivables & Payables', desc:'Aging, milestone tracking, automated reminders'},
            {icon:'🏦', name:'Banking & Cash', desc:'LC/BG management, automated daily reconciliation'},
            {icon:'📊', name:'AI Dashboards', desc:'Intelligent KPIs, MIS alerts, management reports'},
          ].map(m => (
            <div key={m.name} className="card">
              <div className="card-icon">{m.icon}</div>
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">⚠️ Critical Architecture Risks</div>
        <div className="risk-list">
          <div className="risk-item">
            <div>
              <h4>API Contract Misalignment</h4>
              <p>Transform Infotech and MiClient have built their integration components independently without agreeing on a shared API contract. Field names, data formats, and authentication may not match when connected.</p>
            </div>
          </div>
          <div className="risk-item">
            <div>
              <h4>Two-Vendor Coordination Gap</h4>
              <p>ERP and CRM are being built by different vendors who have not held a joint technical meeting. This is the single most critical risk to the April 1, 2026 Go-Live deadline.</p>
            </div>
          </div>
          <div className="risk-item">
            <div>
              <h4>Real-Time vs Scheduled Sync Not Decided</h4>
              <p>Stock reservation must be real-time (5-minute delay can cause double booking). Sales Order creation can be near-real-time. MIS dashboards can be scheduled. These SLAs are not yet formally defined.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
