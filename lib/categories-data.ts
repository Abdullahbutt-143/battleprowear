export interface CategorySummary {
  id: number
  slug: string
  name: string
  features: string[]
  color: string
  icon: string
}

export const categoryList: CategorySummary[] = [
  { id: 1, slug: 'martial-arts-uniforms', name: 'Martial Arts Uniforms', features: ['Premium Cotton Blends', 'Reinforced Stitching', 'Authentic Designs'], color: 'from-blue-500/20 to-transparent', icon: '🥋' },
  { id: 2, slug: 'basketball-uniforms', name: 'Basketball Uniforms', features: ['Moisture Wicking', 'Breathable Mesh', 'Ergonomic Fit'], color: 'from-orange-500/20 to-transparent', icon: '🏀' },
  { id: 3, slug: 'boxing-gloves', name: 'Boxing Gloves', features: ['Hand Protection', 'Superior Grip', 'Durability'], color: 'from-red-500/20 to-transparent', icon: '🥊' },
  { id: 4, slug: 'mechanics-gloves', name: 'Mechanics Gloves', features: ['Heavy Duty', 'Precision Grip', 'Oil Resistant'], color: 'from-yellow-500/20 to-transparent', icon: '🧤' },
  { id: 5, slug: 'tactical-holsters', name: 'Tactical Holsters', features: ['Quick Access', 'Secure Fit', 'Military Grade'], color: 'from-green-500/20 to-transparent', icon: '🎖️' },
  { id: 6, slug: 'tactical-patches', name: 'Tactical Patches', features: ['Custom Designs', 'Durable Embroidery', 'Velcro Back'], color: 'from-purple-500/20 to-transparent', icon: '⚔️' },
  { id: 7, slug: 'tactical-pouches', name: 'Tactical Pouches', features: ['Multiple Compartments', 'MOLLE Compatible', 'Weatherproof'], color: 'from-indigo-500/20 to-transparent', icon: '🎒' },
  { id: 8, slug: 'magazine-pouches', name: 'Magazine Pouches', features: ['Fast Draw', 'Secure Hold', 'Lightweight'], color: 'from-cyan-500/20 to-transparent', icon: '📦' },
  { id: 9, slug: 'fitness-leggings', name: 'Fitness Leggings', features: ['Compression Fit', 'High Waist Design', 'Squat Proof'], color: 'from-pink-500/20 to-transparent', icon: '💪' },
  { id: 10, slug: 'tracksuits', name: 'Tracksuits', features: ['Athletic Cut', 'Premium Fabric', 'All Weather'], color: 'from-teal-500/20 to-transparent', icon: '🏃' },
  { id: 11, slug: 'casual-apparel', name: 'Casual Apparel', features: ['Modern Designs', 'Comfortable', 'Versatile'], color: 'from-emerald-500/20 to-transparent', icon: '👕' },
  { id: 12, slug: 'polo-shirts', name: 'Polo Shirts', features: ['Breathable Cotton', 'Professional Look', 'Durable'], color: 'from-rose-500/20 to-transparent', icon: '👔' },
  { id: 13, slug: 'headwear', name: 'Headwear', features: ['Embroidered Logo', 'Adjustable Strap', 'Curved Brim'], color: 'from-amber-500/20 to-transparent', icon: '🧢' },
  { id: 14, slug: 'pvc-patches', name: 'PVC Patches', features: ['Custom Molded Designs', 'Velcro Backing', 'Weatherproof'], color: 'from-slate-500/20 to-transparent', icon: '🛡️' },
]

export interface CategoryProduct {
  id: number
  image: string
  name: string
  description: string
}

