export default function ProjectStatus() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">📊 Section 8</div>
        <h1>Project Status</h1>
        <p>
          Current state of both the MI Client CRM and ERP (Business Central) implementation as of March 2026,
          including milestone tracking, risk register, and immediate action items.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="section">
        <div className="section-title">⚡ Status Summary</div>
        <div className="card-grid-3">
          <div className="card" style={{ borderTop: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="card-icon">✅</div>
              <span className="badge badge-success">Complete</span>
            </div>
            <h3>MI Client — Phase 1</h3>
            <p>CRM is live. Users onboarded. Product catalog and quotation templates configured. Sales team creating quotes manually.</p>
            <p style={{ marginTop: 8, fontSize: 12, color: 'var(--text-muted)' }}>Completed: Nov 2025</p>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="card-icon">🔴</div>
              <span className="badge badge-danger">Not Started</span>
            </div>
            <h3>MI Client — Phase 2</h3>
            <p>ERP integration, OCR, AI features, chatbot, and marketing automation. Was due Dec 2025. Has not started.</p>
            <p style={{ marginTop: 8, fontSize: 12, color: 'var(--danger)' }}>Overdue since: Jan 2026</p>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="card-icon">🟡</div>
              <span className="badge badge-warning">In Progress</span>
            </div>
            <h3>ERP Data Migration</h3>
            <p>M1–M3 complete. M4 (Data Migration Trial Loads) partially done. M5 and M6 pending before April 1 Go-Live.</p>
            <p style={{ marginTop: 8, fontSize: 12, color: 'var(--warning)' }}>Go-Live: 1 Apr 2026 ★ HARD DATE</p>
          </div>
        </div>
      </div>

      {/* ERP Milestones */}
      <div className="section">
        <div className="section-title">🏢 ERP (Business Central) — Milestone Tracker</div>
        <div className="milestone-list">
          {[
            { id: 'M1', name: 'Assessment & Planning', date: '24 Jan 2026', pct: '20%', status: 'done', label: '✓ Complete' },
            { id: 'M2', name: 'Solution Design & Environment Setup', date: '3 Feb 2026', pct: '5%', status: 'done', label: '✓ Complete' },
            { id: 'M3', name: 'Core Configuration & Extension Development', date: '23 Feb 2026', pct: '5%', status: 'done', label: '✓ Complete' },
            { id: 'M4', name: 'Data Migration — Trial Loads', date: '10 Mar 2026', pct: '10%', status: 'partial', label: '⚠ Partially Done' },
            { id: 'M5', name: 'Integration & System Testing', date: '20 Mar 2026', pct: '20%', status: 'pending', label: 'Pending' },
            { id: 'M6', name: 'UAT, Training & Cut-over Preparations', date: '15 Mar 2026', pct: '20%', status: 'pending', label: 'Pending' },
            { id: 'M7', name: 'GO-LIVE & Stabilization ★ HARD DATE', date: '01 Apr 2026', pct: '10%', status: 'critical', label: '🔴 HARD DATE' },
            { id: 'M8', name: 'Phase II — Post Go-Live Requirements', date: '15 Jun 2026', pct: '10%', status: 'future', label: 'Future' },
          ].map(m => (
            <div key={m.id} className="milestone-item">
              <div className={`milestone-dot milestone-dot-${m.status}`} />
              <div className="milestone-content">
                <h4>{m.id} — {m.name}</h4>
                <p>Payment: {m.pct} of total contract value</p>
              </div>
              <div className="milestone-right">
                <span className="milestone-date">{m.date}</span>
                <span className={`badge badge-${m.status === 'done' ? 'success' :
                    m.status === 'partial' ? 'warning' :
                      m.status === 'pending' ? 'muted' :
                        m.status === 'critical' ? 'danger' : 'muted'
                  }`}>{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CRM Timeline */}
      <div className="section">
        <div className="section-title">💼 MI Client CRM — Activity Timeline</div>
        <div className="milestone-list">
          {[
            { name: 'Company signup, user setup, client & product data upload', date: '2nd–3rd week Nov 2025', status: 'done', label: '✓ Done' },
            { name: 'Quotation template setup, T&C, bank details, training', date: '4th week Nov 2025', status: 'done', label: '✓ Done' },
            { name: 'Phase 1 Go-Live — CRM/CPQ & Sales Automation', date: '4th week Nov 2025', status: 'done', label: '✓ Done' },
            { name: 'ERP Integration (BC 365 APIs), OCR, AI features', date: '4th week Dec 2025', status: 'critical', label: '🔴 Overdue' },
            { name: 'Reporting, Reconciliation, Marketing Automation', date: '4th week Dec 2025', status: 'critical', label: '🔴 Overdue' },
            { name: 'Phase 2 Go-Live — Full ERP Integration', date: '1st week Jan 2026', status: 'critical', label: '🔴 Overdue' },
          ].map((m, i) => (
            <div key={i} className="milestone-item">
              <div className={`milestone-dot milestone-dot-${m.status}`} />
              <div className="milestone-content">
                <h4>{m.name}</h4>
                <p>Original deadline</p>
              </div>
              <div className="milestone-right">
                <span className="milestone-date">{m.date}</span>
                <span className={`badge badge-${m.status === 'done' ? 'success' : 'danger'}`}>{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Register */}
      <div className="section">
        <div className="section-title">⚠️ Risk Register</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>Risk</th><th>Severity</th><th>Current Status</th><th>Action Required</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>R1</td>
                <td><strong>API Contract Not Agreed</strong> — Two vendors building independently without a shared API spec</td>
                <td><span className="badge badge-danger">Critical</span></td>
                <td>Unresolved</td>
                <td>Joint API contract meeting — Transform + MiClient + Dr. Pal</td>
              </tr>
              <tr>
                <td>R2</td>
                <td><strong>April 1 Go-Live at Risk</strong> — M5 (Integration Testing) and M6 (UAT) not started with 3 weeks to deadline</td>
                <td><span className="badge badge-danger">Critical</span></td>
                <td>Unresolved</td>
                <td>Immediate escalation to CCIL management and Transform Infotech</td>
              </tr>
              <tr>
                <td>R3</td>
                <td><strong>MI Client Phase 2 Overdue</strong> — All AI and integration features delayed since December 2025</td>
                <td><span className="badge badge-danger">High</span></td>
                <td>Unresolved</td>
                <td>Revised Phase 2 timeline required from MiClient with contractual commitment</td>
              </tr>
              <tr>
                <td>R4</td>
                <td><strong>Data Migration Incomplete</strong> — M4 only partially done; final migration must be clean before Go-Live</td>
                <td><span className="badge badge-warning">High</span></td>
                <td>In Progress</td>
                <td>Complete trial loads; reconcile against Navision closing balances</td>
              </tr>
              <tr>
                <td>R5</td>
                <td><strong>No Cancellation/Rollback Logic</strong> — FRD does not define what happens if a CRM order is cancelled after ERP SO is created</td>
                <td><span className="badge badge-warning">Medium</span></td>
                <td>Gap in FRD</td>
                <td>Add rollback logic to the revised FRD before development</td>
              </tr>
              <tr>
                <td>R6</td>
                <td><strong>Stock Reservation Race Condition</strong> — No mechanism to resolve clash when two salespersons reserve the same stock simultaneously</td>
                <td><span className="badge badge-warning">Medium</span></td>
                <td>Not designed</td>
                <td>Define reservation locking logic in integration spec</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Immediate Actions */}
      <div className="section">
        <div className="section-title">🎯 Immediate Action Items</div>
        <div className="flow-steps">
          {[
            { n: '01', t: 'Joint API Contract Meeting', d: 'Get Transform Infotech + MiClient + Dr. Pal on a single call. Force agreement on API endpoint URLs, JSON field names, authentication method, and error codes before any further development.' },
            { n: '02', t: 'Complete M4 Data Migration', d: 'Finalize trial loads for all master data and transaction history from Navision 2016. Reconcile migrated balances against source system data.' },
            { n: '03', t: 'Begin M5 — Integration & System Testing', d: 'Start integration testing immediately after API contract is agreed. Test all 8 data flows with realistic data.' },
            { n: '04', t: 'Get Revised Phase 2 Timeline from MiClient', d: 'MiClient to commit to a realistic Phase 2 delivery date with milestone payments. Penalty clause for further delays must be enforced.' },
            { n: '05', t: 'Add Priority Classification to FRD', d: 'Tag all requirements as P1 (Go-Live critical) or P2 (Post-Go-Live). Without this, vendors cannot make trade-off decisions under deadline pressure.' },
            { n: '06', t: 'Begin UAT Planning', d: 'Define UAT test cases for all core processes (quotation, stock reservation, SO creation, GST, dispatch). Assign CCIL staff to each test scenario.' },
          ].map(s => (
            <div key={s.n} className="flow-step">
              <div className="flow-step-left">
                <div className="flow-step-num">{s.n}</div>
                <div className="flow-step-line" />
              </div>
              <div className="flow-step-body">
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
