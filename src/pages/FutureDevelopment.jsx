export default function FutureDevelopment() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🚀 Section 9</div>
        <h1>Future Development Guide</h1>
        <p>
          This section provides guidance on how future integration should be implemented, best practices
          for extending the CCIL platform, and the recommended architecture for Phase 2 and beyond.
        </p>
      </div>

      <div className="section">
        <div className="section-title">🗺️ Phase 2 Roadmap — MI Client Integration</div>
        <div className="callout callout-primary">
          <span className="callout-icon">ℹ️</span>
          <p>
            Phase 2 cannot begin until the ERP Go-Live (April 1, 2026) is stable and the shared API contract between
            Transform Infotech and MiClient is formally agreed. The recommended Phase 2 start is <strong>May 2026</strong>.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Phase</th><th>Feature Group</th><th>Dependencies</th><th>Suggested Timeline</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>2a</strong></td><td>Core API Integration — Stock Check, Master Data Sync, SO Push</td><td>API contract agreed, BC APIs live</td><td>May–Jun 2026</td></tr>
              <tr><td><strong>2b</strong></td><td>Stock Reservation via Chatbot + Real-Time Availability</td><td>2a complete, chatbot platform selected</td><td>Jun–Jul 2026</td></tr>
              <tr><td><strong>2c</strong></td><td>OCR Data Capture (visiting cards, POs, WOs)</td><td>OCR engine vendor selected</td><td>Jun–Jul 2026</td></tr>
              <tr><td><strong>2d</strong></td><td>AI MIS Dashboards + Lead-to-Order Analytics</td><td>ERP financial data live, LLM API provisioned</td><td>Jul–Aug 2026</td></tr>
              <tr><td><strong>2e</strong></td><td>Shipment Tracking + Receivables Reminders via CRM</td><td>2a complete, logistics API integrations</td><td>Jul–Aug 2026</td></tr>
              <tr><td><strong>2f</strong></td><td>Marketing Automation + Dead Stock Campaigns</td><td>Historical ERP data accessible, email/WhatsApp channels set up</td><td>Aug–Sep 2026</td></tr>
              <tr><td><strong>2g</strong></td><td>Image-Based Product Matching + AI Recommendation Engine</td><td>Product image catalog built, vision model selected</td><td>Sep–Oct 2026</td></tr>
              <tr><td><strong>3</strong></td><td>Gen AI Customer Service Bot (WhatsApp → n8n → LLM → BC API)</td><td>All Phase 2 APIs stable, bot channel approved</td><td>Oct–Dec 2026</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📐 Integration Architecture Best Practices</div>
        <div className="card-grid-2">
          <div className="card">
            <div className="card-icon">📄</div>
            <h3>API Contract First</h3>
            <p>Before any new integration is built, both vendors must agree on a written API contract: endpoint URLs, JSON schemas, authentication, error codes, and SLAs. Store this in a shared repository.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>ERP is Always Master</h3>
            <p>In any data conflict, BC 365 ERP wins. CRM should never override ERP data silently. Conflicts must be logged and flagged for manual resolution.</p>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Real-Time vs. Scheduled</h3>
            <p>Stock availability and reservations must be real-time. Master data can be daily. MIS dashboards can be hourly. Never use real-time polling for data that doesn't need it — it increases API load.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔄</div>
            <h3>Staging Table Pattern</h3>
            <p>Continue the staging table pattern for CRM→ERP order pushes. It provides a buffer, audit trail, and error recovery mechanism. Extend the same pattern to other CRM→ERP flows.</p>
          </div>
          <div className="card">
            <div className="card-icon">🧪</div>
            <h3>Test in Sandbox First</h3>
            <p>All new API integrations must be tested in the BC 365 sandbox environment before touching production. Maintain separate API credentials for sandbox vs. production.</p>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>Monitor API Health</h3>
            <p>Use n8n or a monitoring tool to track API success rates, response times, and failure patterns. Set up alerts for integration failures before users notice them.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🤖 Gen AI Bot — Technical Implementation Guide</div>
        <div className="section-body">
          <p>The planned Gen AI customer service bot should follow this implementation approach:</p>
        </div>
        <div className="flow-steps">
          {[
            { n:'01', t:'Channel Setup — WhatsApp Business API', d:'Register CCIL\'s WhatsApp Business account. Set up webhook to forward incoming messages to n8n. Obtain WhatsApp Business API credentials (Meta Business Suite).' },
            { n:'02', t:'Azure AD App Registration for BC API', d:'Register an app in Azure AD for the bot to authenticate against BC 365. Obtain tenant ID, client ID, and client secret. Configure API permissions for required BC entities.' },
            { n:'03', t:'n8n Workflow Design', d:'Design n8n workflows for each bot use case: stock query, reservation status, document upload. Each workflow: receive WhatsApp message → parse intent → call BC API → format response → send reply.' },
            { n:'04', t:'LLM Integration', d:'Connect n8n to OpenAI GPT-4 or Google Gemini API for natural language understanding and response generation. Use structured prompts with BC data injected as context.' },
            { n:'05', t:'Document Handling', d:'For PDF/image orders: extract text using OCR engine → send to LLM for field extraction → map to CRM quotation fields. Handle WhatsApp-forwarded documents (images, PDFs).' },
            { n:'06', t:'BC API Endpoints to Build', d:'Stock check: GET /api/v2.0/companies({id})/items with location filter. Reservation status: GET /api/v2.0/companies({id})/salesOrders. Customer balance: GET /api/v2.0/companies({id})/customerLedgerEntries.' },
            { n:'07', t:'Escalation Logic', d:'Define when the bot hands off to a human: unknown query type, customer complaint, order dispute, sensitive pricing request. Bot sends handoff notification to the assigned salesperson via CRM.' },
            { n:'08', t:'Testing & UAT', d:'Test all bot use cases in sandbox with real BC data. Define minimum 30 test scenarios covering happy path, error states, and edge cases before production launch.' },
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

      <div className="section">
        <div className="section-title">🏗️ AI/ML Feature Development Recommendations</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>AI Feature</th><th>Recommended Approach</th><th>Data Required</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Inventory Reorder Logic</strong></td><td>Time-series forecasting (PROPHET or ARIMA) on historical sales + lead times from BC</td><td>24+ months of sales history from Navision/BC by SKU and location</td></tr>
              <tr><td><strong>Dead Stock Detection</strong></td><td>Threshold rules + ML classification based on velocity and age. Weekly batch job in BC.</td><td>Stock movement data, last sale date per SKU</td></tr>
              <tr><td><strong>OCR Data Capture</strong></td><td>Integrate Google Document AI or AWS Textract — better accuracy than proprietary OCR for Indian documents</td><td>Sample POs, WOs, visiting cards from CCIL</td></tr>
              <tr><td><strong>Product Image Matching</strong></td><td>Use Google Vision API or build on CLIP model. Requires CCIL product image catalog to be built and maintained.</td><td>High-quality images for all active SKUs</td></tr>
              <tr><td><strong>Sales MIS Synopsis</strong></td><td>Use LLM (GPT-4 / Gemini) to generate natural language summaries from structured BC data. Daily scheduled job.</td><td>Daily/weekly sales figures, targets, pipeline from BC and CRM</td></tr>
              <tr><td><strong>Lead Conversion Scoring</strong></td><td>Logistic regression or gradient boost on CRM lead features (sector, source, time-to-quote, follow-up count)</td><td>Historical lead-to-order conversion data from CRM</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📋 Governance & Development Standards</div>
        <ul className="doc-list">
          <li><strong>API versioning:</strong> All BC API pages must be versioned (v1, v2). Breaking changes require a new version — never modify existing endpoints.</li>
          <li><strong>Change management:</strong> Any change to field names or data formats in the integration layer requires written approval from both vendors and CCIL IT.</li>
          <li><strong>Documentation:</strong> Every API endpoint must have a Postman collection with sample requests/responses maintained in the shared repository.</li>
          <li><strong>SLA monitoring:</strong> Define monthly API uptime and response time reports. Target: 99.5% uptime for real-time flows, &lt;2 second response time for stock queries.</li>
          <li><strong>Data security:</strong> All API tokens stored in a secrets manager (Azure Key Vault). Never hardcode credentials. Rotate tokens quarterly.</li>
          <li><strong>RBAC:</strong> Role-based access control applied to all BC API pages. Bot and CRM can only access entities they are authorized for.</li>
          <li><strong>Audit trail:</strong> All CRM→ERP transactions logged in the staging table with timestamp, user, status, and error message. Retain for 7 years (compliance).</li>
          <li><strong>Disaster recovery:</strong> Define what happens during ERP maintenance windows. CRM must have an offline mode for quote creation without real-time stock data.</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-title">🔍 Discovery & Field Visit Modules</div>
        <div className="section-body">
          <p>
            A structured 30-day on-site discovery programme (February–March 2026) was designed to gather all technical inputs
            for the AI and integration development phase. The programme covers 7 modules:
          </p>
        </div>
        <div className="card-grid-2">
          {[
            { num:'01', name:'Business Orientation & System Landscape', days:'Days 1–3', desc:'Understand CCIL business, map all systems, document current pain points and the full order journey.' },
            { num:'02', name:'CRM — Sales Process & Customer Management', days:'Days 4–8', desc:'Map sales lifecycle, Zoho CRM gaps, MiClient status, and automation opportunities in the sales cycle.' },
            { num:'03', name:'Sales Order Processing & ERP Workflow', days:'Days 9–13', desc:'Document the full SO lifecycle in BC, GST fields, approval hierarchy, and manual workarounds.' },
            { num:'04', name:'Logistics, Dispatch & Warehouse Operations', days:'Days 14–17', desc:'Map dispatch workflow, e-Way bill process, multi-warehouse transfers, and POD recording.' },
            { num:'05', name:'Finance — GST, Accounts Payable & Budget', days:'Days 18–22', desc:'Document GSTR filing process, AP workflow, budget monitoring, and manual effort reduction opportunities.' },
            { num:'06', name:'Inventory, Procurement & Stock Planning', days:'Days 23–26', desc:'Map procurement cycle, reorder logic, historical data audit for AI training, AutoCAD feasibility.' },
            { num:'07', name:'AI Bot, System Integration & Infrastructure', days:'Days 27–30', desc:'Gather BC API credentials, confirm bot architecture, n8n setup, LLM provider, and integration endpoints.' },
          ].map(m => (
            <div key={m.num} className="card">
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
                <span className="badge badge-primary">Module {m.num}</span>
                <span style={{fontSize:12, color:'var(--text-muted)'}}>{m.days}</span>
              </div>
              <h3>{m.name}</h3>
              <p style={{marginTop:6}}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
