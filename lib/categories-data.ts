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
  { id: 2, slug: 'basketball-uniforms', name: 'Basket Ball', features: ['Moisture Wicking', 'Breathable Mesh', 'Ergonomic Fit'], color: 'from-orange-500/20 to-transparent', icon: '🏀' },
  { id: 3, slug: 'boxing-gloves', name: 'Boxing Gloves', features: ['Hand Protection', 'Superior Grip', 'Durability'], color: 'from-red-500/20 to-transparent', icon: '🥊' },
  { id: 6, slug: 'tactical-patches', name: 'Tactical Patches', features: ['Custom Designs', 'Durable Embroidery', 'Velcro Back'], color: 'from-purple-500/20 to-transparent', icon: '⚔️' },
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
  'basketball-uniforms': {
    slug: 'basketball-uniforms',
    name: 'Basket Ball',
    icon: '🏀',
    tagline: 'Moisture Wicking • Breathable Mesh • Ergonomic Fit',
    description:
      'Game-ready basketballs built with grippy, deep-channel covers for a consistent handle whether you\'re on hardwood, asphalt, or an outdoor court. Every ball is true to official size and weight, with a durable rubber or composite cover that holds its bounce and grip through daily play.',
    rating: 5,
    products: [
      { id: 1, image: '/products/basketball-uniforms/basketball-1.jpg', name: 'Streetball Multi-Color Edition', description: 'Vibrant teal, blue, yellow, and coral panel design on a grippy textured cover, built for outdoor asphalt courts and street games.' },
      { id: 2, image: '/products/basketball-uniforms/basketball-2.jpg', name: 'Classic Outdoor Basketball', description: 'Deep orange textured cover with bold black channels and a durable rubber construction made for daily outdoor play.' },
      { id: 3, image: '/products/basketball-uniforms/basketball-3.jpg', name: 'Essential Training Basketball', description: 'Official size-and-weight training ball in classic orange rubber with wide channels for a secure grip during dribbling drills.' },
      { id: 4, image: '/products/basketball-uniforms/basketball-4.jpg', name: 'Pro Composite Basketball', description: 'Rich tan composite cover with a fine pebbled texture and deep channels, designed for indoor and outdoor performance play.' },
      { id: 5, image: '/products/basketball-uniforms/basketball-5.jpg', name: 'Essential Yellow Training Ball', description: 'Bright yellow rubber training ball with wide black channels for maximum visibility on the court.' },
      { id: 6, image: '/products/basketball-uniforms/basketball-6.jpg', name: 'Varsity Edition Basketball', description: 'Classic orange rubber basketball in official No. 7 size and weight, finished with a bold varsity-style wordmark.' },
      { id: 7, image: '/products/basketball-uniforms/basketball-7.jpg', name: 'Tri-Color All-Surface Basketball', description: 'Blue, white, and red rubber cover built for all-surface play, indoors or out, with a soft, consistent grip.' },
      { id: 8, image: '/products/basketball-uniforms/basketball-8.jpg', name: 'Game Day Basketball', description: 'Classic orange game ball with deep black channels and a soft-grip cover, shown fresh off the hardwood.' },
      { id: 9, image: '/products/basketball-uniforms/basketball-9.jpg', name: 'Championship Leather Basketball', description: 'Premium composite-leather basketball with a rich tanned finish and deep traditional channels, built for league-level play.' },
    ],
    reviews: [
      { id: 1, name: 'Devon R.', rating: 5, comment: 'Grip is excellent straight out of the box, no need to break it in. Holds up great on our outdoor court.', date: '2026-07-14' },
      { id: 2, name: 'Meera S.', rating: 5, comment: 'Ordered a few for the community center and the channels are deep enough for a really consistent handle.', date: '2026-06-27' },
      { id: 3, name: 'Julian F.', rating: 4, comment: 'Solid ball for the price, bounce is true and consistent. Would like to see a couple more color options.', date: '2026-05-19' },
      { id: 4, name: 'Amara C.', rating: 5, comment: 'The composite leather one feels like a real league ball. Great for indoor gym sessions.', date: '2026-08-06' },
      { id: 5, name: 'Kian W.', rating: 5, comment: 'Bought the yellow training ball for my son, visibility is great and it has held up to months of driveway use.', date: '2026-04-21' },
      { id: 6, name: 'Rosa N.', rating: 5, comment: 'True to size and weight as advertised, and the surface stays grippy even when it gets a little dusty outside.', date: '2026-07-30' },
    ],
  },
  'boxing-gloves': {
    slug: 'boxing-gloves',
    name: 'Boxing Gloves',
    icon: '🥊',
    tagline: 'Hand Protection • Superior Grip • Durability',
    description:
      'Sparring and training gloves built from premium leather and synthetic leather with multi-layer foam padding for serious impact absorption. Reinforced wrist straps lock the glove in place, breathable palm linings keep hands cool through long rounds, and every stitch is built to survive daily pad work and sparring.',
    rating: 5,
    products: [
      { id: 1, image: '/products/boxing-gloves/boxing-glove-1.jpeg', name: 'Battle Pro Signature Sparring Gloves', description: 'Our flagship black and gold sparring gloves in premium leather with multi-layer foam padding, a breathable mesh palm, and a wide velcro strap for wrist support. Available in five colorways.' },
      { id: 2, image: '/products/boxing-gloves/boxing-glove-2.jpg', name: 'Classic Black Training Gloves', description: 'Sleek black leather training gloves with a bold oval crest and a reinforced wrist strap for a secure lockdown.' },
      { id: 3, image: '/products/boxing-gloves/boxing-glove-3.jpg', name: 'Crimson Statement Gloves', description: 'Bold red gloves with a stinger-style graphic down the front panel and a wide hook-and-loop cuff for quick glove-up.' },
      { id: 4, image: '/products/boxing-gloves/boxing-glove-4.jpg', name: 'Onyx & Gold Predator Gloves', description: 'Black and gold gloves finished with a geometric triangle print, a ventilated gold mesh palm, and a padded thumb lock.' },
      { id: 5, image: '/products/boxing-gloves/boxing-glove-5.jpg', name: 'Cobalt Blue Sparring Gloves', description: 'Vivid blue leather gloves with a matching stinger graphic and a low-profile wrist wrap for a snug competition fit.' },
      { id: 6, image: '/products/boxing-gloves/boxing-glove-6.jpg', name: "Trainer's Lineup Collection", description: 'A curated lineup of lace-up and hook-and-loop training gloves in white, grey, matte black, and red-accented colorways for every training style.' },
      { id: 7, image: '/products/boxing-gloves/boxing-glove-7.jpg', name: 'Pink Dragon Statement Gloves', description: 'Eye-catching pink and black gloves wrapped in a bold dragon graphic, finished with a secure wide wrist closure.' },
      { id: 8, image: '/products/boxing-gloves/boxing-glove-8.jpg', name: 'Blackout Red Accent Gloves', description: 'Matte black gloves with sharp red panel accents and bold typographic branding down the cuff.' },
      { id: 9, image: '/products/boxing-gloves/boxing-glove-9.jpg', name: 'Ivory Lace-Up Gloves', description: 'Traditional ivory leather lace-up gloves with a reinforced thumb and a classic globe crest, built for serious sparring sessions.' },
      { id: 10, image: '/products/boxing-gloves/boxing-glove-10.jpg', name: 'Emerald Heritage Gloves', description: 'Deep emerald green gloves with gold vertical lettering and a shamrock cuff badge, a standout colorway for fighters who like to make a statement.' },
    ],
    reviews: [
      { id: 1, name: 'Marcus D.', rating: 5, comment: 'The Battle Pro sparring gloves have incredible padding, my hands feel protected even after heavy bag rounds.', date: '2026-07-08' },
      { id: 2, name: 'Fatima Z.', rating: 5, comment: 'Wrist strap is the best I have used, locks in tight and doesn’t loosen mid-session.', date: '2026-06-15' },
      { id: 3, name: 'Connor B.', rating: 4, comment: 'Great grip and comfortable palm lining. Broke in faster than most leather gloves I have owned.', date: '2026-05-02' },
      { id: 4, name: 'Priyanka T.', rating: 5, comment: 'Bought the crimson pair for competition and they look as good as they perform. Stitching is flawless.', date: '2026-08-09' },
      { id: 5, name: 'Iker M.', rating: 5, comment: 'Padding absorbs impact really well, my sparring partner noticed the difference immediately.', date: '2026-04-24' },
      { id: 6, name: 'Danielle K.', rating: 5, comment: 'Ordered a few pairs from the trainer lineup for the gym, everyone loves the fit and durability.', date: '2026-07-21' },
    ],
  },
  'tactical-patches': {
    slug: 'tactical-patches',
    name: 'Tactical Patches',
    icon: '⚔️',
    tagline: 'Custom Designs • Durable Embroidery • Velcro Back',
    description:
      'Fully custom embroidered patches for gear, jackets, and bags — from scenic and novelty designs to fully bespoke emblem work. Each patch is stitched with dense, high-count embroidery and finished with a durable hook-and-loop or sew-on backing built to survive daily wear.',
    rating: 5,
    products: [
      { id: 1, image: '/products/tactical-patches/tactical-patch-1.jpg', name: 'Mountain Camp Patch', description: 'Embroidered round patch featuring a moonlit mountain camp scene with pine trees, a tent, and a campfire in rich blues and greens.' },
      { id: 2, image: '/products/tactical-patches/tactical-patch-2.jpg', name: 'Wildflower Bouquet Patch', description: 'Circular floral bouquet patch in soft pastels, shown appliquéd onto a denim jacket pocket for a custom personalized look.' },
      { id: 3, image: '/products/tactical-patches/tactical-patch-3.jpg', name: 'Assorted Emblem Patch Set', description: 'A mixed set of embroidered emblem patches in bold colorways, including tribute, adventure, and novelty designs for gear customization.' },
      { id: 4, image: '/products/tactical-patches/tactical-patch-4.jpg', name: 'Pop Culture Patch Collection', description: 'An eclectic collection of novelty embroidered patches, from cosmic and nature motifs to bold graphic icons, ready to iron or sew onto any jacket or bag.' },
      { id: 5, image: '/products/tactical-patches/tactical-patch-5.jpg', name: 'Custom Emblem Sampler', description: 'A sampler of fully custom embroidered emblems, including patriotic eagle designs, wildlife crests, and novelty badges — a preview of our custom patch options.' },
      { id: 6, image: '/products/tactical-patches/tactical-patch-6.jpg', name: 'Neon Skull Patch', description: 'Bold skull patch with turquoise hair and gold shutter-shades, stitched in high-contrast colors for a standout statement piece.' },
      { id: 7, image: '/products/tactical-patches/tactical-patch-7.jpg', name: 'Sunset Ridge Heritage Patch', description: 'Shield-shaped patch with a sunrise-over-mountains scene framed by pine trees, finished with a vintage heritage-style wordmark.' },
      { id: 8, image: '/products/tactical-patches/tactical-patch-8.jpg', name: 'Build-Your-Own Emblem Patch', description: 'Round patch template featuring mountain and wave motifs, made as a starting point for a fully custom embroidered design.' },
      { id: 9, image: '/products/tactical-patches/tactical-patch-9.jpg', name: 'Winged Emblem Patch', description: 'Circular patch featuring a pair of classic high-top sneakers flanked by wings, framed in bold red and white.' },
      { id: 10, image: '/products/tactical-patches/tactical-patch-10.jpg', name: 'Desert Ridge Patch', description: 'Circular scenic patch blending a rocky cliff face with a starry desert night sky, finished with a clean black border.' },
      { id: 11, image: '/products/tactical-patches/tactical-patch-11.jpg', name: 'Between the Trees Patch', description: 'Sage green circular patch with a crossed-pine emblem and bold circular lettering, a favorite for outdoor and camping gear.' },
    ],
    reviews: [
      { id: 1, name: 'Owen T.', rating: 5, comment: 'The embroidery density on these patches is way higher than what I have ordered from other shops. Colors stay vivid.', date: '2026-06-11' },
      { id: 2, name: 'Naomi P.', rating: 5, comment: 'Sent in a custom design and the sampler proofs they sent back nailed it on the first try.', date: '2026-07-26' },
      { id: 3, name: 'Sami A.', rating: 4, comment: 'Great quality patches, velcro backing is strong. Wish there were a few more size options.', date: '2026-05-09' },
      { id: 4, name: 'Lucia G.', rating: 5, comment: 'The heritage mountain patch looks incredible on my jacket, stitching is clean all the way around.', date: '2026-08-02' },
      { id: 5, name: 'Reza K.', rating: 5, comment: 'Ordered a batch of the assorted emblem set for gifts, everyone loved the variety and finish quality.', date: '2026-04-15' },
      { id: 6, name: 'Brooke H.', rating: 5, comment: 'Fast turnaround and the colors matched my reference image exactly. Will be ordering more.', date: '2026-07-03' },
    ],
  },
  'fitness-leggings': {
    slug: 'fitness-leggings',
    name: 'Fitness Leggings',
    icon: '💪',
    tagline: 'Compression Fit • High Waist Design • Squat Proof',
    description:
      'Squat-proof leggings and tights built from four-way stretch compression fabric that moves with you through every rep. High-waist bands stay put without rolling, flat-lock seams prevent chafing, and breathable mesh panels keep you cool from warmup to cooldown.',
    rating: 5,
    products: [
      { id: 1, image: '/products/fitness-leggings/legging-1.jpg', name: 'Studio Set Leggings', description: 'High-rise navy leggings paired with a matching zip-front sports bra, finished with subtle side branding for a coordinated studio-to-street look.' },
      { id: 2, image: '/products/fitness-leggings/legging-2.jpg', name: 'Mesh-Panel Performance Leggings', description: 'Black high-waist leggings with sheer mesh panels at the calf for breathability, paired with a small logo patch at the hip.' },
      { id: 3, image: '/products/fitness-leggings/legging-3.jpg', name: 'Emerald Swirl Leggings', description: 'Bold green and white color-block leggings with a sweeping diagonal graphic, cut from smooth four-way stretch fabric.' },
      { id: 4, image: '/products/fitness-leggings/legging-4.jpg', name: '2-in-1 Compression Tights', description: 'Black and grey layered compression tights with a built-in short, a zip side pocket, and reflective panel detailing for low-light training.' },
      { id: 5, image: '/products/fitness-leggings/legging-5.jpg', name: 'Stirrup Dance Tights', description: 'Classic black stirrup-style tights with a smooth, second-skin fit, ideal for dance, yoga, or barre training.' },
    ],
    reviews: [
      { id: 1, name: 'Georgia L.', rating: 5, comment: 'Genuinely squat proof, no see-through even in bright studio lighting. High waist stays put during burpees.', date: '2026-07-17' },
      { id: 2, name: 'Vikram S.', rating: 5, comment: 'The compression tights are great for recovery days, the built-in pocket fits my phone perfectly.', date: '2026-06-01' },
      { id: 3, name: 'Elif Y.', rating: 4, comment: 'Comfortable fabric and true to size. Would love to see more mesh-panel color options.', date: '2026-05-13' },
      { id: 4, name: 'Camille R.', rating: 5, comment: 'Wore the studio set for a full HIIT class, zero rolling down and the sports bra held up well.', date: '2026-08-04' },
      { id: 5, name: 'Theo B.', rating: 5, comment: 'The stirrup tights are exactly what I needed for barre class, smooth fit and stays in place under the foot.', date: '2026-04-28' },
    ],
  },
  'casual-apparel': {
    slug: 'casual-apparel',
    name: 'Casual Apparel',
    icon: '👕',
    tagline: 'Modern Designs • Comfortable • Versatile',
    description:
      'Everyday essentials built for comfort first — soft-touch tees, relaxed hoodies, and easy layering pieces that go from errands to evenings out. Breathable fabrics, flattering cuts, and clean detailing make every piece easy to wear and even easier to restyle.',
    rating: 5,
    products: [
      { id: 1, image: '/products/casual-apparel/casual-1.jpg', name: 'Ivory Bell-Sleeve Crop Top', description: 'Fitted ivory crop top with dramatic bell sleeves and a scoop neckline, a versatile piece for dressing up or down.' },
      { id: 2, image: '/products/casual-apparel/casual-2.jpg', name: 'Blush Long-Sleeve Tee', description: 'Relaxed blush-pink long-sleeve top with a curved hem and thumbhole cuffs for everyday comfort.' },
      { id: 3, image: '/products/casual-apparel/casual-3.jpg', name: 'Rust Graphic Tee', description: 'Heathered rust-brown tee with a subtle tonal chest graphic, cut for a relaxed, breathable everyday fit.' },
      { id: 4, image: '/products/casual-apparel/casual-4.jpg', name: 'Sky Blue Shirt & Skirt Set', description: 'Crisp sky-blue collared shirt paired with a tailored navy pencil skirt, a polished set for office or smart-casual wear.' },
      { id: 5, image: '/products/casual-apparel/casual-5.jpg', name: 'Terracotta Cowl-Neck Top', description: 'Silky terracotta top with a draped cowl neckline and dropped shoulders, finished with a soft satin sheen.' },
      { id: 6, image: '/products/casual-apparel/casual-6.jpg', name: 'Blush Colorblock Hoodie', description: 'Soft cream hoodie with contrast blush raglan sleeves and a drawstring hood, made for cozy everyday layering.' },
      { id: 7, image: '/products/casual-apparel/casual-7.jpg', name: 'Heather Charcoal Zip Hoodie', description: 'Marled charcoal full-zip hoodie with a kangaroo pocket and a small embroidered chest emblem.' },
      { id: 8, image: '/products/casual-apparel/casual-8.jpg', name: 'Blackout Utility Hoodie', description: 'Black pullover hoodie with a crossbody-style sleeve zip pocket and a clean oval chest emblem, built for everyday utility.' },
      { id: 9, image: '/products/casual-apparel/casual-9.jpg', name: 'Sunset Red Graphic Tee', description: 'Playful red tee with a bold script graphic across the chest, styled here for a breezy beach-day look.' },
      { id: 10, image: '/products/casual-apparel/casual-10.jpg', name: 'Ombre Resort Shirt', description: 'Short-sleeve button-up in a teal-to-sand ombre wash with a printed resort-style graphic, perfect for warm-weather wear.' },
    ],
    reviews: [
      { id: 1, name: 'Isla M.', rating: 5, comment: 'The cowl-neck top feels so much more expensive than it costs, love the drape of the fabric.', date: '2026-07-05' },
      { id: 2, name: 'Andres P.', rating: 5, comment: 'Zip hoodie is my new daily driver, the fabric is thick without being bulky.', date: '2026-06-19' },
      { id: 3, name: 'Wanjiru K.', rating: 4, comment: 'Really comfortable everyday pieces, sizing runs a touch large so I would size down.', date: '2026-05-27' },
      { id: 4, name: 'Sophie D.', rating: 5, comment: 'Bought the shirt and skirt set for work, gets compliments every time and it does not wrinkle easily.', date: '2026-08-08' },
      { id: 5, name: 'Tomás R.', rating: 5, comment: 'The resort shirt was perfect for vacation, breathable fabric and the ombre print looks great in person.', date: '2026-04-20' },
      { id: 6, name: 'Nadia F.', rating: 5, comment: 'Blush hoodie is so soft and the colorblock detail makes it feel a bit more special than a basic hoodie.', date: '2026-07-12' },
    ],
  },
  'polo-shirts': {
    slug: 'polo-shirts',
    name: 'Polo Shirts',
    icon: '👔',
    tagline: 'Breathable Cotton • Professional Look • Durable',
    description:
      'Performance polos built from premium moisture-wicking fabric that stays breathable, lightweight, and comfortable through a full shift or a full match. Classic ribbed collars, reinforced button plackets, and clean embroidered branding give every shirt a sharp, professional finish that holds up wash after wash.',
    rating: 5,
    products: [
      { id: 1, image: '/products/polo-shirts/polo-1.jpeg', name: 'Battle Pro Onyx & Gold Polo', description: 'Our signature black polo with sweeping gold-and-white side panels, a modern classic collar, and embroidered Battle Pro branding on the chest and sleeve.' },
      { id: 2, image: '/products/polo-shirts/polo-2.jpeg', name: 'Navy Gold-Trim Sport Tee', description: 'Navy performance tee with gold shoulder piping and a soft crew neckline, finished with subtle tonal Battle Pro embroidery on the chest.' },
      { id: 3, image: '/products/polo-shirts/polo-3.jpeg', name: 'Navy Shoulder-Stripe Training Tee', description: 'Flat-lay essential in deep navy with gold racing stripes across the shoulders and a minimal gold Battle Pro emblem.' },
      { id: 4, image: '/products/polo-shirts/polo-4.jpeg', name: 'Pale Yellow Pique Polo', description: 'Soft pale yellow pique polo with a classic buttoned placket and clean tailored fit, perfect for a smart-casual everyday look.' },
      { id: 5, image: '/products/polo-shirts/polo-5.jpg', name: 'Blackout Wordmark Tee', description: 'Black performance tee with a bold gold-and-white Battle Pro wordmark across the chest, built for training days and off-court wear.' },
      { id: 6, image: '/products/polo-shirts/polo-6.jpeg', name: 'Battle Pro Signature Polo Collection', description: 'Our flagship black-and-gold polo shown front, back, and side, available in six colorways — Black, Navy, Royal Blue, Maroon, Forest Green, and White.' },
      { id: 7, image: '/products/polo-shirts/polo-7.jpeg', name: 'Navy Contrast-Placket Polo', description: 'Tailored navy polo with a bright yellow inner placket accent for a sharp pop of contrast under the collar.' },
      { id: 8, image: '/products/polo-shirts/polo-8.jpg', name: 'Navy Yellow-Trim Polo', description: 'Clean navy polo with a matching yellow underside collar detail, cut for a comfortable everyday fit.' },
    ],
    reviews: [
      { id: 1, name: 'Farhan Q.', rating: 5, comment: 'The fabric is exactly what they promise — breathable and doesn’t cling even after a full day at work. Fits true to size.', date: '2026-07-11' },
      { id: 2, name: 'Natalie B.', rating: 5, comment: 'Ordered the black and gold polo for our team and the embroidery quality is outstanding. Looks way more expensive than it was.', date: '2026-06-22' },
      { id: 3, name: 'Yusuf R.', rating: 5, comment: 'Color held up perfectly after several washes, no fading on the gold trim. Will be ordering more colors.', date: '2026-08-03' },
      { id: 4, name: 'Priya M.', rating: 4, comment: 'Great quality polo, very comfortable. Wish the pale yellow ran in a couple more sizes.', date: '2026-05-15' },
      { id: 5, name: 'Callum S.', rating: 5, comment: 'Stitching is solid and the collar keeps its shape all day. Easily the best polo I’ve bought for work uniforms.', date: '2026-07-28' },
      { id: 6, name: 'Aisha N.', rating: 5, comment: 'Soft, breathable, and the navy colorway looks sharp with the contrast placket. Five stars, no complaints.', date: '2026-04-30' },
    ],
  },
  tracksuits: {
    slug: 'tracksuits',
    name: 'Tracksuits',
    icon: '🏃',
    tagline: 'Athletic Cut • Premium Fabric • All Weather',
    description:
      'Full tracksuits and matching athletic sets built with breathable, moisture-wicking fabric, 4-way stretch, and elastic cuffs and waistbands for a locked-in fit. Whether it’s a zip-up jacket and jogger combo or a hoodie set, every piece is stitched for daily training and built to move with you.',
    rating: 5,
    products: [
      { id: 1, image: '/products/tracksuits/tracksuit-1.jpeg', name: 'Onyx Gold-Trim Shorts', description: 'Breathable mesh shorts in black with sharp gold-and-white side graphics, an elastic drawstring waistband, and side vents for maximum mobility.' },
      { id: 2, image: '/products/tracksuits/tracksuit-2.jpeg', name: 'Battle Pro Signature Tracksuit', description: 'Our flagship black and gold tracksuit — a full-zip jacket with a stand collar and zipper pockets paired with tapered joggers, available in six colorways.' },
      { id: 3, image: '/products/tracksuits/tracksuit-3.png', name: 'Heather Grey Hoodie Tracksuit', description: 'Cozy heather grey hoodie and matching jogger set with tonal Battle Pro branding, made for warmups and everyday off-duty comfort.' },
      { id: 4, image: '/products/tracksuits/tracksuit-4.png', name: 'Crimson Jogger Set', description: 'Bold crimson red tee and jogger set with a drawstring waist and bold white Battle Pro lettering, styled for training and street wear alike.' },
      { id: 5, image: '/products/tracksuits/tracksuit-5.png', name: 'Multi-Colorway Performance Set', description: 'Long-sleeve performance top and shorts set shown across seven colorways — Black, Navy, Red, Royal Blue, Green, White, and Gray.' },
      { id: 6, image: '/products/tracksuits/tracksuit-6.png', name: 'Blackout Court Set', description: 'All-black long-sleeve top and shorts set with gold-and-white accent striping, worn courtside for a sharp, matching training look.' },
      { id: 7, image: '/products/tracksuits/tracksuit-7.jpeg', name: 'Onyx Sleeveless Uniform Set', description: 'Sleeveless performance top and shorts set in black with gold V-neck trim and bold number detailing, built for game day.' },
    ],
    reviews: [
      { id: 1, name: 'Zainab H.', rating: 5, comment: 'The jacket fits perfectly and the zipper glides smooth every time. Warm enough for early morning runs without overheating.', date: '2026-07-20' },
      { id: 2, name: 'Mateo L.', rating: 5, comment: 'Bought the grey hoodie set for lounging and it’s ridiculously comfortable. Fabric feels premium, not thin like other brands.', date: '2026-06-09' },
      { id: 3, name: 'Sara D.', rating: 5, comment: 'Ordered matching sets for the whole team in navy, everyone is happy with the fit and the stitching held up through training camp.', date: '2026-08-05' },
      { id: 4, name: 'Owen K.', rating: 4, comment: 'Really solid tracksuit, elastic cuffs keep their shape. Only wish it came in a tall size.', date: '2026-05-24' },
      { id: 5, name: 'Leila P.', rating: 5, comment: 'The crimson set is so comfortable and the color hasn’t faded after multiple washes. Gets compliments every time I wear it.', date: '2026-04-12' },
      { id: 6, name: 'Tariq B.', rating: 5, comment: 'Four-way stretch actually works, no restriction during drills. Best tracksuit I’ve trained in.', date: '2026-07-02' },
    ],
  },
  'martial-arts-uniforms': {
    slug: 'martial-arts-uniforms',
    name: 'Martial Arts Uniforms',
    icon: '🥋',
    tagline: 'Premium Cotton Blends • Reinforced Stitching • Authentic Designs',
    description:
      'Traditional gis, doboks, and kung fu uniforms cut from heavyweight cotton blends with double and triple reinforced stitching at every stress point. From competition-ready karate gis to embroidered kung fu tunics, each uniform is built to survive hard sparring and hold its shape wash after wash.',
    rating: 5,
    products: [
      { id: 1, image: '/products/martial-arts-uniforms/martial-arts-1.jpeg', name: 'Onyx Black Karate Gi', description: 'Heavyweight black karate gi with a reinforced collar and matching belt, finished with subtle gold Battle Pro Wear embroidery on the chest.' },
      { id: 2, image: '/products/martial-arts-uniforms/martial-arts-2.jpeg', name: 'Classic White Karate Gi', description: 'Traditional white cotton gi with a structured collar and self-fabric belt, tailored for dojo training and grading tests.' },
      { id: 3, image: '/products/martial-arts-uniforms/martial-arts-3.jpg', name: 'Golden Dragon Wushu Uniform', description: 'Satin-finish black and gold kung fu uniform with a hand-embroidered dragon motif, frog-button closures, and a wrapped sash for authentic wushu forms.' },
      { id: 4, image: '/products/martial-arts-uniforms/martial-arts-4.jpg', name: 'Black Belt Competition Gi', description: 'Lightweight white gi paired with a striped black belt, cut for freedom of movement during sparring and competition rounds.' },
      { id: 5, image: '/products/martial-arts-uniforms/martial-arts-5.jpg', name: 'Sky Blue Tai Chi Uniform', description: 'Soft sky-blue tai chi top with a mandarin collar and navy frog-button trim, designed for flowing forms and everyday practice.' },
      { id: 6, image: '/products/martial-arts-uniforms/martial-arts-6.jpg', name: 'Kids White Taekwondo Dobok', description: 'Lightweight white taekwondo dobok sized for young athletes, with a V-neck collar and World Taekwondo-style chest patch.' },
      { id: 7, image: '/products/martial-arts-uniforms/martial-arts-7.jpeg', name: 'Battle Pro Karate Gi in Competition', description: 'Our black competition gi in action in the ring, embroidered with Battle Pro Wear branding and paired with a black belt for full-contact sparring.' },
    ],
    reviews: [
      { id: 1, name: 'Kenji O.', rating: 5, comment: 'The black gi held up through a full sparring season without the stitching giving out once. Collar stays stiff even after washing.', date: '2026-06-18' },
      { id: 2, name: 'Amira S.', rating: 5, comment: 'Bought the white gi for my daughter’s grading and the fit was perfect. Fabric is thick but still breathable.', date: '2026-07-25' },
      { id: 3, name: 'Diego F.', rating: 5, comment: 'The wushu uniform with the dragon embroidery is stunning in person, way better finish than I expected for the price.', date: '2026-05-08' },
      { id: 4, name: 'Wei L.', rating: 4, comment: 'Solid competition gi, good range of motion. Would like a slightly longer sleeve option for taller athletes.', date: '2026-08-11' },
      { id: 5, name: 'Hana K.', rating: 5, comment: 'The tai chi top is beautiful and comfortable for slow forms practice. Buttons feel sturdy, not flimsy at all.', date: '2026-04-03' },
      { id: 6, name: 'Marcus T.', rating: 5, comment: 'Got the kids dobok for my son and it survived an entire term of classes still looking new. Great value.', date: '2026-06-30' },
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
