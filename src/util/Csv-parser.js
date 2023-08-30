import React, { useState } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const Parser = () => {

	// This state will store the parsed data
	const [data, setData] = useState([]);

	// It state will contain the error when
	// correct file extension is not used
	const [error, setError] = useState("");

	// It will store the file uploaded by the user
	const file = '../data.csv';

	// This function will be called when
	// the file input changes


	const handleParse = () => {



		// Initialize a reader which allows user
		// to read any file or blob.
		const reader = new FileReader();

		// Event listener on reader when the file
		// loads, we parse it and set the data.
		reader.onload = async ({ target }) => {
			const csv = Papa.parse(target.result, { header: true });
			const parsedData = csv?.data;
			const columns = Object.keys(parsedData[0]);
			setData(columns);
		};
		reader.readAsText(file);
	};

};

export default Parser;
