/// <reference path="crud.d.ts" /> 
 // triple-slash directive - includes type declarations from crud.d.ts.
 
import { RowID, RowElement } from "./interface";
import { insertRow, deleteRow, updateRow } from "./crud"; // named import
// import * as CRUD from './crud'; // namespace import

// create row element object(row in db)
const row: RowElement = {
	firstName : "Guillaume",
	lastName : "Salva",
};

// insert row and get new rowID
const newRowID: RowID = insertRow(row);
console.log(`New row ID: ${newRowID}`);

// update row object with additional age property
const updatedRow: RowElement = { 
	...row,
	age: 23
};

// update row usinng newRowID and updated object
updateRow(newRowID, updatedRow);

// delete row
deleteRow(newRowID);
