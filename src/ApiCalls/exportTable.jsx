import * as XLSX from "xlsx/xlsx.mjs";

export const exportFile = (leads) => {
  // Extract Data (create a workbook object from the json)
  const worksheet = XLSX.utils.json_to_sheet(leads.leads);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, leads.campaign_name);

  XLSX.utils.sheet_add_aoa(
    worksheet,
    [
      [
        "id",
        "Full Name",
        "Email Address",
        "Created Date",
        "Status",
        "Feedback",
      ],
    ],
    { origin: "A1" }
  );

  XLSX.writeFile(workbook, leads.campaign_name);
};
