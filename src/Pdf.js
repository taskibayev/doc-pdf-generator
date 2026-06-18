/**
 * Exports a Google Docs file to a PDF blob.
 * @param {string} docId
 * @returns {GoogleAppsScript.Base.Blob}
 */
function exportDocToPdf(docId) {
  const file = DriveApp.getFileById(docId);
  const pdfBlob = file.getAs('application/pdf');

  return pdfBlob;
}
