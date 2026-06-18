/**
 * Saves a PDF blob to the configured output folder.
 * @param {GoogleAppsScript.Base.Blob} pdfBlob
 * @param {Object} client
 * @returns {{fileId: string, fileUrl: string, fileName: string}}
 */
function savePdf(pdfBlob, client) {
  const folder = DriveApp.getFolderById(getConfig().OUTPUT_FOLDER_ID);
  const fileName = `Invoice - ${client.clientName}.pdf`;
  const file = folder.createFile(pdfBlob.setName(fileName));

  return {
    fileId: file.getId(),
    fileUrl: file.getUrl(),
    fileName: file.getName(),
  };
}
