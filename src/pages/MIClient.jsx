export default function MIClient() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">💼 Section 3</div>
        <h1>MI Client — CRM System</h1>
        <p>
          MiClient is an AI-enabled sales automation CRM used by CCIL's sales team as the primary
          customer-facing tool. It manages leads, quotations, proforma invoices, stock reservations,
          and sales reporting — all integrated with the ERP backend.
        </p>
      </div>

      <div className="section">
        <div className="section-title">📊 Phase Status Overview</div>
        <div className="card-grid-2">
          <div className="card" style={{borderLeft: '3px solid var(--success)'}}>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
              <span style={{fontSize:22}}>✅</span>
              <span className="badge badge-success">Phase 1 — Complete</span>
            </div>
            <h3>Phase 1: CRM/CPQ & Sales Automation</h3>
            <p style={{marginTop:6}}>Go-Live: 4th week of November 2025</p>
            <ul className="doc-list" style={{marginTop:12}}>
              <li>Company signup & environment setup</li>
              <li>50 users onboarded and configured</li>
              <li>Client data uploaded to CRM</li>
              <li>Product catalog loaded</li>
              <li>Quotation & PI templates configured</li>
              <li>Sales team can create quotes and PIs manually</li>
              <li>Basic lead management active</li>
            </ul>
          </div>
          <div className="card" style={{borderLeft: '3px solid var(--danger)'}}>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
              <span style={{fontSize:22}}>🔴</span>
              <span className="badge badge-danger">Phase 2 — Not Started</span>
            </div>
            <h3>Phase 2: Full ERP Integration + AI</h3>
            <p style={{marginTop:6}}>Original deadline: 4th week of Dec 2025 — <strong className="text-danger">OVERDUE</strong></p>
            <ul className="doc-list" style={{marginTop:12}}>
              <li>BC 365 ERP API integration (not started)</li>
              <li>OCR-based document data capture</li>
              <li>AI MIS dashboards and sales analytics</li>
              <li>Chatbot for stock reservation via ERP</li>
              <li>Image-based product matching</li>
              <li>Marketing automation campaigns</li>
              <li>Automated shipment tracking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">💡 CRM Features & Scope</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Phase</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>OCR Data Capture</strong></td><td>Visiting cards, email orders, POs, WOs — auto-extracted using OCR/AI</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Sales Quotation & PI</strong></td><td>Generate quotes and proforma invoices in standardized formats; send via WhatsApp or email</td><td><span className="badge badge-success">Phase 1</span></td></tr>
              <tr><td><strong>CPQ — Special Rate Approval</strong></td><td>Configure, Price, Quote with live margin analysis vs. ERP cost data. Approval workflow for below-DP rates</td><td><span className="badge badge-success">Phase 1</span></td></tr>
              <tr><td><strong>Chatbot Stock Reservation</strong></td><td>Chat-based interface to check real-time stock from ERP and submit reservation requests</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>AI MIS Dashboards</strong></td><td>Auto-generated sales synopsis with orders-in-hand, invoiced amounts, and team performance charts</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Image-Based Product Match</strong></td><td>Upload a product image to find matching SKUs from CCIL's catalog using AI vision</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>AI Product Recommendation</strong></td><td>Suggests relevant products based on client specs and purchase history</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Shipment Tracking</strong></td><td>Real-time order and shipment status fetched from ERP via APIs</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Lead-to-Order Analytics</strong></td><td>AI reports on conversion rates, quotation frequency, and sales team performance</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Order AI Parsing</strong></td><td>AI reads incoming orders (PDF/Word/email/WhatsApp) and maps to CRM PI/Quotation fields</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Marketing Automation</strong></td><td>Campaigns based on historical CRM & ERP data — email and WhatsApp</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Receivable Reminders</strong></td><td>Milestone-based pop-ups and automated emailers for payment follow-up</td><td><span className="badge badge-danger">Phase 2</span></td></tr>
              <tr><td><strong>Daily Activity Tracking</strong></td><td>Per-salesperson tracking of calls, visits, emails, quotes. Manager can view and comment on reportee activities</td><td><span className="badge badge-success">Phase 1</span></td></tr>
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
              <tr><td><strong>Vendor</strong></td><td>MiClient Private Limited, Gurgaon</td></tr>
              <tr><td><strong>Implementation Cost</strong></td><td>₹1,82,000 (one-time — configuration, training, go-live)</td></tr>
              <tr><td><strong>Annual Subscription</strong></td><td>₹5,50,000 (50 users × ₹11,000 each) — exclusive of GST</td></tr>
              <tr><td><strong>Total Contract Value</strong></td><td>₹7,32,000 + 18% GST = <strong>₹8,63,760</strong></td></tr>
              <tr><td><strong>Advance Paid (40%)</strong></td><td>₹3,45,740 (PI #FY 25-26/0202 — November 7, 2025)</td></tr>
              <tr><td><strong>Penalty for Delay</strong></td><td>0.5% per week — maximum 5% of milestone value</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🔄 CPQ Workflow</div>
        <div className="flow-steps">
          {[
            { n:'01', title:'Lead Capture', desc:'Sales person captures new lead via visiting card OCR or manual entry. Lead is linked to existing customer record in ERP if found.' },
            { n:'02', title:'Product Search & Matching', desc:'Sales person searches product catalog (synced from ERP). AI suggests relevant products based on client specs and history.' },
            { n:'03', title:'Stock Check', desc:'CRM queries ERP in real time for stock availability by location. Salesperson can check quantities before promising the customer.' },
            { n:'04', title:'Quotation / PI Creation', desc:'Quotation created with auto-populated pricing from ERP. If below DP rate, approval is triggered via CPQ workflow with instant margin analysis.' },
            { n:'05', title:'Special Rate Approval', desc:'Below-threshold quotes are routed to Sales Manager for approval. Dealer/stockist blanket approvals can be pre-configured.' },
            { n:'06', title:'Delivery to Customer', desc:'Approved quote/PI sent directly as PDF via WhatsApp or email from the salesperson\'s account.' },
            { n:'07', title:'Order Confirmation & ERP Push', desc:'On customer confirmation, CRM pushes Sales Order to ERP via API. ERP validates and creates the Sales Order. Stock gets automatically blocked.' },
            { n:'08', title:'MIS Tracking', desc:'Order appears in AI MIS dashboards. Management sees invoiced amounts, orders-in-hand, and team performance in real time.' },
          ].map(s => (
            <div key={s.n} className="flow-step">
              <div className="flow-step-left">
                <div className="flow-step-num">{s.n}</div>
                <div className="flow-step-line" />
              </div>
              <div className="flow-step-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">📋 Original Project Timeline</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>Activity</th><th>Original Deadline</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Company signup, user setup, client & product data upload</td><td>2nd–3rd week Nov 2025</td><td><span className="badge badge-success">Done</span></td></tr>
              <tr><td>2</td><td>Quotation template setup, T&C, bank details, training</td><td>4th week Nov 2025</td><td><span className="badge badge-success">Done</span></td></tr>
              <tr><td>3</td><td>Phase 1 Go-Live — CRM/CPQ & Sales Automation</td><td>4th week Nov 2025</td><td><span className="badge badge-success">Done</span></td></tr>
              <tr><td>4</td><td>ERP Integration (BC 365 APIs), OCR, AI features</td><td>4th week Dec 2025</td><td><span className="badge badge-danger">Overdue</span></td></tr>
              <tr><td>5</td><td>Reporting, Reconciliation, Marketing Automation</td><td>4th week Dec 2025</td><td><span className="badge badge-danger">Overdue</span></td></tr>
              <tr><td>6</td><td>Phase 2 Go-Live — Full ERP Integration</td><td>1st week Jan 2026</td><td><span className="badge badge-danger">Overdue</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
