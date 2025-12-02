const fs = require('fs');
const PDFDocument = require('pdfkit');

const markdown = fs.readFileSync('./CAPSTONE_THESIS_NEXUS.md', 'utf8');

const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  fontSize: 11,
  font: 'Helvetica'
});

const sections = markdown.split('\n\n');
let pageCount = 1;

doc.fontSize(24).font('Helvetica-Bold').text('NEXUS', { align: 'center' });
doc.fontSize(16).font('Helvetica').text('Real-Time Player Finding System', { align: 'center' });
doc.fontSize(14).text('for Competitive Gaming', { align: 'center' });
doc.moveDown(1);

for (let i = 0; i < sections.length; i++) {
  const lines = sections[i].split('\n');
  
  for (let j = 0; j < lines.length; j++) {
    const line = lines[j];
    
    if (line.startsWith('# ')) {
      if (doc.y > doc.page.height - 100) doc.addPage();
      doc.fontSize(18).font('Helvetica-Bold').text(line.substring(2));
      doc.moveDown(0.2);
    } else if (line.startsWith('## ')) {
      doc.fontSize(14).font('Helvetica-Bold').text(line.substring(3));
      doc.moveDown(0.15);
    } else if (line.startsWith('### ')) {
      doc.fontSize(12).font('Helvetica-Bold').text(line.substring(4));
      doc.moveDown(0.1);
    } else if (line.startsWith('- ')) {
      doc.fontSize(11).font('Helvetica').text(line.substring(2), { indent: 15 });
    } else if (line.trim() && !line.startsWith('|') && !line.startsWith('```')) {
      doc.fontSize(10).font('Helvetica').text(line.trim());
    }
  }
  
  doc.moveDown(0.3);
}

const stream = fs.createWriteStream('./CAPSTONE_THESIS_NEXUS.pdf');
doc.pipe(stream);
doc.end();

stream.on('finish', () => {
  console.log('✅ PDF generated: CAPSTONE_THESIS_NEXUS.pdf');
  process.exit(0);
});
