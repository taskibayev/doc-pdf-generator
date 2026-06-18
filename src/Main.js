/**
 * Entry point for PDF generation workflow.
 * @param {string|number} clientId
 */
function generatePdf(clientId) {
  const client = getClientById(clientId);

  if (!client) {
    throw new Error(`Client not found: ${clientId}`);
  }

  const docId = copyTemplate(client);
  replacePlaceholders(docId, client);
  const pdfBlob = exportDocToPdf(docId);
  const savedFile = savePdf(pdfBlob, client);
  const updatedRowNumber = updatePdfUrl(clientId, savedFile.fileUrl);

  Logger.log(updatedRowNumber);
  Logger.log(savedFile.fileUrl);
}

function testGetClient() {
  generatePdf(1);
}

function testGenerateDocument() {
  generatePdf(1);
}
