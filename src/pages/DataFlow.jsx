const flows = [
  {
    num: '01',
    dir: 'ERP → CRM',
    name: 'Master Data Synchronization',
    desc: 'ERP pushes Customer master, Item/Product master, Pricing tables, and Vendor data to CRM so the sales team always has accurate data when creating quotes and orders.',
    data: 'Customers, Items, Variants, Price lists, Vendor master',
    trigger: 'Scheduled sync (daily) + on-change push',
  },
  {
    num: '02',
    dir: 'CRM → ERP',
    name: 'Quotation & Proforma Invoice',
    desc: 'When a salesperson creates a Quote or PI in MiClient, it syncs to ERP so ERP is aware of pending business and can reserve capacity or alert on pricing violations.',
    data: 'Quote header, line items, customer details, pricing, discount %',
    trigger: 'On save/approval in CRM',
  },
  {
    num: '03',
    dir: 'CRM ← ERP',
    name: 'Real-Time Stock Availability',
    desc: 'Before a salesperson promises stock to a customer, CRM queries ERP in real time to get available quantities by location, lot number, and shade code.',
    data: 'Item No., Location, Qty Available, Reserved Qty, Pending POs',
    trigger: 'Real-time API call on demand',
  },
  {
    num: '04',
    dir: 'CRM → ERP',
    name: 'Stock Reservation Request',
    desc: 'When a salesperson reserves stock for a prospective order via the CRM chatbot, CRM sends a reservation request to ERP. ERP blocks the quantity and confirms back. Includes expiry-based auto-release.',
    data: 'Item No., Location, Quantity, Customer ID, Expiry Date',
    trigger: 'Real-time — reservation must be immediate',
  },
  {
    num: '05',
    dir: 'CRM → ERP',
    name: 'Sales Order Creation',
    desc: 'When a customer order is confirmed in CRM, CRM pushes the Sales Order data to ERP via API into a Staging Table. ERP validates and creates the formal Sales Order for dispatch and invoicing.',
    data: 'Order header, ship-to details, line items, charges, GST info',
    trigger: 'On order confirmation in CRM',
  },
  {
    num: '06',
    dir: 'CRM → ERP',
    name: 'Indent / PO Creation Trigger',
    desc: 'If stock is unavailable for a confirmed order, CRM triggers an indent in ERP to initiate a domestic or import Purchase Order. ERP confirms the indent and tracks it to fulfilment.',
    data: 'Item No., Required Qty, Required Date, Customer Order reference',
    trigger: 'On CRM order confirmation with stock shortage',
  },
  {
    num: '07',
    dir: 'ERP → CRM',
    name: 'Shipment & Delivery Status',
    desc: 'Once ERP dispatches an order, it pushes shipment tracking data, delivery status, e-Way bill number, and transporter details to CRM so the salesperson can see it and update the customer.',
    data: 'LR No., Transporter, Vehicle No., E-Way Bill, Dispatch Date, ETA',
    trigger: 'Pushed on dispatch posting in ERP',
  },
  {
    num: '08',
    dir: 'ERP → CRM',
    name: 'Financial Data for MIS Dashboards',
    desc: 'ERP pushes invoiced amounts, outstanding receivables, payment status, collection data, and financial ratios to CRM so management can see real-time sales MIS without logging into ERP.',
    data: 'Invoiced amount, Outstanding, Payment received, Commission data',
    trigger: 'Scheduled sync (hourly or daily)',
  },
]

