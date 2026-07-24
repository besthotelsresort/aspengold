/* ============================================================
   TrueNorth Guide — site data
   Editing this file updates cards, review headers, maps,
   reviews grids and author pages across the whole site.
   ============================================================ */

const SITE = {
  brand: "TrueNorth Guide",
  brandMark: "TrueNorth",
  brandSuffix: "Guide",
  glyph: "✦",
  tagline: "Canada's practical guide to a great night's sleep, since 2015",
  established: 2015,
  email: "info@nobleislandregency.website",
  domain: "aspengold.onrender.com",
  phone: "+1 (403) 555-0198",
  city: "Calgary, Alberta",
  intro: "Straight-talking, first-hand reviews of the best places to stay across Canada — from waterfront five-stars and grand city landmarks to Indigenous-owned resort casinos."
};

const AUTHORS = {
  "callum-fraser": {
    name: "Callum Fraser",
    slug: "callum-fraser",
    role: "Chief Reviewer",
    since: 2015,
    location: "Vancouver, BC",
    bio: "A Cape Breton-born, Vancouver-based journalist, Callum has written for TrueNorth since our very first dispatch in 2015. He spent a decade running a newspaper travel desk before deciding the only honest way to judge a hotel is to sleep in it — so now he does, logging well over 200 nights a year from harbourfront towers to century-old railway landmarks. He is quietly obsessed with the small things that separate a good hotel from a great one: the weight of a door, the temperature of a lobby, whether the front desk still smiles at midnight. He travels with a battered notebook, a light meter, and an incurable weakness for a properly poured afternoon tea.",
    focus: "Waterfront & landmark hotels, service, heritage properties"
  },
  "aisha-nkemelu": {
    name: "Aisha Nkemelu",
    slug: "aisha-nkemelu",
    role: "Urban Hotels Correspondent",
    since: 2018,
    location: "Toronto, ON",
    bio: "Aisha covers the city stay — the design-forward downtown rooms, the heritage grande dames, and the restaurants worth booking a hotel around. Trained as an architect before she turned to journalism, she reads a building the way other people read a menu, and holds strong, well-argued opinions about lobby lighting, lift lobbies and the exact right firmness of a pillow. Based in Toronto since 2018, she works the country's urban cores testing whether a hotel actually delivers for the guest who arrives frazzled at 11 p.m. with a lunch meeting the next day. Warm on the page, exacting in the room.",
    focus: "City hotels, design & architecture, dining"
  },
  "etienne-lachance": {
    name: "Étienne Lachance",
    slug: "etienne-lachance",
    role: "Resort & Gaming Writer",
    since: 2016,
    location: "Montréal, QC",
    bio: "Étienne is TrueNorth's writer on the resort floor — the one we send when a property arrives with a gaming floor, a concert hall and a thousand rooms to keep quiet. A former live-sound engineer who toured with Québécois bands before moving into travel writing in 2016, he judges an entertainment venue by its acoustics and a resort by whether you can still sleep soundly two floors above a jackpot bell. He has a genuine soft spot for Indigenous-owned resorts and the way they weave culture into hospitality, and a reviewer's nose for the difference between a room that is clean and a room that has merely been tidied.",
    focus: "Resort casinos, live entertainment, resort dining"
  }
};

