/* Research checked November 18, 2026. Booked times supplied by traveler. */
const SOURCES = {
 uconnBucket:{name:"UConn · Hartford student bucket list (historical student-use context)",url:"https://saa-rso.media.uconn.edu/wp-content/uploads/sites/844/2022/08/81-Things-to-Do-Hartford-Edition.pdf",kind:"Student recommendations"},
 brownFood:{"name": "Brown University · student-favorite East Side Pockets", "url": "https://admission.brown.edu/beyond-the-tour", "kind": "Student recommendations"},
 pocketsMenu:{"name": "East Side Pockets · official linked ordering menu", "url": "https://www.ediningexpress.com/live40/617/1130/", "kind": "Verified menus"},
 pocketsHours:{"name": "East Side Pockets · official hours", "url": "https://www.eastsidepocket.com/hours.html", "kind": "Verified hours"},
 antoniosMenu:{"name": "Antonio’s Thayer · live Toast ordering menu", "url": "https://order.toasttab.com/online/antonios-pizza-by-the-slice-thayer-st", "kind": "Verified menus"},
 antoniosStudents:{"name": "Brown Classics · student account of Antonio’s", "url": "https://classics.brown.edu/news/2025-06-06/class-2025", "kind": "Student recommendations"},
 studentCafes:{"name": "Brown Daily Herald · student café interviews, December 2025", "url": "https://www.browndailyherald.com/article/2025/12/grounds-for-conversation-students-favorite-coffee-shops-near-campus", "kind": "Student reporting"},
 ceremonyMenu:{"name": "Ceremony Brook Street · official linked Toast menu", "url": "https://order.toasttab.com/online/ceremony", "kind": "Verified menus"},
 ceremonyHours:{"name": "Ceremony · official locations and hours", "url": "https://www.ceremonypvd.com/locations", "kind": "Verified hours"},
 ctStudentFood:{"name": "Trinity College · student recommendations for Bear’s and Story and Soil", "url": "https://www.trincoll.edu/admissions/treasured-spots-in-hartford/", "kind": "Student recommendations"},
 ctStudentPratt:{"name": "Trinity College · Pratt Street, Bloom and local shops", "url": "https://www.trincoll.edu/oiss/living-in-the-us/neighborhoods/downtown/", "kind": "Student recommendations"},
 bearsMenu:{"name": "Bear’s Hartford · official posted food menu", "url": "https://bearsbbq.com/hfw-menu", "kind": "Verified menus"},
 bloomMenu:{"name": "Bloom · current linked bakery and savory menu", "url": "https://bloombakeshopct.com/bakerymenu", "kind": "Verified menus"},
 bloomCoffee:{"name": "Bloom · current linked coffee menu", "url": "https://bloombakeshopct.com/coffeemenu", "kind": "Verified menus"},
 storyMenu:{"name": "Story and Soil · official-linked pickup menu, Hartford", "url": "https://order.online/business/872532/store/280533?pickup=true&redirected=true", "kind": "Verified menus"},
 ctCommunity:{"name": "Trinity College · public campus cafés, library and athletic events", "url": "https://www.trincoll.edu/cher/opportunities/community-visitors/", "kind": "Public access"},
 wolfGame:{"name": "Official AXS listing · December 11 College Night, 7pm", "url": "https://www.axs.com/events/1289708/hartford-wolf-pack-v-rochester-americans-tickets", "kind": "Sports"},
 wolfOffer:{"name": "Official AXS · December 11 $20 all-in offer", "url": "https://www.axs.com/events/1289708/hartford-wolf-pack-v-rochester-americans-tickets/promos/1230235", "kind": "Verified tickets"},
 wolfDeals:{"name": "Wolf Pack · Friday $3 hot-dog promotion", "url": "https://www.hartfordwolfpack.com/tickets/friday-night-den-deals", "kind": "Verified menus"},
 brownSports:{"name": "Brown Athletics · 2026–27 men’s basketball schedule", "url": "https://brownbears.com/sports/mens-basketball/schedule/2026-27", "kind": "Sports"},
 uconnSports:{"name": "UConn Athletics · 2026–27 men’s basketball schedule", "url": "https://uconnhuskies.com/sports/mens-basketball/schedule/2026-27", "kind": "Sports"},
 sallyCurrent:{"name": "Black-Eyed Sally’s · linked All Day Menu 2026", "url": "https://ohbz.com/design/82da5050-1cdd-41f4-87d3-56bb810d91eb", "kind": "Verified menus"},
 elliesMenu:{"name": "Ellie’s · official current daytime menu", "url": "https://elliesprov.com/menu/", "kind": "Verified menus"},
 parkvilleMenu:{"name": "Parkville · official pickup menu, Pho King Spot / Thai Street Food", "url": "https://parkvillemarket.menu/pickup?menu=89909a30-9790-41ef-8893-4c37dc16962a", "kind": "Verified menus"},

 pocketsStudents:{name:"The Food Lens · East Side Pockets and Brown student clientele",url:"https://www.thefoodlens.com/boston/explore/escapes/providence-ri/east-side-pockets/",kind:"Neighborhoods"},
 thayer:{name:"Thayer Street District · restaurants, shopping and College Hill",url:"https://www.thayerstreetdistrict.com/",kind:"Neighborhoods"},
 wickenden:{name:"Visit Rhode Island · Wickenden Street",url:"https://www.visitrhodeisland.com/things-to-do/trip-ideas-getaways/village-experiences-shops/wickenden-street-providence/",kind:"Neighborhoods"},
 pratt:{name:"Pratt Street · merchant directory",url:"https://prattst.com/merchants/",kind:"Neighborhoods"},
 bloom:{name:"Bloom Bake Shop · current shop hours and dining room",url:"https://bloombakeshopct.com/our-shop",kind:"Menus"},
 storySoil:{name:"Story and Soil · independent Hartford café",url:"https://www.storyandsoilcoffee.com/",kind:"Menus"},
 hartfordPrints:{name:"Hartford Prints · Pratt Street shop",url:"https://hartfordprints.com/pages/shop",kind:"Souvenirs"},
 eastPockets:{name:"East Side Pockets · official menu and ordering",url:"https://www.eastsidepocket.com/",kind:"Menus"},
 westDiner:{name:"West Side Diner · address and hours",url:"https://westsidedinerri.com/contact.html",kind:"Menus"},
 ashleys:{name:"CTvisit · Ashley’s breakfast and lunch diner",url:"https://ctvisit.com/listings/ashleys",kind:"Menus"},
 brownDates:{name:"Brown Registrar · 2026–27 academic calendar",url:"https://registrar.brown.edu/academic-calendar/2026-2027-academic-calendar",kind:"Neighborhoods"},
 uconnHartford:{name:"UConn · downtown Hartford campus",url:"https://admissions.uconn.edu/campuses/hartford/",kind:"Neighborhoods"},
 trinityCampus:{name:"Trinity College · Hartford campus location",url:"https://www.trincoll.edu/admissions/visit-trinity/travel-to-campus/",kind:"Neighborhoods"},
 uhart:{name:"University of Hartford · campus map and location",url:"https://www.hartford.edu/student-life/transportation/default.aspx",kind:"Neighborhoods"},
 ctfastrak:{name:"CTtransit · CTfastrak bus rapid transit",url:"https://www.cttransit.com/services/ctfastrak",kind:"Transit"},
 hartfordRail:{name:"CTrail · Hartford Line regional rail",url:"https://hartfordline.com/about/",kind:"Transit"},
 pvdRail:{name:"PVD Airport · public buses and MBTA commuter rail",url:"https://flyri.com/passengers/public-transit-buses/",kind:"Transit"},

 starbucksRI:{name:'Starbucks · Providence Place store locator',url:'https://www.starbucks.com/store-locator/store/1031725/providence-place-mall-1-providence-place-providence-ri-02903-us',kind:'Souvenirs'},
 starbucksRIlisting:{name:'Providence Place Starbucks · corroborating store listing',url:'https://www.yellowpages.com/providence-ri/mip/starbucks-coffee-503937169',kind:'Souvenirs'},
 mall:{name:'Providence Place · Official mall hours',url:'https://www.providenceplace.com/hours/',kind:'Souvenirs'},
 starbucksCT:{name:'Marriott · Hartford lobby Starbucks and hours',url:'https://www.marriott.com/en-us/hotels/bdldt-hartford-marriott-downtown/dining/',kind:'Souvenirs'},
 starbucksCTbackup:{name:'City Place Starbucks · secondary listing and phone',url:'https://www.waze.com/live-map/directions/starbucks-asylum-st-185-hartford?to=place.w.188285346.1882984529.8395081',kind:'Souvenirs'},
 starbucksMugs:{name:'Starbucks · Discovery destination collection',url:'https://about.starbucks.com/stories/2024/fun-facts-and-surprise-about-starbucks-new-collectible-merch/',kind:'Souvenirs'},
 riKnown:{name:'Visit Rhode Island · Coffee milk and local foods',url:'https://www.visitrhodeisland.com/editorial/post/unique-rhode-island-quirky-and-proud-of-it/',kind:'Souvenirs'},
 riJewelry:{name:'Visit Rhode Island · Providence jewelry history',url:'https://www.visitrhodeisland.com/listing/providence-walks%3A-the-jewelry-district-historic-tour/9575/',kind:'Souvenirs'},
 riPostcard:{name:'RISD Store · $1.50 vintage Rhode Island postcards',url:'https://www.risdstore.com/gifts/cards-stationery/postcards-4151363/',kind:'Souvenirs'},
 ctFood:{name:'CTvisit · Pizza and hot-buttered lobster rolls',url:'https://ctvisit.com/articles/lobster-lovers-guide',kind:'Souvenirs'},
 risdStore:{name:'RISD Store · 30 North Main Street and semester hours',url:'https://www.risdstore.com/service/hours/',kind:'Souvenirs'},
 ctKnown:{name:'CTvisit · Made-in-Connecticut gift ideas',url:'https://ctvisit.com/articles/made-connecticut-gift-giving-ideas',kind:'Souvenirs'},
 ctTwain:{name:'CTvisit · Mark Twain’s Hartford',url:'https://ctvisit.com/getaways/follow-mark-twains-footsteps',kind:'Souvenirs'},
 ctMagnet:{name:'Wadsworth shop · $6.95 Hartford / Connecticut magnets',url:'https://www.wadsworthshop.org/collections/magnets?page=2',kind:'Souvenirs'},

 wave:{name:'RIPTA · Wave fares and QR boarding',url:'https://wave.ripta.com/en/help/',kind:'Transit'},
 airportRI:{name:'RIPTA · Route 66, January 2026 schedule',url:'https://www.ripta.com/sites/default/files/2026-01/Route_66_1_26_Final_0.pdf',kind:'Transit'},
 ct:{name:'CTtransit · Fares and mobile ticket instructions',url:'https://www.cttransit.com/fare-options',kind:'Transit'},
 flyer:{name:'CTtransit · Bradley Flyer weekday timetable',url:'https://www.cttransit.com/sites/default/files/schedules/30_weekday_15.html',kind:'Transit'},
 route87:{name:'CTtransit · Route 87 map',url:'https://www.cttransit.com/sites/default/files/maps/route/87.html',kind:'Transit'},
 risd:{name:'RISD Museum · Hours and free Thursday evenings',url:'https://risdmuseum.org/hours-admission',kind:'Free sights'},
 wads:{name:'The Wadsworth · December 12 free admission',url:'https://www.thewadsworth.org/event/second-saturdays-for-families-winter-wonderland-3/',kind:'Events'},
 winterfair:{name:'Winterfair · 2026 Hartford holiday market',url:'https://www.winterfairct.com/hartford',kind:'Events'},
 winterfest:{name:'Winterfest · 2026 event calendar',url:'https://www.winterfesthartford.com/events',kind:'Events'},
 waterfire:{name:'WaterFire · 2026 calendar',url:'https://waterfire.org/event-calendar/',kind:'Events'},
 library:{name:'Providence Public Library · Hours and tours',url:'https://provlib.org/visit-us/historic-library-tours/',kind:'Free sights'},
 statehouse:{name:'RI Department of State · Free State House tours',url:'https://www.sos.ri.gov/divisions/civics-and-education/ri-state-house/state-house-tours',kind:'Free sights'},
 climateRI:{name:'NOAA · Providence 1991–2020 monthly normals',url:'https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00014765&format=pdf&startDate=0001-01-01&endDate=9996-12-31',kind:'Weather'},
 climateCT:{name:'NOAA · Hartford Bradley 1991–2020 monthly normals',url:'https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00014740&format=pdf&startDate=0001-01-01&endDate=9996-12-31',kind:'Weather'},
 forecastRI:{name:'National Weather Service · Providence forecast',url:'https://forecast.weather.gov/MapClick.php?lat=41.824&lon=-71.413',kind:'Weather'},
 forecastCT:{name:'National Weather Service · Hartford forecast',url:'https://forecast.weather.gov/MapClick.php?lat=41.764&lon=-72.674',kind:'Weather'},
 hotelRI:{name:'Hilton · Providence hotel at 21 Atwells Avenue',url:'https://www.hilton.com/en/hotels/pvdprgi-hilton-garden-inn-providence-downtown/',kind:'Hotels'},
 hotelCT:{name:'Hilton · East Hartford hotel and breakfast',url:'https://www.hilton.com/en/hotels/ehtcthx-hampton-suites-hartford-east-hartford/',kind:'Hotels'},
 barley:{name:'The Malted Barley · official food menu',url:'https://themaltedbarley.com/providence-downcity-the-malted-barley-food-menu',kind:'Menus'},
 trinity:{name:'Trinity Brewhouse · Current dinner menu',url:'https://www.trinitybrewhouse.com/dinner-menus',kind:'Menus'},
 trinityFee:{name:'Trinity Brewhouse · Card fee and hours',url:'https://www.trinitybrewhouse.com/',kind:'Menus'},
 ellies:{name:'Ellie’s · Official website and menu',url:'https://elliesprov.com/',kind:'Menus'},
 elliesHours:{name:'Providence Chamber · Ellie’s hours and location',url:'https://business.providencechamber.com/list/member/ellie-s-43176',kind:'Menus'},
 geoffs:{name:'Geoff’s · South Main location and hours',url:'https://geoffssuperlativesandwiches.com/',kind:'Menus'},
 bears:{name:'Bear’s · Hartford location and food menu',url:'https://bearsbbq.com/hartford',kind:'Menus'},
 sally:{name:'Black-Eyed Sally’s · Menu and hours',url:'https://blackeyedsallys.com/menu/',kind:'Menus'},
 salute:{name:'Salute · Official lunch and dinner menus',url:'https://salutehartford.com/menu',kind:'Menus'},
 parkville:{name:'Parkville Market · Vendor menus and hours',url:'https://parkvillemarket.com/food-drinks/',kind:'Menus'},
 riTax:{name:'RI Division of Taxation · 1% meals surcharge',url:'https://tax.ri.gov/tax-sections/sales-excise-taxes/meals-beverage-tax',kind:'Budget'},
 riSalesTax:{name:'RI Division of Taxation · 7% sales tax',url:'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax',kind:'Budget'},
 ctTax:{name:'CT Department of Revenue · 7.35% meals tax',url:'https://portal.ct.gov/drs/sales-tax/tax-information',kind:'Budget'},
 reviewRI:{name:'Traveler report · Providence autumn walks and indoor stops',url:'https://www.reddit.com/r/providence/comments/1x9adw2/providence_is_beautiful_in_the_fall/',kind:'Traveler context'},
 reviewCT:{name:'Local discussion · Convention Center walking and buses',url:'https://www.reddit.com/r/Hartford/comments/1xc3scl/convention_center_area_walkable/',kind:'Traveler context'}
};
const FOOD = [
 {"id": "antonios", "city": "Providence", "name": "Antonio’s Pizza · Thayer", "area": "256 Thayer Street · College Hill", "order": "Two cheese slices at $3.99 each", "base": 7.98, "status": "Live official-linked Toast menu checked Nov 18", "service": "counter", "note": "About $8.62 with RI meal tax before optional tip or online fees. Pepperoni slices are $4.99 each; two with tax about $10.78. Brown’s Classics site includes a student account of eating here. Thursday uses the regular listed prices; no Wednesday-only deal is applied. Use instead of the East Side Pockets lunch, not in addition.", "sources": ["antoniosMenu", "antoniosStudents"]},
 {"id": "ceremony", "city": "Providence", "name": "Ceremony · Brook Street", "area": "406 Brook Street · College Hill", "order": "Americano", "base": 4.5, "status": "Official linked pickup menu checked Nov 18", "service": "counter", "note": "Americano $4.50 before tax / $4.86 with RI meal tax. Latte $6.25 / $6.75 with tax; strawberry matcha $7 / $7.56 with tax. A student interview feature documents this as a study-and-coffee spot. A more expensive specialty café, so choose the Americano for the affordable option. Thu venue hours 8am–6:30pm. Replace your other café order.", "sources": ["ceremonyMenu", "ceremonyHours", "studentCafes"]},
 {"id": "story-soil", "city": "Hartford", "name": "Story and Soil Coffee", "area": "387 Capitol Avenue · Capitol / Frog Hollow", "order": "Americano, 12–16oz", "base": 5.56, "status": "Official-linked Hartford pickup menu checked Nov 18", "service": "counter", "note": "The website’s linked pickup menu shows $5.56 for an Americano (estimated $5.97 with CT meal tax) and $6.36 for a 12oz latte (estimated $6.83 with tax). Platform fees, tips and extras are not included in those estimates. Trinity’s student-written guide recommends the café. Current venue hours: Mon–Fri 8am–3pm, weekends 8am–4pm; older university-page hours are not used.", "sources": ["storyMenu", "storySoil", "ctStudentFood"]},

 {"id": "east-pockets", "city": "Providence", "name": "East Side Pockets", "area": "278 Thayer Street · College Hill", "service": "counter", "order": "Falafel wrap; water or other drinks priced separately", "base": 9.26, "status": "Official online menu checked Nov 18, 2026", "note": "Brown University calls this a student favorite. Verified sample online cart: wrap $9.26 + tax $0.74 + online processing fee $1 = $11 before optional tip, with no extras. A chicken kabob or gyro wrap is $12.04 before tax (about $13 with RI meal tax). The $1 fee was observed online; it is not assumed to apply at the counter. Official Thursday hours: 10am–2am. Your planned Thursday lunch, followed by Thayer browsing.", "sources": ["pocketsMenu", "pocketsHours", "brownFood"]},
 {"id": "bloom", "city": "Hartford", "name": "Bloom Bake Shop", "area": "80 Pratt Street · Downtown", "service": "counter", "order": "BLT ($12) + 12oz hot drip coffee ($3.50)", "base": 15.5, "status": "Official linked menus checked Nov 18, 2026", "note": "Published menu subtotal $15.50; about $16.64 with CT meal tax before optional tip. Lower-cost light option: $8 savory Danish + $3.50 drip coffee = $12.35 with tax. Case items rotate and may sell out; these are listed item prices, not a pre-order or stock guarantee. Tue–Sat 8am–4pm; Sun 8am–3pm. Trinity’s guide recommends Bloom/Pratt Street to its students.", "sources": ["bloomMenu", "bloomCoffee", "bloom", "ctStudentPratt"]},
 {"id": "ellies", "city": "Providence", "name": "Ellie’s", "area": "250 Westminster Street · Downcity", "service": "counter", "order": "Signature Breakfast Sandwich ($7); drinks separate", "base": 7, "status": "Official daytime menu checked Nov 18, 2026", "note": "The sandwich is $7 before tax ($7.56 with RI meal tax). Bacon, sausage or ham adds $3; a croissant substitution adds $3. Drink prices were not listed on this daytime menu, so the displayed order total covers the sandwich only. The daily breakfast envelope can cover a separately priced coffee. Breakfast served 8am–noon; Thu café hours 8am–4pm.", "sources": ["elliesMenu", "elliesHours"]},
 {id:'barley',city:'Providence',name:'The Malted Barley',area:'334 Westminster Street · Downcity',order:'Greek salad + marinated chicken + tap water',base:20,status:'Published menu: salad $15 + chicken $5',service:'table',note:'A lighter first-night choice than loaded fries. Ask for dressing on the side. Alternatives: turkey pretzel sandwich $15 or Cali Chicken pretzel sandwich $16. Sandwiches include chips; a side salad costs $6 extra. Pretzels are baked to order, so allow extra time when busy. About 10–15 minutes from the hotel.',sources:['barley']},
 {id:'trinity',city:'Providence',name:'Trinity Brewhouse',area:'186 Fountain Street · Near the hotel',order:'Brewhouse burger with fries + tap water',base:19,status:'Published menu price',service:'table',fee:.03,note:'A nearby seated dinner after RISD. Cheaper choice: $13 cheese bar pizza. Seafood alternative: $25 fish and chips. A 3% card fee is posted; reserve about $1 extra for it. Kitchen is open well beyond this itinerary’s dinner time.',sources:['trinity','trinityFee']},
 {"id": "bears", "city": "Hartford", "name": "Bear’s Smokehouse", "area": "25 Front Street · UConn Hartford / Front Street", "service": "counter", "order": "Classic pulled-pork sandwich ($12) + one side ($4); water", "base": 16, "status": "Official Hartford menu image checked Nov 18, 2026", "note": "Verified posted menu: classic sandwich $12, side $4, total $16 before tax or $17.18 with CT meal tax before an optional tip. Sandwich alone: $12.88 with tax. Skip the $9 double-meat upgrade. Trinity’s student-written admissions guide recommends Bear’s; UConn’s Hartford student bucket list also includes it. Fri–Sat 11am–10pm, Sun–Thu 11am–9pm on the current venue page.", "sources": ["bearsMenu", "bears", "ctStudentFood", "uconnBucket"]},
 {"id": "sally", "city": "Hartford", "name": "Black-Eyed Sally’s", "area": "350 Asylum Street · Union Station area", "service": "table", "order": "Southern Fried Chicken, 4 pieces with included sides", "base": 24.95, "status": "Official linked All Day Menu 2026 checked Nov 18", "note": "Correction: the restaurant’s currently linked 2026 menu lists four-piece Southern Fried Chicken at $24.95, not the older $18.95 third-party figure. With CT meal tax and an 18% pre-tax tip, about $31.27. Cheaper main: cheddar burger $16.95 before tax/tip. This is an optional alternative, outside Saturday’s cheaper café-lunch allowance. Music covers remain extra.", "sources": ["sallyCurrent", "sally"]},
 {id:'salute',city:'Hartford',name:'Salute',area:'100 Trumbull Street · Downtown',order:'Rose pasta + water',base:28,status:'Official June 2026 dinner menu',service:'table',note:'The one slightly nicer dinner: tortellini with sausage, mushrooms and spinach. Lower-cost alternative: $20 pomodoro. Book a single seat for Saturday 5:30pm if desired; no reservation has been made.',sources:['salute']},
 {"id": "parkville", "city": "Hartford", "name": "Parkville Market", "area": "1400 Park Street · Thai Street Food / Pho King Spot", "service": "counter", "order": "Thai Street Food / Pho King Spot: Chicken Pho", "base": 18.25, "status": "Official-linked pickup menu checked Nov 18, 2026", "note": "The market’s linked ordering system lists Chicken Pho at $18.25 and Veggie Pho at $17.18. Chicken Pho with estimated CT meal tax: $19.59, before optional tip or any checkout fee. These are online pickup menu prices, not an invented counter-price quote. Online items were unavailable during the after-hours check; use the posted Sunday vendor hours (11am–8pm) and confirm service on arrival. No weekday $10 deal is applied to Sunday.", "sources": ["parkvilleMenu", "parkville"]},
];
// A stop’s indoor alternative replaces that stop, never its booked transport.
const DAYS = [
 {id:'dec-09',date:'Wed, Dec 9',city:'Providence',title:'Land, settle in, slow down.',sub:'A gentle first evening after three flights.',walk:'0.8–1.5 mi',budget:[47, 62],label:'Arrival day',route:'PVD airport · hotel · Empire / Washington Streets',food:['barley'],note:'Arrival is 3:34pm Eastern. Expect to reach the hotel after dark; dinner and sleep are the priorities.',stops:[
 {time:'3:20am CT',title:'Arrive at Corpus Christi airport',type:'Booked travel',duration:'2-hour airport buffer',text:'Target arrival for the supplied 5:20am flight. Arrange transport the night before. Have your sandwich and coffee at home; no Corpus Christi breakfast purchase is budgeted.',place:'Corpus Christi International Airport',cost:'Breakfast at home · $0 trip spending',shot:'Film your bag and the departures board only after checking that no booking code, barcode, or ID is visible.'},
 {time:'5:20am–3:34pm',title:'CRP → Houston → Chicago → Providence',type:'Booked travel',duration:'All airport times local',text:'UA4187: CRP 5:20am → IAH 6:29am. UA547: IAH 7:20am → ORD 10:10am. UA4664: ORD 11:59am → PVD 3:34pm. Houston connection 51 minutes; Chicago 1h49. Go directly to your next gate at IAH. Buy lunch at ORD after finding the gate; allow $15–20.',cost:'Flights booked · fare not supplied',shot:'Window view and a short terminal establishing shot. Keep strangers, boarding passes, and personal screens out of frame.'},
 {time:'4:10–5:30pm',title:'Airport bus, then hotel check-in',type:'Transfer',duration:'Allow 60–90 min including wait',text:'After baggage, follow Ground Transportation to the RIPTA stop. Take route 66 toward Providence / Kennedy Plaza. Confirm the headsign; the other direction goes toward URI. Get off at Kennedy Plaza and walk about 12–18 minutes to 21 Atwells Avenue. Route 66 is roughly every 45 minutes on the published weekday schedule; use live departures. Hotel check-in starts 3pm.',place:'Hilton Garden Inn Providence Downtown Convention Center, 21 Atwells Avenue',origin:'Rhode Island T. F. Green International Airport',mode:'transit',cost:'RIPTA $2 · hotel booked',sources:['airportRI','wave','hotelRI'],cold:'If the next bus means a long outdoor wait, warm up inside the terminal. A taxi is an optional contingency, not included in the bus budget.'},
 {time:'5:45–6:15pm',title:'A warm architectural pause',type:'Free / indoors',duration:'Optional · 30 min',text:'Providence Public Library is about 5–8 minutes from the hotel. Ask which historic spaces are open; special rooms can be occupied by events. Wednesday public hours run until 7pm. Skip if the flight is delayed or you feel tired.',place:'Providence Public Library, 150 Empire Street',cost:'Free',sources:['library'],shot:'Exterior sign, doorway, one permitted interior detail. No flash or filming other patrons.'},
 {time:'6:20–7:20pm',title:'A lighter dinner, then an early night',type:'Food',duration:'60 min',text:'Walk about 5–8 minutes from the library to The Malted Barley. Order the Greek salad with marinated chicken and dressing on the side, plus tap water. Prefer a sandwich? The turkey pretzel sandwich is $15 and the Cali Chicken is $16; both include chips, with a side salad $6 extra. Return about 10–15 minutes along Westminster / Empire / Fountain Streets. Skip the library if delayed.',place:'The Malted Barley, 334 Westminster Street Providence',cost:'$25.20 with RI 8% meal tax + 18% pre-tax tip',meal:'barley',sources:['barley'],shot:'Storefront, salad details and warm street lights. Stop filming while crossing streets.'}
 ]},
 {id:'dec-10',date:'Thu, Dec 10',city:'Providence',title:'Marble, brick & river light.',sub:'The main photo day, ending with a free museum evening.',walk:'4–5 mi with Thayer; shorten by bus',budget:[57, 81],label:'Free museum evening',route:'Downcity · State House · East Side Pockets · Thayer Street · Benefit Street · RISD',food:['ellies','east-pockets','ceremony','trinity'],note:'Keep outdoor blocks to 20–30 minutes. Around 4:15pm is the planning sunset window; check the exact day nearer departure.',stops:[
 {time:'8:30–9:15am',title:'Coffee and breakfast at Ellie’s',type:'Food',duration:'45 min',text:'Walk about 8–12 minutes from 21 Atwells Avenue. Order the $7 Signature Breakfast Sandwich; with RI meal tax it is $7.56. Coffee is separate, inside your breakfast envelope. If you use the hotel breakfast instead, confirm whether your $10 daily food-and-drink credit applies; it is not a promise of free breakfast.',place:'Ellie’s, 250 Westminster Street Providence',cost:'Signature sandwich $7 + $0.56 tax = $7.56; coffee separate',meal:'ellies',sources:['ellies','elliesHours']},
 {time:'9:20–11:00am',title:'Rhode Island State House · confirmed tour',type:'Confirmed tour',duration:'Arrive 9:45am · tour 10–11am Eastern',statusNote:'Acceptance email received November 19 confirms one General Public Tour on December 10 at 10am Eastern. The private calendar entry matches.',text:'Your in-person General Public Tour is confirmed for Thursday, December 10, 10–11am Eastern. Arrive about 9:45am at the Smith Street entrance, 82 Smith Street. Allow 5–10 minutes for security, then meet outside the Visitor’s Center on the first floor. Groups more than 10 minutes late may not be accommodated. Follow your acceptance email for accessibility arrangements and entry instructions.',place:'Rhode Island State House, 82 Smith Street Providence',cost:'Free · confirmed',sources:['statehouse'],shot:'Exterior dome, marble stairs, rotunda detail where permitted. Put your phone away at security.'},
 {time:'11:10–11:25am',title:'Waterplace Park reflections',type:'Free / outdoors',duration:'10 min walk + 15 min stop',text:'Walk down toward the basin. Frame the curved river edge and downtown buildings from the upper paths. Use cleared pavement; skip lower stairs and icy railings. There is no WaterFire scheduled for this Thursday.',place:'Waterplace Park Providence',cost:'Free',sources:['waterfire'],shot:'A stationary 5-second wide shot, reflection close-up, then one slow pan.',cold:'Skip the river paths. Take a short indoor warm-up at Providence Place during its posted shopping hours, then return toward the hotel.'},
 {time:'11:30am–12:00pm',title:'Starbucks · Rhode Island mug hunt',type:'Souvenir / indoors',duration:'5–10 min from Waterplace · 20 min browsing',text:'Check Starbucks at 1 Providence Place for a Rhode Island destination mug. Ask for a 14oz Discovery Series mug, or Been There if that is the series you collect. Mall Thursday hours are listed as 11am–8pm; the individual Starbucks schedule and mug stock must be checked in the Starbucks app before you go. Do not assume the old Starbucks listing at your renovated hotel still applies.',place:'Starbucks, 1 Providence Place, Providence RI',cost:'Mug allowance $20–25 + 7% retail tax = $21.40–26.75; no tip on merchandise',sources:['starbucksRI','starbucksRIlisting','mall','starbucksMugs'],shot:'A store exterior and your Rhode Island mug; keep the receipt and card screen out of the frame.'},
 {time:'12:00–12:45pm',title:'Warm up and reset at the hotel',type:'Rest',duration:'15–20 min return + break',text:'Charge your phone, refill water and swap gloves. This pause splits the route into two manageable loops rather than one long cold walk.',place:'Hilton Garden Inn Providence Downtown Convention Center, 21 Atwells Avenue',cost:'No extra cost'},
 {time:'12:45–2:00pm',title:'East Side Pockets · lunch among the student-area cafés',type:'Food',duration:'30–40 min travel allowance + lunch around 1:20–2pm',text:'From your hotel, use live RIPTA directions to 278 Thayer Street or walk uphill only on clear sidewalks. Aim for lunch around 1:20pm. Order a falafel wrap and water, then use an available indoor table. This is your chosen affordable student-area food stop: Brown University’s own visitor guide names this a student favorite. The restaurant’s direct ordering menu lists the falafel wrap at $9.26; a sample online cart showed $0.74 tax and a $1 processing fee, $11 total before any tip. Official Thursday hours are 10am–2am. This replaces the Geoff’s lunch, rather than adding a second meal.',place:'East Side Pockets, 278 Thayer Street Providence',origin:'21 Atwells Avenue Providence',mode:'transit',cost:'Verified online: $9.26 wrap + $0.74 tax + $1 processing = $11 before optional tip',meal:'east-pockets',sources:['pocketsMenu','pocketsHours','brownFood'],cold:'If an operating bus avoids the icy hill and long outdoor waiting, use it. Otherwise skip College Hill: use The Malted Barley near your hotel: the published $15 turkey pretzel sandwich includes chips (about $18.90 with RI tax and an 18% seated tip), inside the $16–20 lunch envelope, then Providence Public Library from 1pm. Do not climb an icy hill for lunch.'},
 {time:'2:00–2:50pm',title:'Thayer Street · bookstore and shop browsing',type:'Shops / cafés',duration:'50 min, with indoor browsing breaks',text:'After lunch, browse the Brown Bookstore and the open shops around Thayer and Angell. Choose Ceremony at 406 Brook Street for your one café stop: an Americano is $4.50 before tax ($4.86 with RI meal tax), or a latte $6.25 ($6.75 with tax). Antonio’s at 256 Thayer is the alternate lunch if you prefer pizza: two $3.99 cheese slices are about $8.62 with tax; replace the wrap rather than buying both. Stay on public streets and in public businesses. Choose a warm drink only if you want it; the day’s coffee/snack allowance covers this stop. The university setting makes this a stronger fit for student-area daytime atmosphere than another isolated sightseeing stop. The pedestrian bridge is omitted from today’s main loop to make room.',place:'Thayer Street and Angell Street Providence',cost:'Browsing free · Ceremony Americano $4.86 with tax; optional counter tip extra',sources:['thayer','ceremonyMenu','ceremonyHours','antoniosMenu','studentCafes'],shot:'Bookstore or café sign, shop windows and one street-wide scene. Ask before filming inside; avoid close-up footage of strangers.',cold:'If College Hill is skipped, use the downtown library alternative after lunch. If already on Thayer, take indoor breaks and use a live bus downhill if the pavements become icy.'},
 {time:'3:00–4:00pm',title:'Brown exteriors → Benefit Street → South Main',type:'Free / outdoors',duration:'A downhill route with optional warm stops',text:'Leave Thayer by about 3pm and return downhill via Brown’s public-facing streets and Benefit Street toward South Main / RISD. Take short exterior-photo pauses only on cleared pavement, with indoor breaks where available. Do not add the pedestrian bridge or another hill climb. No access to university interiors is assumed. You have a full hour plus the next warm buffer before the museum’s free 5pm entry.',place:'RISD Museum, 20 North Main Street Providence',origin:'Thayer Street and Angell Street Providence',cost:'Free exterior route · bus extra only if needed',sources:['thayer','library'],shot:'Campus gates from the public street, brick façades and Benefit Street details.',cold:'Use the Providence Public Library alternative, 150 Empire Street, open Thursday 1–5pm. If starting on Thayer, check a live downhill bus route rather than risking icy sidewalks. Allow time to reach RISD by about 4:50pm.'},
 {time:'4:10–4:50pm',title:'Return toward RISD, with time to warm up',type:'Flexible',duration:'Unhurried buffer',text:'You should now be on the South Main / RISD side of College Hill. Use an open indoor café or shop for a warm pause; if you already bought a drink on Thayer, you do not need another purchase. Aim to be near the museum by 4:50pm. If using the library alternative, leave around 4:20pm and allow 20–25 minutes to RISD.',place:'RISD Museum, 20 North Main Street Providence',cost:'Optional snack allowance $6–10',cold:'Use the library until about 4:20pm, then head to the museum. If severe weather makes the trip uncomfortable, skip the museum and stay near the hotel.'},
 {time:'5:00–6:30pm',title:'RISD Museum, free after five',type:'Free / indoors',duration:'90 min',text:'Enter from the currently operating public entrance; the museum lists free Thursday admission 5–8pm. Select two or three galleries instead of rushing through everything. Get the free Thursday ticket through the official site if offered for your date.',place:'RISD Museum Providence',cost:'Free after 5pm',sources:['risd'],shot:'Museum sign, one gallery establishing shot, one favorite detail where photography is allowed. No flash; follow gallery rules.'},
 {time:'7:00–8:00pm',title:'A nearby seated dinner',type:'Food',duration:'20–25 min walk + dinner',text:'Return through downtown to Trinity Brewhouse, near the hotel. The burger includes fries; water avoids a second round of costs. The $13 cheese pizza is a good cheaper substitute. A bar seat works well for a solo meal without committing to nightlife.',place:'Trinity Brewhouse, 186 Fountain Street Providence',cost:'About $23.94 at 18%, plus card fee reserve',meal:'trinity',sources:['trinity','trinityFee']}
 ]},
 {id:'dec-11',date:'Fri, Dec 11',city:'Providence → Hartford',title:'A train day, without the rush.',sub:'A protected connection and a gentle Hartford arrival.',walk:'1–2 mi',budget:[41.75, 58.5],label:'Booked rail transfer',route:'Providence Station · New Haven · Hartford Union · hotel · Winterfest',food:['bears'],note:'Your route changes trains at New Haven. Hartford arrival is 2:14pm; hotel check-in begins at 3pm.',stops:[
 {time:'7:30–8:30am',title:'Breakfast, pack, check out early',type:'Hotel',duration:'Leave hotel by about 8:45am',text:'Use the hotel café if the $10 daily credit is confirmed and worthwhile; otherwise budget a modest breakfast nearby. The standard checkout is 11am, but you must leave earlier. Settle the bill and take all bags.',place:'Hilton Garden Inn Providence Downtown Convention Center, 21 Atwells Avenue',cost:'Breakfast allowance $8–15 before credit',sources:['hotelRI']},
 {time:'8:45–9:30am',title:'Walk to Providence Station',type:'Transfer',duration:'20–25 min + station buffer',text:'Walk to 100 Gaspee Street with time for lights and luggage. Be at the station by 9:30am, at least 30 minutes before departure. If sidewalks are icy, allow extra time and check the live transit option; do not replace this buffer with sightseeing.',place:'Providence Station, 100 Gaspee Street Providence',origin:'21 Atwells Avenue Providence',cost:'Walk free',cold:'Leave earlier and use a taxi if necessary; there is no dependable short bus connection worth risking the train for.'},
 {time:'10:01–11:56am',title:'Northeast Regional 93',type:'Booked travel',duration:'Providence → New Haven',text:'Board your reserved coach train. Keep the Amtrak eTicket available in the app and carry ID. Confirm the track from station displays; track numbers are not fixed in this plan.',cost:'Booked · $93 total for both train segments',shot:'Window scenery and a train exterior after you have confirmed boarding. Never film ticket QR codes.'},
 {time:'11:56am–1:36pm',title:'Stay inside New Haven Union Station',type:'Connection',duration:'1h40 protected connection',text:'Use the restroom, eat a station sandwich or packed lunch, and check the departure board. Allow $10–15 for lunch. Be ready around 1:05pm and follow boarding announcements for train 56. Do not travel downtown for pizza during this connection.',place:'New Haven Union Station',cost:'Lunch allowance $10–15'},
 {time:'1:36–2:14pm',title:'Vermonter 56 to Hartford',type:'Booked travel',duration:'38 min',text:'Remain with your bags and get ready before Hartford Union Station. If train 93 runs late, contact Amtrak before choosing a replacement service; the booked Vermonter ticket is not automatically a ticket for any train.',place:'Hartford Union Station',cost:'Booked'},
 {time:'2:20–3:30pm',title:'Cross to East Hartford and check in',type:'Transfer',duration:'40–60 min allowance',text:'With luggage, inspect live CTtransit options toward Founders Plaza / East Hartford. Route 87 is a candidate, but branches and departure points need checking on the day; a map is not a guaranteed departure. A dry-weather walk via Founders Bridge is roughly 35–45 minutes from Union Station. Hotel check-in 3pm.',place:'Hampton Inn & Suites Hartford/East Hartford, 351 Pitkin Street',origin:'Hartford Union Station',mode:'transit',cost:'CTtransit $1.75 or walking free',sources:['ct','route87','hotelCT'],cold:'Call the hotel about a local pickup; advertised business shuttle service does not guarantee tourist transfers. Use a taxi if the bus or walk is unsuitable.'},
 {time:'3:30–4:30pm',title:'Rest, then head to Bushnell Park',type:'Rest / transfer',duration:'Allow 30–45 min for the downtown connection',text:'After checking in, warm up and leave your luggage at the hotel. Check live transit to downtown before heading toward Bushnell Park; allow extra time for the river crossing. The optional Trinity campus detour is omitted to keep this arrival afternoon relaxed.',place:'Bushnell Park Hartford',origin:'351 Pitkin Street East Hartford',mode:'transit',cost:'Local bus pass or taxi reserve as needed',sources:['ct','winterfest'],cold:'Stay at the hotel longer in poor weather and go directly to dinner when conditions permit.'},
 {time:'4:30–5:15pm Eastern',title:'Winterfest · your WaterFire replacement',type:'Free seasonal visit',duration:'Flexible 45 min · skating optional',text:'Keep the booked Friday trains and Hartford hotel. Instead of returning to Providence for WaterFire, enjoy Winterfest at Bushnell Park. The official December 11 listing runs 11am–8pm with free skating and skate rentals. Watching and filming the rink is enough; skating is optional. Leave by 5:15pm for the planned 5:30pm dinner. Your private calendar has this flexible visit window.',place:'Winterfest Hartford, Bushnell Park',cost:'Free skating and rentals · optional purchases extra',sources:['winterfest'],shot:'Rink activity, a wide park view and one short festive detail. Stop before filming; do not record while skating.',cold:'Skip the outdoor visit in wind, rain, snow or ice. Rest indoors and keep dinner as the evening anchor.'},
 {time:'5:30–6:15pm',title:'Front Street BBQ · a documented student recommendation',type:'Food',duration:'Dinner + return buffer',text:'Bear’s is on the Hartford side of the river. Choose the $12 classic pulled-pork sandwich, a $4 side and water: about $17.18 with CT meal tax. Trinity’s student-written guide recommends Bear’s, and UConn’s Hartford bucket list includes it. If you stayed inside at the hotel, this is a separate trip: check the route before leaving. If attending College Night, continue downtown to the arena after dinner; otherwise return by an operating bus, clear bridge path, or taxi. Do not assume the hotel shuttle runs late.',place:'Bear’s Smokehouse, 25 Front Street Hartford',cost:'Verified posted menu: $16 subtotal + estimated $1.18 tax = $17.18; optional tip extra',meal:'bears',sources:['bearsMenu','ctStudentFood']},
 {time:'6:00–9:30pm · optional',title:'Wolf Pack College Night · the strongest sports-crowd match',type:'Optional ticketed sports',duration:'Doors 6pm · hockey 7pm · allow return travel',text:'The official December 11 listing is Hartford Wolf Pack vs Rochester Americans at PeoplesBank Arena, marketed as College Night. A separate public AXS offer is advertised at $20 all-in, subject to remaining seats. The .edu-verified student offer is different and is not assumed to apply to you. Friday’s promotion lists $3 hot dogs until the end of first intermission; two are $6 at the advertised price, with any taxes checked at the stand. This is an AHL professional men’s hockey game with a college-oriented promotion, not a college team game. After Bear’s, allow roughly 15–25 minutes to reach the arena; skip a second dinner if eating at the game. Check the live late return route to East Hartford before buying a ticket; any taxi uses your reserve. No ticket has been purchased.',place:'PeoplesBank Arena, 1 Civic Center Plaza Hartford',cost:'Advertised $20 all-in ticket offer; add $20 to the base spending fund if choosing this outing',sources:['wolfGame','wolfOffer','wolfDeals'],cold:'The arena is indoors. Confirm transport back to the hotel in advance; do not depend on a late hotel shuttle.'}
 ]},

 {id:'dec-12',date:'Sat, Dec 12',city:'Hartford',title:'Art, makers & winter lights.',sub:'The best free-admission day of the trip.',walk:'2.5–4 mi',budget:[48.5, 68.5],label:'Free museum + holiday market',route:'Wadsworth · Union Station · Bushnell Park · Pratt Street',food:['bloom','salute'],note:'Second Saturdays is open to visitors of all ages. You can enjoy the free galleries as a solo traveler.',stops:[
 {time:'8:00–9:00am',title:'Use the included hotel breakfast',type:'Food',duration:'Confirm weekend serving hours',text:'Hampton advertises complimentary hot breakfast. Have a proper breakfast before heading out and fill your water bottle. Ask the front desk about the day’s shuttle policy and current river-path conditions.',place:'Hampton Inn & Suites Hartford/East Hartford, 351 Pitkin Street',cost:'Included breakfast',sources:['hotelCT']},
 {time:'9:10–10:00am',title:'Head downtown once, stay for the day',type:'Transfer',duration:'Allow 40–50 min',text:'Walk via Founders Bridge only if pavement is clear: budget 25–35 minutes to the Wadsworth with extra crossing time. In poor conditions, use a live CTtransit journey to downtown; route 87’s Saturday service must be checked separately. Buy a $3.50 day pass if making more than one paid trip.',place:'Wadsworth Atheneum, 600 Main Street Hartford',origin:'351 Pitkin Street East Hartford',mode:'transit',cost:'Walk free or CTtransit pass $3.50',sources:['ct','route87'],cold:'Prefer an operating bus or confirmed hotel shuttle. If neither works, use a taxi; do not cross an icy bridge to save the fare.'},
 {time:'10:00–11:45am',title:'The Wadsworth · ticket received',type:'Ticket received · planned visit',duration:'Planned visit window · general admission',statusNote:'The actual Your Tickets email received November 18 confirms one adult general admission for Festival of Trees & Traditions on December 12. The ticket specifies the date, not a timed entry.',text:'Your $0 admission and actual ticket email are confirmed. Show the Your Tickets email on your phone, or print it before travel. Plan a 10–11:45am visit, including the museum shop, then continue to the 11:50am Connecticut mug stop. Enter at 600 Main Street or 29 Atheneum Square North. The planned visit window is on your private calendar; it is not a reserved entry time.',place:'Wadsworth Atheneum, 600 Main Street Hartford',cost:'$0 · ticket received',sources:['wads'],shot:'Castle-like exterior, a gallery-wide composition, one detail where permitted. The museum is the indoor anchor of this day.'},
 {time:'11:50am–12:10pm',title:'Starbucks · Connecticut mug hunt',type:'Souvenir / indoors',duration:'5–10 min walk from Wadsworth',text:'Try the Starbucks inside Hartford Marriott Downtown, 200 Columbus Boulevard, for a Connecticut destination mug. Marriott lists a retail shop and Saturday hours 6am–3pm. Mug availability is not confirmed. If unavailable, City Place Starbucks at 185 Asylum Street is a possible second stop en route to lunch; call 860-527-1225 because secondary listings disagree on weekend hours. Ask specifically for the Connecticut 14oz mug and your preferred series. Do not assume a separate Hartford design exists.',place:'Starbucks Hartford Marriott Downtown, 200 Columbus Boulevard Hartford CT',cost:'Mug allowance $20–25 + 6.35% retail tax = $21.27–26.59; no tip on merchandise',sources:['starbucksCT','starbucksCTbackup','starbucksMugs'],shot:'Mug lettering, storefront or lobby sign, and a final side-by-side mug shot back at the hotel.'},
 {time:'12:20–1:10pm',title:'Pratt Street · an easy café lunch',type:'Food / browsing',duration:'10–15 min walk from Marriott + lunch',text:'Head to Bloom Bake Shop at 80 Pratt Street. The currently linked menus list a BLT at $12 and 12oz drip coffee at $3.50: about $16.64 with CT meal tax before an optional counter tip. A lighter $8 savory Danish with that coffee is about $12.35 with tax; case items can sell out. Browse Hartford Prints at 42½ Pratt Street if open; gift purchases use your souvenir budget. This brings café and shop time into the daylight portion of the day.',place:'Bloom Bake Shop, 80 Pratt Street Hartford',cost:'BLT + 12oz drip: $15.50 subtotal, about $16.64 with tax; optional tip extra',meal:'bloom',sources:['bloomMenu','bloomCoffee','hartfordPrints','ctStudentPratt']},
 {time:'1:20–2:10pm',title:'Winterfair in Union Station’s Great Hall',type:'Market / indoors',duration:'Across the street · 55 min',text:'The organizer lists Saturdays and Sundays 11am–4pm, November 28–December 20, 2026. December 12 fits that published run. Browsing is the plan; keep $10–25 separately for a small locally made gift. The organizer page does not state an admission price, so confirm entry before committing.',place:'Hartford Union Station, 1 Union Place Hartford',cost:'Browsing planned · confirm admission; gifts optional',sources:['winterfair'],shot:'Station exterior, hall architecture and a maker’s work with permission. Keep ticketing screens out of shot.'},
 {time:'2:20–3:00pm',title:'Winterfest and Bushnell Park',type:'Free / outdoors',duration:'5–10 min walk + short visit',text:'If you enjoyed Winterfest Friday, skip this repeat and use the time for shops or an indoor break. The official calendar lists December 12 activities at the rink, including Giant Games 12–3pm and Santa’s Workshop 12–3pm. Winterfest advertises free skating and rentals; confirm that day’s public skate session and weather status before queuing. Spectating is enough if you would rather film than skate.',place:'Winterfest Hartford, Bushnell Park',cost:'Free listed activities',sources:['winterfest'],shot:'Rink activity, bare trees and the distant Capitol. Keep people’s faces incidental; never film while skating.',cold:'Stay longer at the Wadsworth or Winterfair, both indoors. Omit the park entirely when wind, sleet or ice makes it unpleasant.'},
 {time:'3:10–4:45pm',title:'Pratt Street, a warm drink, a little browsing',type:'Free / flexible',duration:'10–15 min walk + café break',text:'Photograph the pedestrian street’s architecture and any seasonal lights actually installed. Browse shops that are open; allow $6–10 for a café drink or snack. Rest before dinner rather than adding a distant attraction.',place:'Pratt Street Hartford',cost:'Exterior photos free · snack $6–10',shot:'One storefront sign, brickwork, a low-light street scene. Holiday decoration layouts are not guaranteed.',cold:'Choose one open indoor café and stay warm until dinner. No retail opening or specific decoration display is assumed.'},
 {time:'5:30–6:30pm',title:'One nicer dinner at Salute',type:'Food',duration:'About 5–10 min from Pratt Street',text:'The rose pasta is $28 on the official June 2026 dinner menu. Pomodoro at $20 keeps it cheaper. Reserve a single seat if you want a fixed dinner time. Afterwards check the live return route to the east-bank hotel; a late bus or shuttle is not guaranteed.',place:'Salute, 100 Trumbull Street Hartford',cost:'Rose pasta about $35.10 at 18% tip',meal:'salute',sources:['salute']}
 ]},
 {id:'dec-13',date:'Sun, Dec 13',city:'Hartford',title:'A warm market, a final river frame.',sub:'Flexible food-hall day with plenty of packing time.',walk:'1.5–3 mi',budget:[43.5, 58.5],label:'Indoor-friendly Sunday',route:'Hotel · Capitol exterior · Parkville Market · downtown',food:['story-soil','parkville','bears'],note:'Sunday buses are less frequent. Route 87 has historically had no Sunday service; do not rely on it for the hotel crossing.',stops:[
 {time:'8:30–9:30am',title:'Breakfast and the departure check',type:'Hotel',duration:'1 hour',text:'Use included breakfast. Before sightseeing, confirm Monday’s first airport bus, the route to its downtown stop, and a taxi fallback. Ask whether the hotel can arrange a pre-dawn taxi if transit is disrupted. Do not assume an airport shuttle is included.',place:'Hampton Inn & Suites Hartford/East Hartford, 351 Pitkin Street',cost:'Breakfast included',sources:['hotelCT','flyer']},
 {time:'10:00–11:00am',title:'A short Capitol and park exterior loop',type:'Free / outdoors',duration:'Transfer + 15–20 min outside',text:'On a clear day, cross downtown and frame the Connecticut State Capitol from Bushnell Park. This is an exterior stop: no Sunday building tour is assumed. Omit it if the bridge or paths are icy. Save energy for the food hall.',place:'Connecticut State Capitol, 210 Capitol Avenue Hartford',origin:'351 Pitkin Street East Hartford',mode:'transit',cost:'Free exterior · transit separate',shot:'Gold dome and bare trees, one park detail. Use public paths only.',cold:'Go directly to Parkville Market once it opens at 11am. Choose a live Sunday route from the hotel; do not assume route 87 operates.'},
 {time:'10:30–11:10am',title:'Story and Soil · Trinity-recommended café',type:'Food / student recommendation',duration:'Short café stop; walk from the Capitol side',text:'Go to 387 Capitol Avenue for a coffee stop documented in Trinity’s student-written visitor guide. The café’s own site links to its Hartford pickup menu, which lists a 12–16oz Americano at $5.56 (about $5.97 with estimated CT meal tax) or a 12oz latte at $6.36 (about $6.83 with tax). These are published pickup prices; checkout fees and add-ons are separate. The venue currently lists Sunday 8am–4pm. Use this instead of another coffee or boba that day.',place:'Story and Soil Coffee 387 Capitol Avenue Hartford',cost:'Americano published pickup price $5.56; about $5.97 with estimated tax before optional tip/fees',meal:'story-soil',sources:['storyMenu','storySoil','ctStudentFood'],cold:'Choose the live bus route that avoids a long outdoor wait; if the extra transfer is impractical, omit the café and keep your food-hall lunch.'},
 {time:'11:10am–12:00pm',title:'Bus to Parkville Market',type:'Transfer',duration:'Allow 30–60 min incl. wait',text:'From downtown, look for route 31 toward Park Street / Parkville; confirm the destination and stop nearest 1400 Park Street in the live planner. CTfastrak to Parkville Station plus a walk is another possibility. Budget extra for Sunday frequency and use the same $3.50 day pass for return local rides.',place:'Parkville Market, 1400 Park Street Hartford',origin:'Connecticut State Capitol Hartford',mode:'transit',cost:'CTtransit day pass $3.50',sources:['ct','parkville'],cold:'If the next bus creates a long cold wait, stay indoors until it approaches. You can substitute Winterfair downtown, listed 11am–4pm, to avoid this farther outing.',sourcesExtra:['winterfair']},
 {time:'12:00–1:30pm',title:'Lunch and a food-hall wander',type:'Food / indoors',duration:'90 min',text:'Pick one meal rather than grazing at several counters. Try a mofongo bowl or a steaming noodle soup at Thai Street Food & Pho. Vendor hours and prices vary; use the displayed menu. Photograph the hall, a vendor sign and your finished dish.',place:'Parkville Market, 1400 Park Street Hartford',cost:'Verified posted menu: $16 subtotal + estimated $1.18 tax = $17.18; optional tip extra',meal:'parkville',sources:['parkville'],shot:'Wide hall view, sign, cooking detail only with permission, then a seated food close-up.'},
 {time:'1:30–3:00pm',title:'Return downtown, or use the market backup',type:'Flexible',duration:'Transit + relaxed buffer',text:'Take the live bus back toward downtown. If you skipped Winterfair Saturday, visit Union Station before 4pm. Otherwise use an open café and choose a small souvenir. There is no need to repeat a stop or add a paid museum.',place:'Hartford Union Station, 1 Union Place Hartford',origin:'Parkville Market Hartford',mode:'transit',cost:'Within local day pass · optional purchases',sources:['winterfair','ct']},
 {time:'3:00–4:00pm',title:'Last river photo, only in good conditions',type:'Free / outdoors',duration:'15–20 min photo window',text:'Make a short Founders Bridge / riverfront stop while daylight remains. Lower waterfront paths may be closed or icy. If you already have the shot, spend this hour indoors instead. Avoid staying out purely to wait for sunset.',place:'Mortensen Riverfront Plaza Hartford',cost:'Free',shot:'One final skyline hold, a bridge detail, and an ending shot of the river.',cold:'Skip the river. Stay in an indoor downtown café until dinner or return to the hotel early.'},
 {time:'4:15–5:15pm',title:'An early, easy dinner',type:'Food',duration:'Before returning east',text:'Bear’s Front Street is convenient before the hotel crossing. Order the sandwich and a side, or choose another modest plate from the posted menu. If you prefer, buy dinner to take back, then check live transit home before the evening service thins.',place:'Bear’s Smokehouse, 25 Front Street Hartford',cost:'Verified posted menu: $16 subtotal + estimated $1.18 tax = $17.18; optional tip extra',meal:'bears',sources:['bearsMenu','ctStudentFood']},
 {time:'6:00–8:00pm',title:'Pack, charge, sleep early',type:'Rest',duration:'Protect the early departure',text:'Pack all bags, charge your iPhone and power bank, lay out gloves and coat, and set two alarms. Keep Monday breakfast portable; regular hotel breakfast may begin after you need to leave. Save both airline boarding passes and transit details.',place:'Hampton Inn & Suites Hartford/East Hartford, 351 Pitkin Street',cost:'Portable snack allowance $5–8'}
 ]},
 {id:'dec-14',date:'Mon, Dec 14',city:'Hartford → home',title:'An early start, then home.',sub:'Protect the flight; sightseeing is finished.',walk:'Minimal',budget:[31.75, 41.75],label:'8am flight from BDL',route:'East Hartford hotel · downtown bus stop · BDL · Houston · CRP',food:[],note:'BDL is Bradley International Airport, not Hartford Union Station. Aim to be at the terminal by 6am Eastern.',stops:[
 {time:'4:00–4:30am ET',title:'Check out and get to the airport connection',type:'Transfer',duration:'Early start required',text:'Provisional bus target: the linked weekday timetable lists route 30X at 5:00am from Union Station Transit Center, Union Place, reaching BDL Terminal A at 5:33am. Recheck December 14 operation. Arrange a taxi from the hotel around 4:15–4:25am to be at the bus stop by 4:45am; do not assume a pre-dawn local bus from the hotel. A direct taxi to BDL is the simpler fallback.',place:'Bradley International Airport',origin:'351 Pitkin Street East Hartford',mode:'transit',cost:'Airport bus $1.75 · taxi contingency separate',sources:['flyer','ct'],cold:'In ice, snow or poor visibility, use a pre-arranged direct taxi with an arrival target of 5:45–6am. Leave earlier when the forecast requires it; taxi availability and price need confirming.'},
 {time:'By 6:00am ET',title:'Bradley terminal, security and breakfast',type:'Airport',duration:'2-hour planning buffer',text:'Use route 30 Bradley Flyer only if a currently verified early trip gets you here by 6am, including the transfer and walking time. Have your ID and boarding pass ready. An 8am flight is not compatible with leaving the hotel at its standard 11am checkout. Buy a light breakfast after security; allow $8–12.',place:'Bradley International Airport Terminal A',cost:'Food allowance $8–12'},
 {time:'8:00am ET–11:07am CT',title:'UA413 · Bradley → Houston',type:'Booked travel',duration:'4h07 elapsed',text:'The itinerary’s 8am departure is Eastern and 11:07am arrival is Central. Find your next gate immediately at IAH: the connection is only 58 minutes. Aircraft and operating-carrier details can change; use the United app for current assignments.',cost:'Booked · flight fare not supplied'},
 {time:'12:05–1:16pm CT',title:'UA4049 · Houston → Corpus Christi',type:'Booked travel',duration:'1h11',text:'Board at IAH for the 12:05pm departure; arrive CRP 1:16pm Central. Allow $12–20 for lunch or a snack after reaching the gate or arriving home. Airline times remain the supplied reservation times until checked in United.',place:'Corpus Christi International Airport',cost:'Lunch allowance $12–20',shot:'A window view and one quiet closing frame. Keep your boarding pass and personal screens private.'}
 ]}
];
const FLIGHTS = [
 ['Dec 9','UA4187','CRP','5:20am CT','IAH','6:29am CT','1h09','GoJet · CRJ550','51m at IAH'],
 ['Dec 9','UA547','IAH','7:20am CT','ORD','10:10am CT','2h50','United · 737 MAX 9','1h49 at ORD'],
 ['Dec 9','UA4664','ORD','11:59am CT','PVD','3:34pm ET','2h35','SkyWest · E175','Arrival'],
 ['Dec 14','UA413','BDL','8:00am ET','IAH','11:07am CT','4h07','United · 737-700','58m at IAH'],
 ['Dec 14','UA4049','IAH','12:05pm CT','CRP','1:16pm CT','1h11','Mesa · E175','Home']
];

