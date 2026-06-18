const CLIENT_FIELDS = {
  'ID': 'id',
  'Client Name': 'clientName',
  'Service': 'service',
  'Amount': 'amount',
  'Date': 'date',
  'PDF URL': 'pdfUrl',
};

/**
 * Returns a sheet by name from the configured spreadsheet.
 * @param {string} name
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getSheet(name) {
  const spreadsheet = SpreadsheetApp.openById(getConfig().SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    throw new Error(`Sheet not found: ${name}`);
  }

  return sheet;
}

/**
 * Maps header row to field names.
 * @param {Array<string>} headers
 * @returns {Object<string, number>}
 */
function getClientColumnIndex(headers) {
  const columnIndex = {};

  headers.forEach((header, index) => {
    const field = CLIENT_FIELDS[String(header).trim()];

    if (field) {
      columnIndex[field] = index;
    }
  });

  return columnIndex;
}

/**
 * Loads a client record from the Clients sheet by ID.
 * @param {string|number} id
 * @returns {Object|null}
 */
function getClientById(id) {
  const sheet = getSheet(getConfig().SHEETS.CLIENTS);
  const rows = sheet.getDataRange().getValues();

  if (rows.length < 2) {
    return null;
  }

  const headers = rows[0];
  const columnIndex = getClientColumnIndex(headers);

  if (columnIndex.id === undefined) {
    throw new Error('Clients sheet is missing ID column');
  }

  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][columnIndex.id]) === String(id)) {
      return {
        id: rows[i][columnIndex.id],
        clientName: rows[i][columnIndex.clientName],
        service: rows[i][columnIndex.service],
        amount: rows[i][columnIndex.amount],
        date: rows[i][columnIndex.date],
        pdfUrl: rows[i][columnIndex.pdfUrl],
        rowNumber: i + 1,
      };
    }
  }

  return null;
}

/**
 * Updates the PDF URL for a client record.
 * @param {string|number} clientId
 * @param {string} pdfUrl
 * @returns {number} Updated row number
 */
function updatePdfUrl(clientId, pdfUrl) {
  const client = getClientById(clientId);

  if (!client) {
    throw new Error(`Client not found: ${clientId}`);
  }

  const sheet = getSheet(getConfig().SHEETS.CLIENTS);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const columnIndex = getClientColumnIndex(headers);

  if (columnIndex.pdfUrl === undefined) {
    throw new Error('Clients sheet is missing PDF URL column');
  }

  sheet.getRange(client.rowNumber, columnIndex.pdfUrl + 1).setValue(pdfUrl);

  return client.rowNumber;
}
