// Rebuild the complete self-contained offline guide from the current site.
const fs=require('fs'),vm=require('vm'),path=require('path');
process.chdir(__dirname);
const main={innerHTML:'',focus(){}},print={addEventListener(){}};
const document={getElementById:id=>id==='main'?main:id==='print'?print:null,querySelectorAll:()=>[],addEventListener(){}};
const context={document,window:{addEventListener(){}},location:{hash:'#overview',protocol:'file:'},navigator:{},localStorage:{getItem(){return null}},requestAnimationFrame(){}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('data.js','utf8')+'\n'+fs.readFileSync('app.js','utf8'),context);
let html=vm.runInContext(`printing=true;'<section id="overview">'+overview()+'</section>'+DAYS.map(d=>'<section id="itinerary-'+d.id+'">'+dayView(d.id)+'</section>').join('')+'<section id="budget">'+budgetPage()+'</section><section id="explore">'+explorePage()+'</section><section id="transit">'+transit()+'</section><section id="food">'+foodPage()+'</section><section id="weather">'+weather()+'</section><section id="souvenirs">'+souvenirsPage()+'</section><section id="bookings">'+bookings()+'</section><section id="sources">'+sourcesPage()+'</section>'`,context);
html=html.replace(/href="#food\/([^"]+)"/g,'href="#meal-$1"').replace(/href="#itinerary\/([^"]+)"/g,'href="#itinerary-$1"').replace(/href="#itinerary"/g,'href="#itinerary-dec-09"');
for(const name of ['providence','hartford'])html=html.replaceAll(`src="${name}.jpg"`,`src="data:image/jpeg;base64,${fs.readFileSync(name+'.jpg').toString('base64')}"`);
const css=fs.readFileSync('styles.css','utf8')+'\n.offline-link,.controls,.day-selector,.form-row,#bill-result,.checklist,.budget-editor{display:none!important}.timeline-layout{grid-template-columns:1fr}.day-aside{position:static}section[id]{scroll-margin-top:30px}section[id]:not(#overview){margin-top:70px;border-top:1px solid var(--line);padding-top:30px}main{max-width:1300px;margin:auto;padding:24px}';
const favicon='data:image/svg+xml;base64,'+fs.readFileSync('favicon.svg').toString('base64');
fs.writeFileSync('printable.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RI / CT — Complete offline winter guide</title><link rel="icon" type="image/svg+xml" href="'+favicon+'"><style>'+css+'</style></head><body><main><p>Complete offline guide · Research checked November 18, 2026. Source links and live directions require internet access. Budget and café/shopping sections are included; edit your amounts in the online guide. Use your browser’s Print command to save a PDF.</p>'+html+'</main></body></html>');
console.log('Exported printable.html with all sections and embedded images.');
