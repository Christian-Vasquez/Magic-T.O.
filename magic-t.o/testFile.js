// let fs = require('fs'),
// PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );

// pdfParser.on("pdfParser_dataReady", pdfData => {
//   console.log("inside reader")
// fs.writeFile("./data.json", JSON.stringify(pdfData));
// });

// pdfParser.loadPDF("./sampleFiles/20180922175109000000.pdf");


let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );

pdfParser.on("pdfParser_dataReady", function(pdfData){

  console.log(JSON.stringify(pdfData))
    // console.log(pdfData)
//
// fs.writeFile("./data.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./sampleFiles/pdf-sample.pdf");

function test(){
  console.log("Got it Bitch ")
}