export interface CategoryReview {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

export interface CategoryDetail {
  slug: string
  name: string
  icon: string
  tagline: string
  description: string
  rating: number
  products: CategoryProduct[]
  reviews: CategoryReview[]
}

export const categoryDetails: Record<string, CategoryDetail> = {
  'pvc-patches': {
    slug: 'pvc-patches',
    name: 'PVC Patches',
    icon: '🛡️',
    tagline: 'Custom Molded Designs • Velcro Backing • Weatherproof',
    description:
      'Fully custom 2D and 3D molded PVC patches built for tactical gear, uniforms, and team kits. Every patch is rubber-injected for crisp detail, finished with a hook-and-loop backing, and rated to survive sun, rain, and daily wear without fading or cracking.',
    rating: 4.8,
    products: [
      { id: 1, image: '/products/pvc-patches/pvc-patch-1.jpeg', name: 'Custom PVC Patch', description: 'Our signature round Battle Pro emblem — a clean starburst border with a bold molded logo, made as a template for fully custom club and unit patches.' },
      { id: 2, image: '/products/pvc-patches/pvc-patch-2.jpeg', name: 'Adventure Awaits Patch', description: 'Hexagon outdoor patch with a raised mountain range and pine tree line, finished in olive and grey for packs, jackets, and gear straps.' },
      { id: 3, image: '/products/pvc-patches/pvc-patch-3.jpeg', name: 'Zombie Outbreak Response Team Patch', description: 'Novelty biohazard emblem in black and red with bold ringed text — a favorite for airsoft loadouts and morale boards.' },
      { id: 4, image: '/products/pvc-patches/pvc-patch-4.jpeg', name: 'Security Eagle Shield Patch', description: 'Shield-shaped security badge patch with a molded eagle head in gold and black, designed for guard and staff uniforms.' },
      { id: 5, image: '/products/pvc-patches/pvc-patch-5.jpeg', name: 'Subdued US Flag Patch', description: 'Rectangular stars-and-stripes patch in a low-visibility olive and black colorway, a tactical gear staple.' },
      { id: 6, image: '/products/pvc-patches/pvc-patch-6.jpeg', name: 'Skull Morale Patch', description: 'Compact square patch with a stark white skull on black — minimal, high-contrast, and built to stack with other morale patches.' },
      { id: 7, image: '/products/pvc-patches/pvc-patch-7.jpeg', name: 'No Pain No Gain Patch', description: 'Gym-motivation patch with a molded barbell and bold red-and-white lettering, popular for training bags and fitness apparel.' },
      { id: 8, image: '/products/pvc-patches/pvc-patch-8.jpeg', name: 'Weapons of Freedom Patch', description: 'Round patch featuring a molded rifle over a thin-line flag backdrop, framed in blue with white star accents.' },
      { id: 9, image: '/products/pvc-patches/pvc-patch-9.jpeg', name: 'Wolf Head Patch', description: 'Detailed die-cut wolf head patch with layered greys and amber eyes for sharp definition at a distance.' },
      { id: 10, image: '/products/pvc-patches/pvc-patch-10.jpeg', name: 'Swiss Air Force FA-18 Hornet Patch', description: 'Squadron-style aviation patch commemorating the Swiss Air Force FA-18 Hornet, with full mission markings and afterburner detail.' },
      { id: 11, image: '/products/pvc-patches/pvc-patch-11.jpeg', name: 'XII Paracadutisti Leopardi Patch', description: 'Italian paratrooper unit crest with parachute, flail, and leopard motifs on olive drab — a heavily detailed heritage design.' },
      { id: 12, image: '/products/pvc-patches/pvc-patch-12.jpeg', name: 'Operazione Re Mida Patch', description: 'Commemorative event patch in black and antique gold featuring a two-toned regal portrait, made for a limited operation run.' },
      { id: 13, image: '/products/pvc-patches/pvc-patch-13.jpeg', name: 'Thunder Strike III Support Patch', description: 'Airsoft operations patch for the organization and support crew, with crossed tools, a headset, and a laurel wreath in gold on black.' },
      { id: 14, image: '/products/pvc-patches/pvc-patch-14.jpeg', name: 'Thunder Strike III Larp-Dorf Patch', description: 'Companion event patch depicting a fortified village skyline in gold relief, framed by a matching laurel wreath.' },
      { id: 15, image: '/products/pvc-patches/pvc-patch-15.jpeg', name: 'Blackshadow Reaper Patch', description: 'Split red-and-grey backdrop with a hooded reaper and scythe, finished with bold raised lettering for maximum presence.' },
      { id: 16, image: '/products/pvc-patches/pvc-patch-16.jpeg', name: 'Grifoni Veneti Patch', description: 'Two-tone maroon and navy team crest featuring a fierce griffin head, built for club kits and supporter gear.' },
      { id: 17, image: '/products/pvc-patches/pvc-patch-17.jpeg', name: 'Goon Squad Gothenburg Patch', description: 'Shield patch with a cigar-smoking, goggled gorilla mascot and bannered squad name, full color on a tactical backing.' },
      { id: 18, image: '/products/pvc-patches/pvc-patch-18.jpeg', name: 'Grifoni Veneti Patch (Alt.)', description: 'A second run of the Grifoni Veneti griffin crest, same bold maroon and navy split with gold detailing.' },
      { id: 19, image: '/products/pvc-patches/pvc-patch-19.jpeg', name: 'Battle Pro Wordmark Patch', description: 'Rectangular "Gear Up For Battle" wordmark patch with a red star and stripes accent — a clean add-on for any kit.' },
    ],
    reviews: [
      { id: 1, name: 'Marco D.', rating: 5, comment: 'The 3D molding on these patches is way better than the flat PVC I ordered elsewhere. Colors are still sharp after months outdoors.', date: '2026-06-14' },
      { id: 2, name: 'Ayesha K.', rating: 5, comment: 'Ordered a custom unit patch and the detail came out incredible, right down to the small text. Velcro backing is solid too.', date: '2026-05-29' },
      { id: 3, name: 'Jonas B.', rating: 4, comment: 'Great quality patches, only wish the turnaround for custom designs was a bit faster during peak season.', date: '2026-07-02' },
      { id: 4, name: 'Sofia R.', rating: 5, comment: 'The Blackshadow reaper patch looks even better in person. Backing is rigid and the color separation is clean.', date: '2026-04-18' },
      { id: 5, name: 'Hamza T.', rating: 5, comment: 'Bought a batch for our airsoft team, everyone loved the Thunder Strike patches. Will be reordering for the next event.', date: '2026-08-01' },
      { id: 6, name: 'Elena V.', rating: 4, comment: 'Solid rubber feel, holds up well on a plate carrier. Shipping took a little longer than expected but worth the wait.', date: '2026-03-22' },
    ],
  },
  headwear: {
    slug: 'headwear',
    name: 'Headwear',
    icon: '🧢',
    tagline: 'Embroidered Logo • Adjustable Strap • Curved Brim',
    description:
      'Structured trucker caps and performance mesh hats with clean embroidered branding. Built with breathable mesh backs, adjustable snap closures, and a curved brim that holds its shape through daily wear.',
    rating: 4.7,
    products: [
      { id: 1, image: '/products/headwear/cap-1.jpeg', name: 'Multicam Trucker Cap', description: 'Camo front panels paired with a tan mesh back, embroidered with the Battle Pro logo for a low-profile tactical look.' },
      { id: 2, image: '/products/headwear/cap-2.jpeg', name: 'Forest Green Performance Cap', description: 'All-over perforated mesh construction in forest green with gold-and-white embroidery, built for airflow on hot days.' },
      { id: 3, image: '/products/headwear/cap-3.jpeg', name: 'Cream & Maroon Trucker Cap', description: 'Cream cotton front panel with a maroon mesh back and brim, finished with tonal Battle Pro embroidery.' },
      { id: 4, image: '/products/headwear/cap-4.jpeg', name: 'Tan & Brown Trucker Cap', description: 'Two-tone tan and brown trucker cap with a breathable mesh back and brown-on-gold embroidered branding.' },
      { id: 5, image: '/products/headwear/cap-5.jpeg', name: 'Sand & Brown Trucker Cap', description: 'A softer sand colorway of our classic trucker silhouette, with matching brown stitching and mesh rear panel.' },
      { id: 6, image: '/products/headwear/cap-6.jpeg', name: 'Navy & White Trucker Cap', description: 'Navy trucker cap with a white sandwich brim and gold-and-white embroidered logo for a sharp, clean finish.' },
      { id: 7, image: '/products/headwear/cap-7.jpeg', name: 'Red & Black Trucker Cap', description: 'Bold red front panels with a black mesh back and matching snap closure strap, shown from front, side, and rear.' },
      { id: 8, image: '/products/headwear/cap-8.jpeg', name: 'Navy & White Trucker Cap (Alt.)', description: 'Another angle of our navy and white trucker cap, highlighting the mesh back panel and adjustable strap.' },
      { id: 9, image: '/products/headwear/cap-9.jpeg', name: 'Blackout Performance Mesh Cap', description: 'All-black moisture-wicking performance cap with breathable side panels, built for training and hot-weather wear.' },
    ],
    reviews: [
      { id: 1, name: 'Daniyal S.', rating: 5, comment: 'The mesh back on the performance cap actually breathes, not just for show. Fits true to size with the snapback.', date: '2026-07-19' },
      { id: 2, name: 'Grace M.', rating: 5, comment: 'Embroidery is clean with no loose threads, and the navy colorway looks even better than the photos.', date: '2026-06-05' },
      { id: 3, name: 'Umar F.', rating: 4, comment: 'Good structured fit, holds its curve well. Would like to see a few more colorways added.', date: '2026-05-11' },
      { id: 4, name: 'Chiara P.', rating: 5, comment: 'Ordered the multicam trucker for a hunting trip, held up great and the strap adjusts easily.', date: '2026-08-09' },
      { id: 5, name: 'Bilal A.', rating: 4, comment: 'Comfortable all day, the brim doesn’t sag after a few washes like some other caps I’ve owned.', date: '2026-04-27' },
    ],
  },
}
