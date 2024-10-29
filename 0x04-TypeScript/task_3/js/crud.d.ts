// ambient declaration for crud.js
import { RowID, RowElement } from "./interface";

// expected types and returns for the crud.js functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowID: RowID): void;
export function updateRow(rowID: RowID, row: RowElement): RowID;
