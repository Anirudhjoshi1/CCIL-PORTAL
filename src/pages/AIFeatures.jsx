const crmAI = [
  { tag:'CRM · Phase 2', name:'OCR-Based Data Capture', desc:'Visiting cards, email orders, POs, and Work Orders auto-extracted using AI/OCR. Supports PDF, image, Word, and WhatsApp document formats. Eliminates manual data entry for the sales team.' },
  { tag:'CRM · Phase 2', name:'AI MIS Dashboards', desc:'Auto-generated sales synopsis including invoiced amounts, orders in hand, outstanding receivables, and sales team performance with charts and management suggestions.' },
  { tag:'CRM · Phase 2', name:'Image-Based Product Matching', desc:'Sales person uploads a product image; AI matches it to SKUs in CCIL\'s catalog using computer vision. Useful for identifying competitor products or matching client samples.' },
  { tag:'CRM · Phase 2', name:'AI Product Recommendation', desc:'Suggests relevant products to the sales person based on the client\'s specifications, purchase history, and current project requirements.' },
  { tag:'CRM · Phase 2', name:'Order AI Parsing', desc:'AI reads incoming orders in any format (PDF/Word/email/WhatsApp) and maps fields to the CRM Quotation/PI including SKU, quantity, rate, taxes, timelines, payment terms, and adverse clauses.' },
  { tag:'CRM · Phase 2', name:'Chatbot — Stock Reservation', desc:'Chat-based interface for sales persons to query real-time stock availability from ERP and submit reservation requests. Includes reservation expiry reminders and clash resolution.' },
  { tag:'CRM · Phase 2', name:'Lead-to-Order Analytics', desc:'AI reports on conversion rates, quotation frequency, win/loss analysis, and individual salesperson performance against targets.' },
  { tag:'CRM · Phase 2', name:'Marketing Automation', desc:'AI-driven campaign targeting using historical ERP data (purchase frequency, preferences, dormant accounts). Sends personalized emails and WhatsApp messages for promotions, dead stock offers.' },
]

const erpAI = [
  { tag:'ERP · BC 365', name:'Inventory Cut-off Logic', desc:'AI recommends reorder points and cut-off quantities (MOQ logic) based on historical sales, lead times, and current back-order data. Includes manual override.' },
  { tag:'ERP · BC 365', name:'AI-Assisted Management Dashboards', desc:'Live dashboards with intelligent KPIs: financial ratios, budget vs. actual variances, receivables aging, stock levels, and procurement open PO status.' },
  { tag:'ERP · BC 365', name:'Automated Reconciliations', desc:'Customer and vendor reconciliations run automatically with AI-generated synopsis explaining variances. Includes foreign vendor and bank reconciliations.' },
  { tag:'ERP · BC 365', name:'Slow/Dead Stock Detection', desc:'Periodic AI pop-ups identifying slow-moving and dead stock items with suggested actions (discount, repurpose, return to vendor).' },
  { tag:'ERP · BC 365', name:'Automated Emailers', desc:'Receivable due-date reminders sent automatically to clients. Daily bank balance reports and management summaries emailed to management in the morning.' },
  { tag:'ERP · BC 365', name:'Commission Sheet Automation', desc:'Auto-generated commission statements based on realized receivables, project costing, WO/PO mapping, and milestone achievements.' },
  { tag:'ERP · BC 365', name:'Microsoft Copilot', desc:'Native BC 365 Copilot: natural language queries for financial data, GL entry suggestions, purchase order recommendations, and workflow assistance.' },
]