const SOUVENIRS = [
 {item:'Rhode Island Starbucks destination mug',where:'Starbucks · 1 Providence Place',state:'RI',low:20,high:25,status:'Retail planning allowance; price and stock unverified'},
 {item:'Connecticut Starbucks destination mug',where:'Starbucks · Hartford Marriott, 200 Columbus Blvd',state:'CT',low:20,high:25,status:'Retail planning allowance; price and stock unverified'},
 {item:'Vintage Rhode Island postcard',where:'RISD Store · 30 North Main Street; check shelf stock',state:'RI',low:1.50,high:1.50,status:'Official online catalog price; in-store stock unverified'},
 {item:'Greetings from Hartford / Connecticut magnet',where:'Wadsworth Museum Shop · during Saturday visit',state:'CT',low:6.95,high:6.95,status:'Official online catalog price; in-store stock unverified'},
 {item:'Small maker ornament or print',where:'Winterfair · Union Station',state:'CT',low:10,high:20,status:'Planning allowance, not a vendor quote'}
];

// Inclusive planning allowances for one traveler, not quoted menu prices.
const BUDGET_DAYS = [
  {
    "id": "dec-09",
    "date": "Wed, Dec 9",
    "meals": [
      [
        0,
        0
      ],
      [
        16,
        22
      ],
      [
        23,
        28
      ],
      [
        6,
        10
      ]
    ],
    "bus": [
      2,
      2
    ],
    "busNote": "PVD → Kennedy Plaza on RIPTA 66",
    "note": "Breakfast at home; ORD lunch, arrival dinner and a coffee/snack."
  },
  {
    "id": "dec-10",
    "date": "Thu, Dec 10",
    "meals": [
      [
        14,
        20
      ],
      [
        16,
        20
      ],
      [
        20,
        25
      ],
      [
        5,
        10
      ]
    ],
    "bus": [
      2,
      6
    ],
    "busNote": "Allow one paid RIPTA ride; up to the $6 Wave daily cap",
    "note": "Ellie’s signature sandwich, East Side Pockets falafel-wrap lunch, Trinity dinner and Ceremony coffee. The $16–20 envelope leaves room above the verified $11 sample online wrap total."
  },
  {
    "id": "dec-11",
    "date": "Fri, Dec 11",
    "meals": [
      [
        8,
        12
      ],
      [
        12,
        16
      ],
      [
        16,
        20
      ],
      [
        4,
        7
      ]
    ],
    "bus": [
      1.75,
      3.5
    ],
    "busNote": "Hartford local transfer; day pass if needed",
    "note": "Modest breakfast, station lunch, casual dinner. Hotel credit is not deducted."
  },
  {
    "id": "dec-12",
    "date": "Sat, Dec 12",
    "meals": [
      [
        0,
        0
      ],
      [
        14,
        18
      ],
      [
        25,
        37
      ],
      [
        6,
        10
      ]
    ],
    "bus": [
      3.5,
      3.5
    ],
    "busNote": "CTtransit local all-day pass",
    "note": "Included hotel breakfast, Bloom/casual lunch, Salute and one treat."
  },
  {
    "id": "dec-13",
    "date": "Sun, Dec 13",
    "meals": [
      [
        0,
        0
      ],
      [
        16,
        21
      ],
      [
        18,
        24
      ],
      [
        6,
        10
      ]
    ],
    "bus": [
      3.5,
      3.5
    ],
    "busNote": "One local day pass for hotel/market links that operate",
    "note": "Included breakfast, Parkville lunch, Bear’s dinner and a café treat."
  },
  {
    "id": "dec-14",
    "date": "Mon, Dec 14",
    "meals": [
      [
        6,
        8
      ],
      [
        18,
        24
      ],
      [
        0,
        0
      ],
      [
        6,
        8
      ]
    ],
    "bus": [
      1.75,
      1.75
    ],
    "busNote": "Route 30 to BDL; taxi to its stop is separate",
    "note": "Portable breakfast, airport lunch/snacks; dinner at home, outside trip budget."
  }
];
