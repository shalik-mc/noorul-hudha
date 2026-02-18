let entries = [];

function addEntry(){

let entry = {
name: document.getElementById("name").value,
team: document.getElementById("team").value,
program: document.getElementById("program").value,
marks: parseInt(document.getElementById("marks").value),
category: document.getElementById("category").value,
division: document.getElementById("division").value,
subdivision: document.getElementById("subdivision").value
};

if(!entry.name || !entry.marks) return;

entries.push(entry);
renderTable();
renderTotals();
}

function renderTable(){

let tbody = document.querySelector("#entryTable tbody");
tbody.innerHTML="";

entries.forEach(e=>{
tbody.innerHTML+=`
<tr>
<td>${e.name}</td>
<td>${e.team}</td>
<td>${e.program}</td>
<td>${e.marks}</td>
<td>${e.category}</td>
<td>${e.division}</td>
<td>${e.subdivision}</td>
</tr>
`;
});
}

function renderTotals(){

let totals = {};

entries.forEach(e=>{
if(!totals[e.team]) totals[e.team]=0;
totals[e.team]+=e.marks;
});

let tbody = document.querySelector("#teamTotals tbody");
tbody.innerHTML="";

for(let team in totals){
tbody.innerHTML+=`
<tr>
<td>${team}</td>
<td>${totals[team]}</td>
</tr>
`;
}
}

function clearAll(){
entries=[];
renderTable();
renderTotals();
}

function exportPDF(){

const element = document.getElementById("resultSheet");

const opt = {
margin:0.5,
filename:'Fest_Result.pdf',
image:{ type:'jpeg', quality:0.98 },
html2canvas:{ scale:2 },
jsPDF:{ unit:'in', format:'a4', orientation:'portrait' }
};

html2pdf().set(opt).from(element).save();
}