import "./settings.css";
import Button from "./../../Component/button/Button";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function RolesAndPermissions() {
  const teams = [
    {
      name: "Abudu Olatunbosun",
      email: "abuduolatunbosun@gmail.com",
      role: "Admin",
    },
    {
      name: "Shokunbi Micheal",
      email: "shokunbimicheal@yahoo.com",
      role: "User",
    },
    {
      name: "Marcel Mars",
      email: "marcelmars@gmail.com",
      role: "User",
    },
    {
      name: "Augustine Ikhide",
      email: "augustineikhide@gmail.com",
      role: "Viewer",
    },
  ];

  const permissions = [
    {
      type: "Create & Assign Account",
      access: ["SuperAdmin", "Admin"],
    },
    {
      type: "Delete Account",
      access: ["SuperAdmin"],
    },
    {
      type: "Create Campaign",
      access: ["SuperAdmin"],
    },
    {
      type: "Assign Campaign",
      access: ["SuperAdmin", "Admin"],
    },
    {
      type: "View Campaign",
      access: ["SuperAdmin", "Admin", "Viewer"],
    },
    {
      type: "Delete Campaign",
      access: ["SuperAdmin", "Admin"],
    },
    {
      type: "Approvals",
      access: ["SuperAdmin"],
    },
  ];
  return (
    <div className="roles">
      <div className="roles_section">
        <div className="roles_top">
          <span>
            <h4 className="h-50">Team Overview</h4>
            <p className="text-body">
              This is a list of all team members currently onboarded on the
              platform
            </p>
          </span>
          <Button variant="pill" text="Invite Or Add User" icon={<FaPlus />} />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{team.email}</td>
                <td>{team.role}</td>

                <td>
                  <HiOutlineDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="roles_section">
        <div className="roles_top">
          <span>
            <h4 className="h-50">Permission Manager</h4>
            <p className="text-body">
              Click to select the permissions each role has access to.
            </p>
          </span>
          <Button variant="pill" text="Save Changes" />
        </div>

        <table>
          <thead>
            <tr>
              <th>Permissions</th>
              <th>Super Admin</th>
              <th>Admin</th>
              <th>Viewer</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission, idx) => (
              <tr key={idx}>
                <td>{permission.type}</td>
                <td>
                  <label htmlFor={"SuperAdminCheckBtn" + idx}>
                    <input
                      type="checkbox"
                      name={permission.type}
                      id={"SuperAdminCheckBtn" + idx}
                      defaultChecked={permission.access.includes("SuperAdmin")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>
                  <label htmlFor={"AdminCheckBtn" + idx}>
                    <input
                      type="checkbox"
                      name={permission.type}
                      id={"AdminCheckBtn" + idx}
                      defaultChecked={permission.access.includes("Admin")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>
                  <label htmlFor={"ViewerCheckBtn" + idx}>
                    <input
                      type="checkbox"
                      name={permission.type}
                      id={"ViewerCheckBtn" + idx}
                      defaultChecked={permission.access.includes("Viewer")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
