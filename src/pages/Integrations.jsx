export default function Integrations() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">🔌 Section 7</div>
        <h1>System Integrations</h1>
        <p>
          The CRM ↔ ERP integration is the most technically complex and highest-risk component of the project.
          This section documents the integration architecture, API specifications, the Sales Order staging flow,
          field mappings, and error handling requirements.
        </p>
      </div>

      <div className="section">
        <div className="section-title">⚠️ Current Integration State</div>
        <div className="callout callout-danger">
          <span className="callout-icon">🔴</span>
          <p>
            <strong>Right now, ERP and CRM are completely isolated — no connection exists between them.</strong>{' '}
            MiClient Phase 1 is live manually. APIs have not been built by Transform Infotech yet.
            Both vendors have been developing without a shared API contract. This is the critical gap.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🏗️ Integration Architecture</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Component</th><th>Technology</th><th>Responsible Vendor</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>ERP API Endpoints</strong></td><td>OData v4 REST API Pages (AL language in BC 365)</td><td>Transform Infotech</td></tr>
              <tr><td><strong>CRM API Connectors</strong></td><td>HTTP REST clients in MiClient application</td><td>MiClient Pvt. Ltd.</td></tr>
              <tr><td><strong>Authentication</strong></td><td>OAuth 2.0 via Azure Active Directory (client credentials flow)</td><td>Transform Infotech / Azure</td></tr>
              <tr><td><strong>Data Format</strong></td><td>JSON payloads for all requests and responses</td><td>Both</td></tr>
              <tr><td><strong>Staging Table</strong></td><td>Custom BC 365 table for incoming CRM orders (AL extension)</td><td>Transform Infotech</td></tr>
              <tr><td><strong>Integration Orchestration</strong></td><td>n8n workflow automation (planned)</td><td>Dr. Pal's team / CCIL</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📋 Sales Order Integration Flow (FRD)</div>
        <div className="section-body">
          <p>The Sales Order flow from CRM to BC (documented in the Functional Requirement Document) follows this process:</p>
        </div>
        <div className="flow-steps">
          {[
            { n:'01', t:'Data Push from CRM', d:'CRM sends Sales Quote/Order data via API/Interface to Business Central. Data is stored in the CRM Sales Order Staging Table. Record is marked as "Imported".' },
            { n:'02', t:'Staging Area Review', d:'User opens the CRM Sales Order Staging Page in BC. They can view all imported records from CRM before processing any of them.' },
            { n:'03', t:'Update Record — Validation', d:'User clicks "Update Record". System validates: Customer existence (by GST No. → PAN → Name), Ship-to details, Item No. (must exist), Location Code, Pricing (rate must be approved).' },
            { n:'04', t:'Master Creation (if required)', d:'If Customer or Ship-to Code is missing, user can click "Create Customer" or "Create Ship-To Code". System creates from staging data.' },
            { n:'05', t:'GST Determination', d:'System automatically determines GST type: IGST (inter-state) or CGST+SGST (intra-state), based on ship-to state vs. CCIL\'s location.' },
            { n:'06', t:'Sales Order Creation', d:'User clicks "Create Sales Order". System creates Sales Header, Sales Lines, applies charges (packing, freight, loading/unloading), triggers e-Invoice if applicable, marks staging as "Order Created".' },
            { n:'07', t:'Confirmation Back to CRM', d:'ERP updates the staging record status to "Processed". CRM is notified that the Sales Order has been created in ERP.' },
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
        <div className="section-title">🗺️ Field Mapping — CRM → Business Central</div>
        <div className="section-sub">Header Information</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>CRM Field</th><th>BC Field</th></tr>
            </thead>
            <tbody>
              <tr><td>Document Type</td><td>Document Type</td></tr>
              <tr><td>CRM Quote No.</td><td>Your Reference</td></tr>
              <tr><td>SO Creation Date</td><td>Order Date</td></tr>
              <tr><td>Cust. PO/WO No.</td><td>Customer Reference</td></tr>
              <tr><td>PO/WO Date</td><td>Posting Date</td></tr>
              <tr><td>ACC LOC Code</td><td>Shortcut Dimension</td></tr>
              <tr><td>Location Code</td><td>Location Code</td></tr>
              <tr><td>Sales Person Code</td><td>Salesperson Code</td></tr>
            </tbody>
          </table>
        </div>

        <div className="section-sub">Customer Details</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>CRM Field</th><th>BC Mapping</th></tr>
            </thead>
            <tbody>
              <tr><td>Sell To Cust Name</td><td>Customer Name</td></tr>
              <tr><td>GST Reg No.</td><td>GST Registration No.</td></tr>
              <tr><td>PAN No.</td><td>PAN Field</td></tr>
              <tr><td>Phone / Email</td><td>Contact Details</td></tr>
              <tr><td>Posting Group</td><td>Customer Posting Group</td></tr>
              <tr><td>Gen. Bus. Group</td><td>Gen. Bus. Posting Group</td></tr>
            </tbody>
          </table>
        </div>

        <div className="section-sub">Line Items</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>CRM Field</th><th>BC Field</th></tr>
            </thead>
            <tbody>
              <tr><td>Item No.</td><td>No.</td></tr>
              <tr><td>Item Description</td><td>Description</td></tr>
              <tr><td>Variant</td><td>Variant Code</td></tr>
              <tr><td>Base Quantity</td><td>Quantity</td></tr>
              <tr><td>Base UOM</td><td>Unit of Measure</td></tr>
              <tr><td>Rate</td><td>Unit Price</td></tr>
              <tr><td>Discount %</td><td>Line Discount %</td></tr>
              <tr><td>Packing Charges</td><td>Charge Item</td></tr>
              <tr><td>Freight Charges</td><td>Charge Item</td></tr>
              <tr><td>Loading/Unloading</td><td>Charge Item</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🚨 Error Handling</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Scenario</th><th>System Response</th><th>Resolution</th></tr>
            </thead>
            <tbody>
              <tr><td>Customer Missing</td><td>Prompt to create</td><td>User clicks "Create Customer" from staging data</td></tr>
              <tr><td>Item Missing</td><td>Error — blocks processing</td><td>Manual item creation in ERP required</td></tr>
              <tr><td>Location Invalid</td><td>Error — blocks processing</td><td>Correct location code in CRM order</td></tr>
              <tr><td>GST Duplicate</td><td>Warning</td><td>Merge or confirm customer identity</td></tr>
              <tr><td>Posting Setup Missing</td><td>Blocks all processing</td><td>ERP admin must configure posting groups</td></tr>
              <tr><td>Rate Below DP</td><td>Pricing validation error</td><td>Requires CPQ approval before order is accepted</td></tr>
              <tr><td>Staging Record Stuck</td><td>"Error" status</td><td>Defined escalation path needed (currently undefined)</td></tr>
              <tr><td>Order Cancelled in CRM</td><td>Not yet defined</td><td>Logic required: does ERP get notified?</td></tr>
              <tr><td>Order Cancelled in ERP</td><td>Not yet defined</td><td>Logic required: does CRM get notified?</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📋 API Specification Requirements</div>
        <div className="callout callout-warning">
          <span className="callout-icon">⚠️</span>
          <p>The following API specification elements are <strong>currently missing</strong> and must be defined before development can proceed:</p>
        </div>
        <ul className="doc-list">
          <li>API endpoint URLs for each integration flow (full URL paths for BC OData pages)</li>
          <li>Authentication method: OAuth 2.0 details — Azure AD tenant ID, client ID, client secret</li>
          <li>Complete JSON request/response schemas with field names and data types</li>
          <li>Sample payloads for each API call (request and response examples)</li>
          <li>Error response codes and formats (HTTP status codes + error body structure)</li>
          <li>Rate limiting rules and timeout handling (max requests per minute)</li>
          <li>SLA definition: max response time for real-time vs. scheduled flows</li>
          <li>Versioning strategy for the API contract</li>
          <li>Rollback and cancellation logic for Sales Orders in both systems</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-title">👤 User Roles in Integration</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Role</th><th>Responsibility</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sales Admin</strong></td><td>Reviews CRM Sales Order Staging Page in BC</td></tr>
              <tr><td><strong>Master Data User</strong></td><td>Creates missing customers or ship-to codes from staging</td></tr>
              <tr><td><strong>Operations User</strong></td><td>Validates and creates Sales Orders from staging</td></tr>
              <tr><td><strong>ERP Admin</strong></td><td>Manages posting groups, resolves stuck records</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
