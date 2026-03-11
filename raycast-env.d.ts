/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `browse-quicklinks` command */
  export type BrowseQuicklinks = ExtensionPreferences & {}
  /** Preferences accessible in the `add-link` command */
  export type AddLink = ExtensionPreferences & {}
  /** Preferences accessible in the `import-export` command */
  export type ImportExport = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `browse-quicklinks` command */
  export type BrowseQuicklinks = {
  /** Search */
  "search": string
}
  /** Arguments passed to the `add-link` command */
  export type AddLink = {}
  /** Arguments passed to the `import-export` command */
  export type ImportExport = {}
}

