export default function BusinessCentral() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🏢 Section 4</div>
        <h1>ERP — Microsoft Dynamics 365 Business Central</h1>
        <p>
          Microsoft Dynamics 365 Business Central is CCIL's new enterprise ERP system, replacing the legacy
          Navision 2016. It is the authoritative master database for all financial, inventory, order, pricing,
          and compliance data. Implementation is by Transform Infotech, Mumbai.
        </p>
      </div>

      <div className="section">
        <div className="section-title">📊 Implementation Status</div>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <p><strong>Data Migration (M4) is partially complete.</strong> Integration Testing (M5) and UAT (M6) are pending. The hard Go-Live deadline is <strong>April 1, 2026</strong>. There is no buffer if delays continue.</p>
        </div>
        <div className="milestone-list">
          {[
            { id:'M1', name:'Assessment & Planning', date:'24 Jan 2026', pct:'20%', status:'done', statusLabel:'Complete' },
            { id:'M2', name:'Solution Design & Environment Setup', date:'3 Feb 2026', pct:'5%', status:'done', statusLabel:'Complete' },
            { id:'M3', name:'Core Configuration & Extension Development', date:'23 Feb 2026', pct:'5%', status:'done', statusLabel:'Complete' },
            { id:'M4', name:'Data Migration — Trial Loads', date:'10 Mar 2026', pct:'10%', status:'partial', statusLabel:'Partially Done' },
            { id:'M5', name:'Integration & System Testing', date:'20 Mar 2026', pct:'20%', status:'pending', statusLabel:'Pending' },
            { id:'M6', name:'UAT, Training & Cut-over Preparations', date:'15 Mar 2026', pct:'20%', status:'pending', statusLabel:'Pending' },
            { id:'M7', name:'GO-LIVE & Stabilization ★', date:'01 Apr 2026', pct:'10%', status:'critical', statusLabel:'HARD DATE' },
            { id:'M8', name:'Phase II — Post Go-Live Requirements', date:'15 Jun 2026', pct:'10%', status:'future', statusLabel:'Future' },
          ].map(m => (
            <div key={m.id} className="milestone-item">
              <div className={`milestone-dot milestone-dot-${m.status}`} />
              <div className="milestone-content">
                <h4>{m.id} — {m.name}</h4>
                <p>Payment: {m.pct} of contract</p>
              </div>
              <div className="milestone-right">
                <span className="milestone-date">{m.date}</span>
                <span className={`badge badge-${m.status === 'done' ? 'success' : m.status === 'partial' ? 'warning' : m.status === 'pending' ? 'muted' : m.status === 'critical' ? 'danger' : 'muted'}`}>
                  {m.statusLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">📋 Scope of Work</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Module</th><th>Scope Details</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Financial Accounting</strong></td><td>Balance Sheet & P&L under Schedule VI, budget vs. actual dashboards, all reconciliations automated</td></tr>
              <tr><td><strong>Fixed Asset Management</strong></td><td>FAR with automated depreciation (Companies Act + Income Tax Act), barcode tagging, automated cut-off determination</td></tr>
              <tr><td><strong>Procurement — Imports</strong></td><td>Bonded warehouse, HS code mapping, duty tracking, forex gain/loss, freight forwarder allocation, CHA master</td></tr>
              <tr><td><strong>Procurement — Domestic</strong></td><td>Approved rate cards, Material Requisition, 3-way PO matching, automated GRN, vendor aging reports</td></tr>
              <tr><td><strong>Inventory & Warehousing</strong></td><td>Multi-location, bin-level tracking with barcode integration, dead stock pop-ups, automated e-Way bill</td></tr>
              <tr><td><strong>Sales & Distribution</strong></td><td>Domestic & export sales, SO creation from CRM staging, PDC management, dispatch automation</td></tr>
              <tr><td><strong>GST Compliance</strong></td><td>SGST/CGST/IGST auto-determination, e-Invoice trigger, GSTR-1/GSTR-2B/GSTR-3B automation, HSN mapping</td></tr>
              <tr><td><strong>Receivables</strong></td><td>Milestone-based tracking, automated email reminders, aging sheets, commission sheet generation</td></tr>
              <tr><td><strong>Payables</strong></td><td>MSME tracking, automated aging reports, payment approval workflows</td></tr>
              <tr><td><strong>Banking & Cash</strong></td><td>Automated daily bank reconciliation, BG/LC aging reports, daily balance emailers to management</td></tr>
              <tr><td><strong>CRM Integration</strong></td><td>OData REST API pages for all entities — Items, Customers, Stock, Sales Orders, Financials</td></tr>
              <tr><td><strong>Data Migration</strong></td><td>From Navision 2016 — data cleansing, standardization, trial loads, reconciliation</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">💰 Commercial Details</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Parameter</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Vendor</strong></td><td>Transform Infotech, Mumbai — Shekhar Nadkar (Proprietor)</td></tr>
              <tr><td><strong>Contract Value</strong></td><td>₹15,00,000 — Fixed, Lump Sum, All-Inclusive</td></tr>
              <tr><td><strong>Travel Expenses</strong></td><td>Reimbursable up to ₹75,000 (with prior written approval)</td></tr>
              <tr><td><strong>Post Go-Live Support</strong></td><td>₹1,250/hour (on written approval only)</td></tr>
              <tr><td><strong>Penalty for Delay</strong></td><td>0.5% per week beyond April 1, 2026 — capped at 5% of contract</td></tr>
              <tr><td><strong>Retention</strong></td><td>5% withheld per RA bill — released after 1-year defect liability period</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📦 Data Migration</div>
        <div className="section-body">
          <p>
            Data migration from <strong>Navision 2016</strong> to <strong>Business Central</strong> is one of the most complex and risk-prone phases of the ERP implementation.
            The migration process includes data extraction, cleansing, standardization, transformation, trial loads, and final reconciliation.
          </p>
        </div>
        <div className="card-grid-3">
          {[
            { icon:'📤', name:'Extraction', desc:'Historical data from Navision 2016: customers, vendors, items, open orders, GL balances, fixed assets' },
            { icon:'🧹', name:'Cleansing', desc:'De-duplication, normalization of master data, correction of GST/PAN fields, HSN code standardization' },
            { icon:'🔄', name:'Transformation', desc:'Mapping Navision data structures to BC 365 field format, currency conversion, posting group assignment' },
            { icon:'🧪', name:'Trial Loads', desc:'Multiple trial migration runs to validate data integrity (Milestone M4 — partially complete)' },
            { icon:'✅', name:'Reconciliation', desc:'Reconcile migrated balances against Navision closing balances before final cut-over' },
            { icon:'🚀', name:'Cut-Over', desc:'Final migration at go-live weekend — Navision closed, BC becomes live system of record' },
          ].map(s => (
            <div key={s.name} className="card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">🤖 AI Features in Business Central</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>AI Feature</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Inventory Cut-off Logic</strong></td><td>AI-assisted reorder suggestions based on historical and recent sales data with manual override feature</td></tr>
              <tr><td><strong>AI-Assisted Dashboards</strong></td><td>Real-time management dashboards with intelligent KPIs, financial ratios, and alerts</td></tr>
              <tr><td><strong>Automated Reconciliations</strong></td><td>Customer and vendor reconciliation with AI-generated synopsis and variance explanations</td></tr>
              <tr><td><strong>Slow/Dead Stock Detection</strong></td><td>Periodic AI pop-ups identifying slow-moving and dead stock with suggested actions</td></tr>
              <tr><td><strong>Automated Emailers</strong></td><td>Receivable due-date reminders, daily bank balances, and management reports auto-sent</td></tr>
              <tr><td><strong>Commission Sheet Automation</strong></td><td>Auto-generated commission based on receivables, project costing & WO/PO mapping</td></tr>
              <tr><td><strong>Microsoft Copilot</strong></td><td>Native BC 365 Copilot for natural language queries, GL entry suggestions, and workflow assistance</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