const HOTELS = {
  "grey-eagle": {
    name: "Grey Eagle Resort & Casino",
    slug: "grey-eagle",
    city: "Calgary", province: "Alberta",
    stars: 4, guestRating: 4.5, reviewCount: 3400,
    address: "3777 Grey Eagle Drive SW, Calgary, AB T3E 3X8, Canada",
    phone: "+1 403-719-8777",
    lat: 51.0034, lng: -114.1427,
    casino: true,
    img: "assets/img/grey-eagle.jpg",
    author: "etienne-lachance",
    tags: ["Casino Resort", "Tsuut'ina Nation", "Event Centre"],
    short: "A polished, Tsuut'ina-owned resort casino on Calgary's southwest edge, pairing a buzzing gaming floor and a big-name event centre with freshly renovated, genuinely welcoming rooms.",
    amenities: ["Casino: 900+ slots, 40+ tables, poker", "~2,500-seat Event Centre", "5 dining venues incl. Little Chief", "Indoor pool & outdoor hot tub", "24-hour fitness centre", "Free secure parking", "Meeting & wedding facilities", "Shuttle service"],
    reviews: [
      { name: "Pennie", rating: 5, date: "Jul 2026", text: "Beautiful hotel with kind, helpful staff and an excellent location." },
      { name: "John", rating: 5, date: "Jul 2026", text: "The front desk lady was so welcoming and got us checked in quickly." },
      { name: "Kevin", rating: 4, date: "Jun 2026", text: "Newly renovated, clean and well maintained, with very friendly and accommodating staff." },
      { name: "Ashley", rating: 5, date: "Apr 2026", text: "The staff put our stay over the top — warm, welcoming, efficient and professional." },
      { name: "Cromarty", rating: 5, date: "May 2026", text: "Rooms were very clean with no odours, and plenty of friendly staff around." },
      { name: "A. G.", rating: 5, date: "Jul 2026", text: "Excellent facility, conveniently located with good amenities — the casino buffet is very good." },
      { name: "Keegan", rating: 3, date: "Jun 2026", text: "The room's ventilation system was ridiculously loud, which made for an awful night's sleep." },
      { name: "Catherine", rating: 2, date: "Mar 2026", text: "They need to improve guest communication — a scheduled water shut-off was only noted on a slip of paper." },
      { name: "Kim", rating: 2, date: "May 2026", text: "Toilet was plugged, the bathroom sink was broken and the fridge didn't work — disappointed we weren't compensated." },
      { name: "Kailey", rating: 1, date: "May 2026", text: "First room had stains on the curtains, marked towels and hair in the bathroom." }
    ]
  },
  "river-cree": {
    name: "River Cree Resort & Casino",
    slug: "river-cree",
    city: "Enoch (Edmonton)", province: "Alberta",
    stars: 4, guestRating: 3.9, reviewCount: 686,
    address: "300 East Lapotac Blvd, Enoch, AB T7X 3Y3, Canada",
    phone: "+1 780-484-2121",
    lat: 53.5104, lng: -113.6960,
    casino: true,
    img: "assets/img/river-cree.jpg",
    author: "etienne-lachance",
    tags: ["Casino Resort", "Marriott-managed", "Twin Ice Rinks"],
    short: "A Marriott-managed resort casino just outside Edmonton on Enoch Cree Nation land, where twin NHL-sized rinks and a lively concert venue sit beside modern, comfortable rooms.",
    amenities: ["24-hour casino (~1,000 slots, 30 tables)", "The Venue concert & comedy theatre", "Sage fine dining & buffet bistro", "Indoor pool, whirlpool & fitness", "Spa", "Twin NHL-sized ice rinks", "Airport shuttle & free parking", "Ballroom & event spaces"],
    reviews: [
      { name: "Kelly", rating: 5, date: "Jan 2026", text: "Excellent accessible room with the best roll-in shower I've seen, great toiletries, and very responsive management." },
      { name: "Robert", rating: 4, date: "Nov 2025", text: "Friendly front desk and helpful security; the room was clean and well-appointed with a comfortable bed and soft towels." },
      { name: "Jared", rating: 4, date: "May 2026", text: "Decent venue for an event. Tap 25 food was average, but the subs from Cree Subs were great." },
      { name: "Wayne", rating: 2, date: "Apr 2026", text: "A couple of small items went missing from our locked room, though staff sent replacement treats as an apology." },
      { name: "Sheena", rating: 2, date: "Feb 2026", text: "Charged an early check-in fee even though staff said fees were waived; conference food was mediocre." },
      { name: "DayTrip", rating: 2, date: "Apr 2026", text: "Food quality at Tap 25 has declined, and the slots feel tight." },
      { name: "Gerry", rating: 3, date: "Aug 2025", text: "The corporate buffet served food that was only warm; some dishes were overcooked." },
      { name: "Brian", rating: 2, date: "Jul 2025", text: "The pool was overcrowded and chaotic on our visit, and staff were slow to respond to concerns." },
      { name: "Tina", rating: 3, date: "Jul 2026", text: "Convenient location just outside Edmonton with a big gaming floor, but overnight parking rules weren't communicated clearly." },
      { name: "Joy", rating: 4, date: "Mar 2026", text: "Rooms are modern and comfortable and the beds are great — a solid choice for a night near the city." }
    ]
  },
  "hotel-vancouver": {
    name: "Fairmont Hotel Vancouver",
    slug: "hotel-vancouver",
    city: "Vancouver", province: "British Columbia",
    stars: 4, guestRating: 4.4, reviewCount: 5200,
    address: "900 West Georgia Street, Vancouver, BC V6C 2W6, Canada",
    phone: "+1 604-684-3131",
    lat: 49.283839, lng: -123.120959,
    casino: false,
    img: "assets/img/hotel-vancouver.jpg",
    author: "aisha-nkemelu",
    tags: ["Château Landmark", "Downtown", "Canine Ambassador"],
    short: "A copper-roofed château landmark in the heart of downtown Vancouver — heritage grandeur, a resident canine ambassador and a location that walks you to everything.",
    amenities: ["Indoor lap pool with city windows", "Fitness centre", "Spa Soleá wellness centre", "Notch8 Restaurant & Bar & afternoon tea", "Resident Labrador canine ambassador", "Fairmont Gold executive floor", "Valet parking", "Near Robson St & the Art Gallery"],
    reviews: [
      { name: "Sarah", rating: 5, date: "Jun 2025", text: "A gorgeous historic hotel with an unbeatable location; you can walk to everything downtown and the lobby feels genuinely grand." },
      { name: "Jennifer", rating: 5, date: "Mar 2025", text: "Loved meeting the resident hotel dog, and the pool and afternoon tea were highlights of our stay." },
      { name: "Emily", rating: 5, date: "Jan 2025", text: "Housekeeping and the front desk were warm and professional, and check-in was fast. Felt very well cared for." },
      { name: "Lauren", rating: 5, date: "Oct 2024", text: "Classic Fairmont elegance in a perfect central spot; a short walk to Stanley Park and all the shopping." },
      { name: "Michael", rating: 4, date: "Apr 2025", text: "Service was excellent and staff fixed a small issue quickly, but the rooms are noticeably smaller than newer hotels." },
      { name: "James", rating: 4, date: "Sep 2024", text: "Notch8 dinner and cocktails were fantastic and the historic charm is real, though valet parking adds up." },
      { name: "Amanda", rating: 4, date: "Aug 2024", text: "Comfortable, quiet room with lovely fixtures; a lovely heritage property — just don't expect a huge room." },
      { name: "David", rating: 3, date: "Feb 2025", text: "Beautiful old building, but the walls are thin and we could hear noise from neighbouring rooms." },
      { name: "Robert", rating: 3, date: "Nov 2024", text: "Some rooms feel a bit dated compared to the luxury billing, though the location is excellent." },
      { name: "Christopher", rating: 2, date: "Jul 2024", text: "Great location but our stay was let down by a maintenance issue and slow follow-up." }
    ]
  },
  "ritz-montreal": {
    name: "The Ritz-Carlton, Montreal",
    slug: "ritz-montreal",
    city: "Montréal", province: "Québec",
    stars: 5, guestRating: 4.8, reviewCount: 1530,
    address: "1228 Sherbrooke Street West, Montreal, QC H3G 1H6, Canada",
    phone: "+1 514-842-4212",
    lat: 45.4986, lng: -73.5789,
    casino: false,
    img: "assets/img/ritz-montreal.jpg",
    author: "aisha-nkemelu",
    tags: ["Grande Dame", "Golden Square Mile", "Maison Boulud"],
    short: "Montréal's restored grande dame in the Golden Square Mile, blending Beaux-Arts heritage with a rooftop saltwater pool, Maison Boulud and some of the most attentive service in the country.",
    amenities: ["Maison Boulud restaurant & Palm Court tea", "Rooftop saltwater infinity pool", "On-site spa & fitness centre", "Beaux-Arts heritage architecture", "24-hour concierge & butler service", "Some suites with fireplaces", "Valet parking", "Pet-friendly options"],
    reviews: [
      { name: "Matthew", rating: 5, date: "Jul 2026", text: "Loved the early check-in, the standout bellman service, and the spacious modern rooms off a beautiful lobby." },
      { name: "Demetrio", rating: 5, date: "Jun 2026", text: "Celebrated a birthday over afternoon tea in the Palm Court where the staff showed genuine warmth." },
      { name: "Mary", rating: 5, date: "Jun 2026", text: "Booked on points for an anniversary and still received complimentary champagne and macarons — treated wonderfully." },
      { name: "Karen", rating: 5, date: "May 2026", text: "One of my favourite hotels in the world; upgraded to a corner suite with a fireplace and staff who take real pride." },
      { name: "Daniel", rating: 5, date: "Aug 2025", text: "Impeccable service from check-in to checkout, exceptional dining at Maison Boulud, and a room blending old-world charm with luxury." },
      { name: "James", rating: 4, date: "Apr 2026", text: "Historic elegance and a superb central location, though standard rooms are fairly compact." },
      { name: "Emily", rating: 4, date: "Jul 2025", text: "Beautiful heritage hotel with attentive staff; only gripe was some inconsistency between the restaurant and in-room dining." },
      { name: "Sophie", rating: 4, date: "Feb 2026", text: "Gorgeous property and lovely rooftop pool, but a few dated maintenance details in the bathroom." },
      { name: "Laura", rating: 2, date: "Sep 2025", text: "Housekeeping mix-ups meant a requested sheet change never arrived, which soured a special anniversary stay." },
      { name: "Lori", rating: 2, date: "Mar 2026", text: "Felt over-watched by security while dressed casually; not the welcome I expected." }
    ]
  },
  "chateau-laurier": {
    name: "Fairmont Château Laurier",
    slug: "chateau-laurier",
    city: "Ottawa", province: "Ontario",
    stars: 4, guestRating: 4.2, reviewCount: 4830,
    address: "1 Rideau Street, Ottawa, ON K1N 8S7, Canada",
    phone: "+1 613-241-1414",
    lat: 45.4255667, lng: -75.6951083,
    casino: false,
    img: "assets/img/chateau-laurier.jpg",
    author: "callum-fraser",
    tags: ["National Historic Site", "By Parliament Hill", "Rideau Canal"],
    short: "A limestone château beside the Rideau Canal and Parliament Hill, offering Ottawa's best address, an Art Deco pool and the easy grandeur of a national historic site.",
    amenities: ["Art Deco indoor pool & fitness centre", "Zoe's Lounge & Wilfrid's Restaurant", "Full-service spa", "24-hour concierge & room service", "Steps from Parliament & ByWard Market", "Valet parking", "Free WiFi", "Ballroom & event space"],
    reviews: [
      { name: "True W.", rating: 5, date: "Jul 2026", text: "Best location in town, spacious and clean rooms, a wonderful atmosphere, and a fast check-in." },
      { name: "Sandra D.", rating: 5, date: "Jul 2026", text: "Warm, welcoming reception; concierge Samuel was delightfully helpful and made us feel right at home." },
      { name: "Peter R.", rating: 5, date: "Jun 2026", text: "A fantastic base for exploring the city core, with excellent facilities and attentive, friendly staff." },
      { name: "AJ25SS", rating: 5, date: "May 2026", text: "Perfect spot for the canal, ByWard Market, Parliament and shopping; great service from staff." },
      { name: "beckybB412QK", rating: 3, date: "May 2026", text: "The online photos were a little misleading — our actual room was small and dark with thin walls." },
      { name: "Ben H.", rating: 2, date: "Jul 2026", text: "Felt front-desk staff were dismissive, and the room felt old with a musty smell." },
      { name: "Kristen R.", rating: 2, date: "May 2026", text: "Property felt run-down in places with an overcrowded lobby; the linens didn't feel fresh." },
      { name: "GJH", rating: 2, date: "Jul 2026", text: "Our suite had peeling paint and heavy dust — not what I'd expect at this level." },
      { name: "Rob P.", rating: 1, date: "Jun 2026", text: "Poor valet service and confusing check-in; overall the hospitality felt lacking on our visit." },
      { name: "Marguerite", rating: 5, date: "Jun 2026", text: "The historic grandeur by the Rideau Canal is unbeatable, and the pool is a beautiful Art Deco surprise." }
    ]
  },
  "pacific-rim": {
    name: "Fairmont Pacific Rim",
    slug: "pacific-rim",
    city: "Vancouver", province: "British Columbia",
    stars: 5, guestRating: 4.6, reviewCount: 4525,
    address: "1038 Canada Place, Vancouver, BC V6C 0B9, Canada",
    phone: "+1 604-695-5300",
    lat: 49.28806, lng: -123.11639,
    casino: false,
    img: "assets/img/pacific-rim.jpg",
    author: "callum-fraser",
    tags: ["Waterfront Luxury", "Rooftop Pool", "Contemporary Art"],
    short: "A sleek waterfront five-star on Vancouver's harbour, with a rooftop pool, a serious contemporary-art collection and the Seawall quite literally at the door.",
    amenities: ["Rooftop heated pool & cabanas", "Willow Stream Spa", "24-hour fitness centre", "Botanist restaurant & Lobby Lounge RawBar", "Fairmont Gold concierge floors", "Valet parking & house car service", "Contemporary art collection", "Steps from the Seawall & Canada Place"],
    reviews: [
      { name: "Jennifer", rating: 5, date: "May 2026", text: "Truly a five-star experience. The staff went above and beyond and the harbour-view room was stunning." },
      { name: "David", rating: 5, date: "Aug 2025", text: "The service is second to none. Room service was prompt, and the rooftop pool and bar were lovely." },
      { name: "Sophia", rating: 5, date: "Sep 2025", text: "Loved the location right on the water. The contemporary art and the vibe in the lobby lounge made it special." },
      { name: "Emily", rating: 5, date: "Jun 2026", text: "The Willow Stream Spa and the rooftop pool were highlights. Rooms are handsomely designed and well equipped." },
      { name: "Grace", rating: 5, date: "Oct 2025", text: "Impeccable from check-in to check-out. Botanist was excellent and the staff remembered our names." },
      { name: "Olivia", rating: 5, date: "Jul 2026", text: "The best business hotel I've used — spotless rooms, great gym, and a fantastic waterfront location." },
      { name: "Daniel", rating: 4, date: "Dec 2025", text: "Gorgeous hotel and genuinely warm staff. Only downside was how pricey the on-site extras are." },
      { name: "Michael", rating: 4, date: "Jul 2025", text: "Beautiful hotel with impressive rooms and views, but the room-service pricing is eye-watering." },
      { name: "Robert", rating: 3, date: "Feb 2026", text: "Nice property, but for the price the service felt a touch mediocre, and lobby noise carried up late." },
      { name: "James", rating: 2, date: "Mar 2026", text: "Our final bill was higher than expected, and a few small things weren't up to five-star standard." }
    ]
  }
};

/* Order hotels appear on the homepage */
const HOTEL_ORDER = ["pacific-rim", "ritz-montreal", "chateau-laurier", "hotel-vancouver", "grey-eagle", "river-cree"];
