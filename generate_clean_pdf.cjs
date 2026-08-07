const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 30
});

const outputPath = path.join(__dirname, 'public', 'Syed_Umair_Ahmed_Resume.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Colors
const primaryColor = '#0f2c59';
const secondaryColor = '#1d4ed8';
const darkTextColor = '#1e293b';
const lightTextColor = '#475569';
const bgColor = '#f8fafc';

// Header Name
doc.fillColor(primaryColor).fontSize(22).font('Helvetica-Bold').text('SYED UMAIR AHMED', 30, 30);
doc.fillColor(secondaryColor).fontSize(11).font('Helvetica-Bold').text('COMPUTER SCIENCE ENGINEERING STUDENT', 30, 56);

// Header Summary
doc.fillColor(darkTextColor).fontSize(9.5).font('Helvetica')
   .text('Computer Science Engineering student with skills in web development and programming. Passionate about building user-friendly applications and solving real-world problems. Eager to contribute to real-world projects through a software development internship while continuously learning and improving.', 30, 72, { width: 340, align: 'left', lineGap: 3 });

// Contact Info (Right Side)
doc.fillColor(darkTextColor).fontSize(9).font('Helvetica');
doc.text('+91 8688381782', 390, 32, { align: 'right' });
doc.text('syedumairahmed9999@gmail.com', 390, 46, { align: 'right' });
doc.fillColor(secondaryColor).text('github.com/Syedumair05', 390, 60, { align: 'right' });
doc.text('linkedin.com/in/syedumair05', 390, 74, { align: 'right' });
doc.fillColor(darkTextColor).text('Hyderabad, Telangana, India', 390, 88, { align: 'right' });

// Horizontal Line
doc.moveTo(30, 130).lineTo(565, 130).strokeColor('#cbd5e1').lineWidth(1).stroke();

// Left Column Background Box
doc.rect(30, 140, 170, 640).fill('#f8fafc');

// === LEFT COLUMN CONTENT ===
let leftY = 150;

function drawSectionHeaderLeft(title) {
  doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text(title, 40, leftY);
  leftY += 14;
  doc.moveTo(40, leftY).lineTo(190, leftY).strokeColor(primaryColor).lineWidth(1.5).stroke();
  leftY += 8;
}

// EDUCATION
drawSectionHeaderLeft('EDUCATION');
doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('B.E. Computer Science Engg.', 40, leftY);
leftY += 12;
doc.fillColor(lightTextColor).fontSize(8.5).font('Helvetica').text('Lords Inst. of Engg. & Tech', 40, leftY);
leftY += 11;
doc.fillColor('#64748b').fontSize(8).font('Helvetica-Bold').text('2024 - 2028', 40, leftY);
leftY += 16;

doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('Intermediate (MPC)', 40, leftY);
leftY += 12;
doc.fillColor(lightTextColor).fontSize(8.5).font('Helvetica').text('Shaheen Junior College', 40, leftY);
leftY += 11;
doc.fillColor('#64748b').fontSize(8).font('Helvetica-Bold').text('2022 - 2024', 40, leftY);
leftY += 16;

doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text('SSC (Class X)', 40, leftY);
leftY += 12;
doc.fillColor(lightTextColor).fontSize(8.5).font('Helvetica').text('St. Aristotle School', 40, leftY);
leftY += 11;
doc.fillColor('#64748b').fontSize(8).font('Helvetica-Bold').text('2022', 40, leftY);
leftY += 22;

// TECHNICAL SKILLS
drawSectionHeaderLeft('TECHNICAL SKILLS');
doc.fillColor(primaryColor).fontSize(9).font('Helvetica-Bold').text('Languages:', 40, leftY);
leftY += 11;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('Java, Python, C (Basic)', 40, leftY);
leftY += 16;

doc.fillColor(primaryColor).fontSize(9).font('Helvetica-Bold').text('Web Technologies:', 40, leftY);
leftY += 11;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('HTML, CSS, JavaScript, React.js', 40, leftY);
leftY += 16;

doc.fillColor(primaryColor).fontSize(9).font('Helvetica-Bold').text('Tools & Platforms:', 40, leftY);
leftY += 11;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('Git, GitHub, VS Code', 40, leftY);
leftY += 16;

doc.fillColor(primaryColor).fontSize(9).font('Helvetica-Bold').text('Concepts:', 40, leftY);
leftY += 11;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('OOP, Data Structures, Algorithms, DBMS, AI/ML Basics', 40, leftY, { width: 150 });
leftY += 28;

// CERTIFICATIONS
drawSectionHeaderLeft('CERTIFICATIONS');
const certs = [
  'NPTEL - Java Programming',
  'JP Morgan - Software Engg Job Sim',
  'Oracle Cloud AI Foundations 2025',
  'C Beginner - Great Learning',
  'Data Structures - Great Learning',
  'Ethical Gen AI - Simplilearn',
  'Fundamentals of SQL - Simplilearn',
  'Machine Learning - Simplilearn',
  'QuizOff 2026 AI Quiz - CampusCrew',
  'AI Tool Workshop - Be10x'
];

certs.forEach((c, idx) => {
  doc.fillColor(primaryColor).fontSize(8).font('Helvetica-Bold').text(`${idx + 1}. `, 40, leftY, { continued: true });
  doc.fillColor(darkTextColor).fontSize(8).font('Helvetica').text(c);
  leftY += 13;
});
leftY += 12;

// LANGUAGES
drawSectionHeaderLeft('LANGUAGES');
doc.fillColor(darkTextColor).fontSize(9).font('Helvetica-Bold').text('English  •  Hindi  •  Telugu', 40, leftY);


// === RIGHT COLUMN CONTENT ===
let rightY = 150;
const rightX = 215;
const rightWidth = 350;

function drawSectionHeaderRight(title) {
  doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text(title, rightX, rightY);
  rightY += 15;
  doc.moveTo(rightX, rightY).lineTo(565, rightY).strokeColor(primaryColor).lineWidth(1.5).stroke();
  rightY += 10;
}

// EXPERIENCE & INTERNSHIPS
drawSectionHeaderRight('EXPERIENCE & INTERNSHIPS');

doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Backend AI Engineering Intern', rightX, rightY);
doc.fillColor('#64748b').fontSize(8.5).font('Helvetica-Bold').text('Jul 2026 - Present | Remote', 430, rightY, { align: 'right' });
rightY += 13;
doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text('FlyRank AI (Chicago, IL, USA)', rightX, rightY);
rightY += 12;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('Currently interning at FlyRank AI as an AI intern, focusing on Backend AI Engineering, intelligent model APIs, and machine learning infrastructure.', rightX, rightY, { width: rightWidth });
rightY += 24;

doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('Frontend Developer Intern', rightX, rightY);
doc.fillColor('#64748b').fontSize(8.5).font('Helvetica-Bold').text('Aug 2026 - Present | 6 Months', 430, rightY, { align: 'right' });
rightY += 13;
doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text('Alfido Tech (Candidate ID: BS/REG/125802)', rightX, rightY);
rightY += 12;
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text('Engaged in hands-on task-based learning model, building real-world web applications, component architecture, and responsive user interfaces.', rightX, rightY, { width: rightWidth });
rightY += 28;

// PROJECTS
drawSectionHeaderRight('PROJECTS');

const projects = [
  {
    name: 'AI Accident Detection Dashboard',
    link: 'github.com/Syedumair05/AI-Accident-Detection',
    desc: 'Developed an AI-powered dashboard to detect road accidents and provide real-time alerts using computer vision techniques.',
    bullets: ['Utilized AI models and video feeds to identify accidents and trigger alerts.', 'Built an interactive dashboard to visualize incident data.']
  },
  {
    name: 'AgriMitra - AI Crop Market Intelligence',
    link: 'github.com/Syedumair05/AgriMitra-',
    desc: 'An intelligent agricultural market advisor helping farmers maximize crop profits through mandi price analysis and price predictions.',
    bullets: ['Real-time mandi prices, smart price prediction & profit calculator.', 'Multilingual & voice support with weather & maps integration.']
  },
  {
    name: 'Job Shield',
    link: 'github.com/Syedumair05/Job-Shield',
    desc: 'Built a platform focused on job-related safety and security features, user authentication, and secure data handling.',
    bullets: ['Implemented user authentication and secure data handling.']
  },
  {
    name: 'Virtual Lab Experience',
    link: 'github.com/Syedumair05/virtual-lab-experience',
    desc: 'Created a virtual lab platform to simulate practical science experiments for students in a digital environment.',
    bullets: ['Simulated experiments with real-time interaction.']
  }
];

projects.forEach((p) => {
  doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text(p.name, rightX, rightY);
  doc.fillColor(secondaryColor).fontSize(8).font('Helvetica').text(p.link, 380, rightY, { align: 'right' });
  rightY += 12;
  doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica').text(p.desc, rightX, rightY, { width: rightWidth });
  rightY += (doc.heightOfString(p.desc, { width: rightWidth }) + 3);
  p.bullets.forEach((b) => {
    doc.fillColor(lightTextColor).fontSize(8).font('Helvetica').text(`• ${b}`, rightX + 8, rightY, { width: rightWidth - 8 });
    rightY += 11;
  });
  rightY += 6;
});

// RELEVANT COURSEWORK & ACHIEVEMENTS
drawSectionHeaderRight('RELEVANT COURSEWORK & ACHIEVEMENTS');
doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica')
   .text('• Data Structures   • Object-Oriented Programming   • DBMS   • Operating Systems   • Computer Networks   • Artificial Intelligence', rightX, rightY, { width: rightWidth });
rightY += 22;

doc.fillColor(darkTextColor).fontSize(8.5).font('Helvetica')
   .text('• Completed 10+ industry-recognized certifications in programming, AI, cloud, and databases.\n• Actively participated in coding challenges and technical events.\n• Built and deployed multiple real-world projects using modern web technologies.', rightX, rightY, { width: rightWidth, lineGap: 3 });

// Tagline Banner at Bottom
doc.rect(30, 792 - 35, 535, 20).fill(primaryColor);
doc.fillColor('#ffffff').fontSize(8.5).font('Helvetica-Bold').text('"Eager to learn, build and contribute to impactful projects."', 30, 792 - 29, { width: 535, align: 'center' });

doc.end();
console.log('PDF resume successfully generated in public directory!');
