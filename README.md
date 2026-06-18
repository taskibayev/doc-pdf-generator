# Google Docs PDF Generator

Automated document generation for client-facing PDFs — built entirely on Google Workspace.

## Project Overview

Generate PDF documents from Google Sheets data using Google Apps Script and Google Docs templates.

This project automates the end-to-end workflow of reading client records from a spreadsheet, filling a document template with dynamic values, exporting the result as a PDF, and saving the file link back to the source sheet. No external servers or third-party services required.

## Features

* Read client data from Google Sheets
* Copy Google Docs template
* Replace placeholders with row data
* Export document to PDF
* Save PDF to Google Drive
* Write PDF URL back to spreadsheet

## Workflow

```text
Google Sheets
      ↓
Apps Script
      ↓
Google Docs Template
      ↓
PDF
      ↓
Google Drive
      ↓
Spreadsheet Update
```

## Tech Stack

* Google Apps Script
* Google Sheets
* Google Docs
* Google Drive
* clasp
* GitHub

## Example Template Variables

Placeholders in the Google Docs template are replaced with values from each spreadsheet row:

```text
{{client_name}}
{{service}}
{{amount}}
{{date}}
```

## Future Improvements

* Batch PDF generation
* Email delivery
* Custom templates
* File versioning
