// Define the Student interface with required properties
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

  // Create student1 object with properties conforming to the Student interface
  const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York",
  };

  // Create student2 object with properties conforming to the Student interface
  const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 22,
	location: "Los Angeles",
  };

  // Create an array of students
  const studentsList: Student[] = [student1, student2];

  // Get the body element from the document
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

  // Create a table element
  const table: HTMLTableElement = document.createElement("table");

  // Create thead and tbody elements for the table
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  // Insert a row into the thead
  const rowHead: HTMLTableRowElement = thead.insertRow(0);

  // Insert two cells into the row for table headers
  const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
  const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

  // Set the text content for the header cells
  cell1Head.innerHTML = "First Name";
  cell2Head.innerHTML = "Location";

  // Append the thead to the table
  table.append(thead);

  // Iterate over the studentsList array to create rows and cells for each student
  studentsList.forEach((student: Student) => {
	// Insert a row into the tbody
	const row: HTMLTableRowElement = tbody.insertRow();

	// Insert two cells into the row
	const cell1: HTMLTableCellElement = row.insertCell(0);
	const cell2: HTMLTableCellElement = row.insertCell(1);

	// Set the text content for the cells with student details
	cell1.innerHTML = student.firstName;
	cell2.innerHTML = student.location;
  });

  // Append the tbody to the table
  table.append(tbody);

  // Append the complete table to the body
  body.append(table);