export default function AIFeatures() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🤖 Section 5</div>
        <h1>AI Functionalities</h1>
        <p>
          AI capabilities are embedded across both the MiClient CRM and Business Central ERP.
          CRM AI features are planned for Phase 2. ERP AI features include both native Copilot
          capabilities and custom-built intelligent workflows.
        </p>
      </div>

      <div className="section">
        <div className="section-title">💼 AI Features in MI Client CRM</div>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <p>All CRM AI features are part of <strong>Phase 2</strong> — which has not started yet. These are planned capabilities pending ERP integration completion.</p>
        </div>
        <div className="ai-feature-grid">
          {crmAI.map(f => (
            <div key={f.name} className="ai-feature-card">
              <div className="ai-feature-tag">{f.tag}</div>
              <h4>{f.name}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">🏢 AI Features in Business Central ERP</div>
        <div className="ai-feature-grid" style={{'--accent': '#38bdf8'}}>
          {erpAI.map(f => (
            <div key={f.name} className="ai-feature-card" style={{borderLeft: '3px solid var(--info)'}}>
              <div className="ai-feature-tag" style={{color:'var(--info)'}}>{f.tag}</div>
              <h4>{f.name}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">🏗️ Gen AI Bot Architecture</div>
        <div className="section-body">
          <p>
            A customer-facing Gen AI bot is planned to handle stock enquiries, reservation status, and document processing.
            The bot architecture follows this flow:
          </p>
        </div>
        <div className="arch-diagram">
          <div className="arch-row" style={{gap:12, flexWrap:'wrap'}}>
            <div className="arch-node" style={{minWidth:130, padding:'12px 16px'}}>
              <h4 style={{fontSize:12}}>📱 WhatsApp</h4>
              <p style={{fontSize:11}}>User channel</p>
            </div>
            <span style={{color:'var(--text-muted)', fontSize:18}}>→</span>
            <div className="arch-node primary-node" style={{minWidth:130, padding:'12px 16px'}}>
              <h4 style={{fontSize:12}}>🔀 n8n Workflow</h4>
              <p style={{fontSize:11}}>Automation orchestration</p>
            </div>
            <span style={{color:'var(--text-muted)', fontSize:18}}>→</span>
            <div className="arch-node accent-node" style={{minWidth:130, padding:'12px 16px'}}>
              <h4 style={{fontSize:12}}>🤖 LLM (GPT/Gemini)</h4>
              <p style={{fontSize:11}}>Query understanding</p>
            </div>
            <span style={{color:'var(--text-muted)', fontSize:18}}>→</span>
            <div className="arch-node" style={{minWidth:130, padding:'12px 16px'}}>
              <h4 style={{fontSize:12}}>🏢 BC 365 API</h4>
              <p style={{fontSize:11}}>Data retrieval</p>
            </div>
            <span style={{color:'var(--text-muted)', fontSize:18}}>→</span>
            <div className="arch-node" style={{minWidth:130, padding:'12px 16px'}}>
              <h4 style={{fontSize:12}}>💬 Response</h4>
              <p style={{fontSize:11}}>Back to user</p>
            </div>
          </div>
        </div>

        <div className="table-wrap" style={{marginTop: 16}}>
          <table>
            <thead>
              <tr><th>Bot Use Case</th><th>Channel</th><th>Data Source</th></tr>
            </thead>
            <tbody>
              <tr><td>Stock availability enquiry</td><td>WhatsApp / Web</td><td>BC 365 Items API (real-time)</td></tr>
              <tr><td>Reservation status check</td><td>WhatsApp / Web</td><td>BC 365 Sales Orders API</td></tr>
              <tr><td>PDF/image order parsing</td><td>WhatsApp</td><td>LLM + OCR Engine</td></tr>
              <tr><td>Product search by specs</td><td>Web Chat</td><td>BC 365 Items + AI matching</td></tr>
              <tr><td>Payment status query</td><td>WhatsApp</td><td>BC 365 Receivables API</td></tr>
              <tr><td>Human escalation</td><td>Any</td><td>Handoff to sales person</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">❓ Open AI Integration Questions</div>
        <div className="callout callout-info">
          <span className="callout-icon">ℹ️</span>
          <p>The following questions were raised with vendors and require resolution before Phase 2 development begins.</p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>Question</th><th>Vendor</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>What OCR engine is being used — proprietary or third-party (Google Vision, AWS Textract)?</td><td>MiClient</td></tr>
              <tr><td>2</td><td>What is the current OCR accuracy rate for visiting cards, emails, POs, and WOs?</td><td>MiClient</td></tr>
              <tr><td>3</td><td>Does margin analysis in CPQ pull live cost data from BC 365 ERP or a synced snapshot?</td><td>MiClient</td></tr>
              <tr><td>4</td><td>What platform is the chatbot built on — proprietary, Dialogflow, or other?</td><td>MiClient</td></tr>
              <tr><td>5</td><td>Does the chatbot verify real-time stock from ERP API or from a cached dataset?</td><td>MiClient</td></tr>
              <tr><td>6</td><td>What AI/ML models power the MIS analytics and synopsis generation?</td><td>MiClient</td></tr>
              <tr><td>7</td><td>What AI features does BC 365 support natively (Copilot, Power BI AI insights)?</td><td>Transform Infotech</td></tr>
              <tr><td>8</td><td>Who is responsible for testing AI features — Transform, MiClient, or CCIL?</td><td>Both</td></tr>
              <tr><td>9</td><td>Which LLM API is provisioned for the Gen AI bot — OpenAI GPT-4, Google Gemini?</td><td>CCIL / Dr. Pal</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
