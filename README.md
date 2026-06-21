# ATP-OSM Sync

ATP-OSM Sync is a tool designed to keep OpenStreetMap (OSM) data up to date by matching it with data from [All The Places](https://alltheplaces.xyz) (ATP). It identifies discrepancies in brand data, such as opening hours, websites and contact information and facilitates the synchronisation of this data with OSM.

## How It Works

"Spiders" from All The Places are processed and their output compared with existing OSM features, mainly using `website` or `ref`.

### Tiers

Spiders are organised into two tiers:

- **Preview Tier:** New spiders start here. This allows contributors and the community to review the matching accuracy and data quality. No automated changes are made to OSM for spiders in this tier.
- **Auto Tier:** Once a spider is verified to be highly accurate and reliable, it can be moved to the Auto tier. Spiders in this tier **automatically update OSM objects** when changes are detected in the source data. This includes updating existing tags and adding missing ones.

## Contributing

Contributions of new spiders are welcome!

- To add a new brand, you should start by adding it to [`spiders_preview.json`](/spiders_preview.json).
- For detailed instructions on how to contribute, including configuration options and the review process, please see the **[`CONTRIBUTING.md`](/CONTRIBUTING.md)** guide.

## Translating

The dashboard is available in multiple languages. If you would like to help translate the interface, please take a look at the files in the [`src/locales/`](/src/locales/) directory. English (`en.json`) is the master locale. See the [Translations section in `CONTRIBUTING.md`](/CONTRIBUTING.md#translations) for more details.

## Installation and Local Development

To run the project locally, you will need Node.js and npm installed.

### Setup

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Sync Process

The sync process downloads ATP data and compares it with OSM. You can run it with:

```bash
npm run sync
```

To run a build with mock data (useful for frontend development):

```bash
npm run preview-build
```

### Frontend Development

The frontend is built using Preact and Vite.

- To build the frontend:
    ```bash
    npm run build:fe
    ```
- To lint the code:
    ```bash
    npm run lint
    ```
- To run tests:
    ```bash
    npm test
    ```

## License

This project is licensed under the AGPL 3.0 license only. See the [`LICENSE`](/LICENSE) file for details.
