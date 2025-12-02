const fs = require('fs');
const PDFDocument = require('pdfkit');

// Read markdown file
const markdown = fs.readFileSync('./CAPSTONE_THESIS_NEXUS.md', 'utf8');

// Create PDF document
const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  fontSize: 11
});

// Split content into logical sections
const sections = markdown.split('\n\n');

doc.fontSize(20).font('Helvetica-Bold').text('NEXUS', { align: 'center' });
doc.fontSize(14).text('A Real-Time Player Finding System', { align: 'center' });
doc.fontSize(14).text('for Competitive Gaming', { align: 'center' });

for (let section of sections) {
  const lines = section.split('\n');
  
  for (let line of lines) {
    if (line.startsWith('# ')) {
      doc.addPage().fontSize(18).font('Helvetica-Bold').text(line.substring(2));
    } else if (line.startsWith('## ')) {
      doc.moveDown(0.3).fontSize(14).font('Helvetica-Bold').text(line.substring(3));
      doc.moveDown(0.2);
    } else if (line.startsWith('### ')) {
      doc.moveDown(0.2).fontSize(12).font('Helvetica-Bold').text(line.substring(4));
      doc.moveDown(0.1);
    } else if (line.startsWith('- ')) {
      doc.fontSize(11).font('Helvetica').text(line.substring(2), { indent: 15 });
    } else if (line.trim() && !line.startsWith('|') && !line.startsWith('```')) {
      doc.fontSize(11).font('Helvetica').text(line, { align: 'justify' });
    }
  }
  
  doc.moveDown(0.3);
}

// Save PDF
const stream = fs.createWriteStream('./CAPSTONE_THESIS_NEXUS.pdf');
doc.pipe(stream);
doc.end();

stream.on('finish', () => {
  console.log('✅ PDF generated successfully: CAPSTONE_THESIS_NEXUS.pdf');
});