export default function DataFlow() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🔄 Section 6</div>
        <h1>Data Flow & Workflows</h1>
        <p>
          The CRM and ERP communicate through 8 defined integration data flows. Understanding who owns
          which data and when it moves is critical to the correct operation of the integrated platform.
        </p>
      </div>

      <div className="section">
        <div className="section-title">⚖️ Data Ownership Matrix</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Data Entity</th><th>Owned By</th><th>Direction</th><th>Rationale</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Customer Master</strong></td><td>ERP (BC 365)</td><td>ERP → CRM</td><td>ERP is master. CRM reads. New CRM customers synced back after validation.</td></tr>
              <tr><td><strong>Item / Product Master</strong></td><td>ERP (BC 365)</td><td>ERP → CRM</td><td>SKUs, variants, and specs live in ERP. CRM displays them.</td></tr>
              <tr><td><strong>Pricing & Rate Lists</strong></td><td>ERP (BC 365)</td><td>ERP → CRM</td><td>ERP governs all approved pricing. CRM reads for quote creation.</td></tr>
              <tr><td><strong>Stock Levels</strong></td><td>ERP (BC 365)</td><td>ERP → CRM (real-time)</td><td>Only ERP knows actual available stock. CRM queries live.</td></tr>
              <tr><td><strong>Leads & Opportunities</strong></td><td>CRM (MiClient)</td><td>CRM only</td><td>Lead management is purely a CRM function.</td></tr>
              <tr><td><strong>Quotations & PIs</strong></td><td>CRM (MiClient)</td><td>CRM → ERP</td><td>Created in CRM, synced to ERP for awareness.</td></tr>
              <tr><td><strong>Sales Orders</strong></td><td>ERP (BC 365)</td><td>CRM initiates → ERP owns</td><td>CRM pushes order data; ERP creates the formal Sales Order.</td></tr>
              <tr><td><strong>Stock Reservations</strong></td><td>ERP (BC 365)</td><td>Bidirectional</td><td>CRM requests reservation; ERP blocks and confirms.</td></tr>
              <tr><td><strong>Financial Data</strong></td><td>ERP (BC 365)</td><td>ERP → CRM</td><td>All receivables, invoices, and payments live in ERP.</td></tr>
              <tr><td><strong>Shipment Tracking</strong></td><td>ERP (BC 365)</td><td>ERP → CRM</td><td>ERP handles logistics. CRM displays for salesperson.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🔄 The 8 Integration Flows</div>
        <div className="flow-grid">
          {flows.map(f => (
            <div key={f.num} className="flow-card">
              <div className="flow-card-num">Flow {f.num}</div>
              <div className="flow-direction">
                {f.dir.includes('bidirectional') ? '⇄' : f.dir.includes('←') ? '←' : '→'} {f.dir}
              </div>
              <h4>{f.name}</h4>
              <p>{f.desc}</p>
              <p style={{marginTop:8, fontSize:12, color:'var(--text-muted)'}}>
                <strong style={{color:'var(--text-secondary)'}}>Data:</strong> {f.data}
              </p>
              <p style={{marginTop:4, fontSize:12, color:'var(--text-muted)'}}>
                <strong style={{color:'var(--text-secondary)'}}>Trigger:</strong> {f.trigger}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">📦 Order Lifecycle — End to End</div>
        <div className="flow-steps">
          {[
            { n:'01', t:'Lead Capture', d:'Sales person captures enquiry via visiting card OCR, email, WhatsApp, or exhibition lead. Created in CRM.' },
            { n:'02', t:'Product & Stock Check', d:'Sales person searches product catalog in CRM (synced from ERP). For active quotes, CRM queries ERP real-time for stock availability.' },
            { n:'03', t:'Quotation Creation (CPQ)', d:'Quote created in CRM with ERP pricing. If below DP rate, CPQ approval workflow is triggered with live margin analysis.' },
            { n:'04', t:'PI Delivery to Customer', d:'Approved PI/quote sent as PDF via WhatsApp or email directly from CRM. Customer reference links maintained.' },
            { n:'05', t:'Stock Reservation', d:'Sales person reserves stock via CRM chatbot. CRM sends reservation to ERP. ERP blocks quantity. Expiry timer starts.' },
            { n:'06', t:'Order Receipt & AI Parsing', d:'Customer sends PO in any format (PDF/email/WhatsApp). CRM AI parses order, maps to PI/Quote, flags adverse clauses.' },
            { n:'07', t:'ERP Sales Order Creation', d:'Confirmed order pushed from CRM to ERP staging table via API. ERP validates customer, items, pricing. Sales Order created.' },
            { n:'08', t:'Dispatch & Logistics', d:'ERP generates pick list, e-Way bill, tax invoice. Warehouse dispatches goods. Transporter details updated in ERP.' },
            { n:'09', t:'Shipment Tracking', d:'ERP pushes dispatch details to CRM. Sales person can track delivery status for their orders directly in CRM.' },
            { n:'10', t:'Invoice & Receivables', d:'ERP posts invoice. Receivables aging tracked. Milestone-based payment reminders triggered in CRM for the salesperson.' },
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
        <div className="section-title">⏱️ Sync Frequency Requirements</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Data Flow</th><th>Required Frequency</th><th>Rationale</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Stock Availability Query</strong></td><td><span className="badge badge-danger">Real-time</span></td><td>Stale data = false promises = double-booking risk</td></tr>
              <tr><td><strong>Stock Reservation</strong></td><td><span className="badge badge-danger">Real-time</span></td><td>Two salespersons could reserve the same stock simultaneously</td></tr>
              <tr><td><strong>Sales Order Push</strong></td><td><span className="badge badge-warning">Near-real-time (&lt;5 min)</span></td><td>Order processing should start immediately</td></tr>
              <tr><td><strong>Master Data (Customer/Item)</strong></td><td><span className="badge badge-info">Daily</span></td><td>Changes are infrequent; daily refresh is sufficient</td></tr>
              <tr><td><strong>Pricing Updates</strong></td><td><span className="badge badge-warning">On-change push</span></td><td>Price changes must reflect immediately in CRM quotes</td></tr>
              <tr><td><strong>Shipment Tracking</strong></td><td><span className="badge badge-warning">On dispatch</span></td><td>Pushed when dispatch is posted in ERP</td></tr>
              <tr><td><strong>Financial MIS Data</strong></td><td><span className="badge badge-info">Hourly / Daily</span></td><td>Management dashboards don't need second-by-second updates</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
