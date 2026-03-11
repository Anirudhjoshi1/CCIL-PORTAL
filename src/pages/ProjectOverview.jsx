export default function ProjectOverview() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-tag">📋 Section 1</div>
        <h1>Project Overview</h1>
        <p>
          Consolidated Carpet Industries Limited (CCIL) is undertaking a comprehensive digital transformation
          involving two parallel technology implementation projects, designed to operate as a unified enterprise platform.
        </p>
      </div>

      <div className="section">
        <div className="section-title">🏭 About CCIL</div>
        <div className="section-body">
          <p>
            <strong>Consolidated Carpet Industries Limited (CCIL)</strong>, headquartered in New Delhi, is a leading
            manufacturer and supplier of premium flooring solutions. CCIL's product portfolio includes broadloom carpets,
            carpet tiles, wooden flooring, vinyl, Flotex, sports flooring, SPC, and acoustic ceilings.
          </p>
          <p>
            The company operates across multiple warehouses and serves a diverse range of customer segments including
            hospitality, office spaces, residential, healthcare, education, retail, and government sectors.
            Sales channels include direct sales, architect/interior designer partnerships, contractors, exhibitions,
            and online enquiries.
          </p>
          <p>
            CCIL currently operates on <strong>Navision 2016</strong> (legacy ERP) and is undergoing a full migration to
            Microsoft Dynamics 365 Business Central, simultaneously implementing the MiClient CRM for its sales team.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🎯 Transformation Initiative</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>System</th>
                <th>Vendor</th>
                <th>Contract Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ERP Implementation</strong></td>
                <td>Microsoft Dynamics 365 Business Central</td>
                <td>Transform Infotech, Mumbai</td>
                <td>₹15,00,000 (Fixed)</td>
                <td><span className="badge badge-warning">In Progress</span></td>
              </tr>
              <tr>
                <td><strong>CRM Implementation</strong></td>
                <td>MiClient CRM (AI-Enabled)</td>
                <td>MiClient Pvt. Ltd., Gurgaon</td>
                <td>₹7,32,000 + GST</td>
                <td><span className="badge badge-warning">Phase 1 Done, Phase 2 Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">👥 Key Stakeholders</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Role</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Ashish Garg</strong></td><td>CCIL</td><td>CFO</td><td>ashish@ccil.in</td></tr>
              <tr><td><strong>Dhruv Sodhani</strong></td><td>CCIL</td><td>Director</td><td>dhruv@ccil.in</td></tr>
              <tr><td><strong>Anil Mehta</strong></td><td>CCIL</td><td>Management</td><td>anil@ccil.in</td></tr>
              <tr><td><strong>Shekhar Nadkar</strong></td><td>Transform Infotech</td><td>ERP Vendor — Proprietor</td><td>shekhar@transform.org.in</td></tr>
              <tr><td><strong>Pratiksha U</strong></td><td>Transform Infotech</td><td>ERP Implementation Lead</td><td>pratiksha@transform.org.in</td></tr>
              <tr><td><strong>Chandan K. Ghosh</strong></td><td>MiClient</td><td>CRM Vendor Lead</td><td>chandan@miclient.ai</td></tr>
              <tr><td><strong>Navneet Choudhary</strong></td><td>MiClient</td><td>CRM Implementation</td><td>navneet@miclient.ai</td></tr>
              <tr><td><strong>Zohra</strong></td><td>MiClient</td><td>Product</td><td>Product@miclient.ai</td></tr>
              <tr><td><strong>Dr. Pal</strong></td><td>External Consultant</td><td>Advisory & Oversight</td><td>subhabaha@msn.com</td></tr>
              <tr><td><strong>Anirudh</strong></td><td>Dr. Pal's Team</td><td>On-site Analyst & Coordinator</td><td>anirudh@instadatahelp.com</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">🎯 Business Goals</div>
        <ul className="doc-list">
          <li>Replace legacy Navision 2016 ERP with Microsoft Dynamics 365 Business Central as the master enterprise system</li>
          <li>Implement an AI-enabled CRM (MiClient) for the sales team, tightly integrated with the ERP</li>
          <li>Automate end-to-end business processes: procurement, inventory, sales, invoicing, GST compliance, and receivables</li>
          <li>Enable real-time data visibility across departments via AI-powered dashboards and MIS reporting</li>
          <li>Reduce manual data entry through OCR, chatbots, and automated workflows</li>
          <li>Achieve GST compliance automation including E-Way Bill, E-Invoice, and GSTR reconciliations</li>
          <li>Build a scalable data foundation for future AI/ML capabilities: demand forecasting, dead stock detection, predictive analytics</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-title">🏗️ High-Level Architecture Summary</div>
        <div className="callout callout-primary">
          <span className="callout-icon">ℹ️</span>
          <p>
            <strong>ERP (Business Central) is the master system</strong> — it holds all financial, inventory, pricing, and order data.
            MiClient CRM is the frontend for the sales team, reading from and writing to ERP via secure APIs.
            ERP always wins in any data conflict.
          </p>
        </div>
        <div className="card-grid-2">
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>Microsoft Dynamics 365 BC (ERP)</h3>
            <p>Backend master database. Owns all financial, inventory, order, pricing, and compliance data. Built by Transform Infotech.</p>
          </div>
          <div className="card">
            <div className="card-icon">💼</div>
            <h3>MiClient CRM</h3>
            <p>Frontend for the sales team. Manages leads, quotes, PIs, and customer interactions. Reads/writes to ERP via APIs. Built by MiClient Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
