const outerTable = document.querySelector('div.table-responsive > table'); // Select the outer table
if (outerTable) {
  const innerTable = outerTable.querySelector('td > table.tableizer-table'); // Select the nested table
  if (innerTable) {
    const data = [];
    const thead = innerTable.querySelector('thead');
    const tbody = innerTable.querySelector('tbody');

    // Extract headers if thead exists
    if (thead) {
      const headers = [];
      thead.querySelectorAll('th').forEach(th => {
        headers.push(th.innerText.trim());
      });
      if (headers.length > 0) {
        data.push(headers);
      }
    }

    // Extract data rows from tbody
    if (tbody) {
      tbody.querySelectorAll('tr').forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
          rowData.push(cell.innerText.trim());
        });
        if (rowData.length > 0) {
          data.push(rowData);
        }
      });
    }

    console.log(JSON.stringify(data));
  } else {
    console.log("Nested table with class 'tableizer-table' not found.");
  }
} else {
  console.log("Outer table within 'div.table-responsive' not found.");
}