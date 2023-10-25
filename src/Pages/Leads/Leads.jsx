import "./leads.css";
import Card from "../../Component/Card/Card";
import Button from "../../Component/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { leads } from "../../Data/data";

export default function Leads() {
  return (
    <div className="leads">
      <div className="leads__top">
        <div className="title">
          <h3 className="h-100">Leads</h3>
          <Button
            variant="pill"
            icon={<AiOutlinePlus />}
            text="Add new Leads"
          />
        </div>
        <div className="cards">
          <Card qty="3000" text="Total Leads" />
          <Card qty="3000" text="Total Leads" />
          <Card qty="3000" text="Total Leads" />
        </div>
      </div>
      <div className="leads__table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Leads</th>
              <th>Created date/time</th>
              <th>Contacted</th>
              <th>Converted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.slice(0, 10).map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.title}</td>
                <td>{lead.leads}</td>
                <td>{lead.created}</td>
                <td>{lead.contacted}</td>
                <td>{lead.converted}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
