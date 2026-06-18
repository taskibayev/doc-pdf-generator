# Google Docs PDF Generator

Automated document generation for client-facing PDFs using Google Apps Script, Google Sheets, Google Docs, and Google Drive.

## Overview

This project demonstrates a complete Google Workspace automation workflow.

The system reads client data from Google Sheets, generates personalized documents from a Google Docs template, exports them to PDF, stores the generated files in Google Drive, and writes the file URL back to the source spreadsheet.

No external servers, databases, or third-party services are required.

## Business Problem

Many organizations create documents manually:

* Invoices
* Contracts
* Certificates
* Proposals
* Reports

Manual document creation is time-consuming and error-prone.

This project automates the entire process using Google Workspace tools.

## Features

* Read client data from Google Sheets
* Copy Google Docs templates
* Replace placeholders with dynamic values
* Export documents to PDF
* Save generated PDFs to Google Drive
* Write generated file URLs back to Google Sheets
* Automatically clean up temporary Google Docs files
* Store configuration separately from source code

## Workflow

```text
Google Sheets
      ↓
Load Client Data
      ↓
Copy Google Docs Template
      ↓
Replace Placeholders
      ↓
Export PDF
      ↓
Save To Google Drive
      ↓
Write PDF URL Back To Sheet
      ↓
Delete Temporary Document
```

## Example Template Variables

The Google Docs template supports dynamic placeholders:

```text
{{client_name}}
{{service}}
{{amount}}
{{date}}
```

Example:

```text
Client: John Smith
Service: Website Development
Amount: $1500
Date: 2026-06-17
```

## Tech Stack

* Google Apps Script
* Google Sheets
* Google Docs
* Google Drive
* clasp
* GitHub

## Project Structure

```text
src/

├── Config.js
├── Secrets.example.js
├── Sheets.js
├── Docs.js
├── Pdf.js
├── Drive.js
├── Main.js
└── appsscript.json
```

## Security

Sensitive configuration is kept out of Git while still being available to Apps Script at runtime.

* `src/Secrets.js` is used locally and pushed to Apps Script via clasp. It is excluded from Git via `.gitignore`.
* `src/Secrets.example.js` is committed to GitHub as a documentation template with placeholder values.
* `src/Secrets.example.js` is excluded from clasp push via `.claspignore` to avoid duplicate `getSecrets()` definitions in Apps Script.

Copy `src/Secrets.example.js` to `src/Secrets.js`, replace the placeholders with your IDs, and keep `Secrets.js` out of version control.

## Potential Use Cases

* Invoice Automation
* Contract Generation
* Proposal Generation
* Certificate Generation
* Internal Reporting
* Client Document Workflows

## Future Improvements

* Batch PDF generation
* Email delivery
* Multiple document templates
* File versioning
* Google Sheets custom menu
* Admin dashboard

## Version History

### v1.0

* Google Sheets integration
* Template replacement
* PDF generation
* Google Drive integration
* URL storage

### v1.1

* Temporary document cleanup
* Project refactoring
* Documentation improvements

## Author

Built as part of a Google Apps Script portfolio focused on business automation, document generation, and Google Workspace integrations.
