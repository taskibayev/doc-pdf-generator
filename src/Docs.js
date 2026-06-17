/**
 * Creates a copy of the template document for a client.
 * @param {Object} client
 * @returns {string} Copied Google Docs file ID
 */
function copyTemplate(client) {
  const templateId = getConfig().TEMPLATE_DOC_ID;
  const fileName = `Invoice - ${client.clientName}`;
  const copy = DriveApp.getFileById(templateId).makeCopy(fileName);

  return copy.getId();
}

/**
 * Replaces template placeholders with client data.
 * @param {string} docId
 * @param {Object} client
 */
function replacePlaceholders(docId, client) {
  const doc = DocumentApp.openById(docId);
  const body = doc.getBody();

  const replacements = {
    '{{client_name}}': String(client.clientName || ''),
    '{{service}}': String(client.service || ''),
    '{{amount}}': String(client.amount || ''),
    '{{date}}': formatClientDate(client.date),
  };

  Object.keys(replacements).forEach((placeholder) => {
    body.replaceText(placeholder, replacements[placeholder]);
  });

  doc.saveAndClose();
}

/**
 * Formats a client date value for document placeholders.
 * @param {Date|string|number} date
 * @returns {string}
 */
function formatClientDate(date) {
  if (!date) {
    return '';
  }

  if (date instanceof Date) {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }

  return String(date);
}
