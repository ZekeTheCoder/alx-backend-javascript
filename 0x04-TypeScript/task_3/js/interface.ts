// rowID type alias - represent unique identifiers for rows
export type RowID = number;

// row element interface (row struct in a data table or db)
export interface RowElement {	
	firstName: string;
	lastName: string;
	age?: number; //optional
}
