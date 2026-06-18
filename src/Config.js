function getConfig() {
  const secrets = getSecrets();

  return {
    SPREADSHEET_ID: secrets.SPREADSHEET_ID,
    TEMPLATE_DOC_ID: secrets.TEMPLATE_DOC_ID,
    OUTPUT_FOLDER_ID: secrets.OUTPUT_FOLDER_ID,

    SHEETS: {
      CLIENTS: 'Clients',
      LOGS: 'Logs',
    },
  };
}
