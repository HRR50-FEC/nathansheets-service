const db = require('./index.js').db;
const Description = require('./description.js');

const numberOfEntries = 100;
const adj1 = ['big', 'little', 'fuzzy', 'small', 'large', 'gigantic', 'tiny', 'smooth', 'furry'];
const adj2 = ['suspicious', 'talkative', 'generous', 'sketchy', 'powerful', 'sneaky', 'cool', 'yummy'];
const colors = ['blue', 'green', 'maroon', 'silver', 'turqoise', 'yellow', 'red', 'purple', 'white', 'black', 'orange', 'pink', 'brown'];
const items = ['table', 'iPod', 'chair', 'desk', 'necklace', 'toothbrush', 'laptop', 'ring', 'shirt'];
const nouns = ['dog', 'kitten', 'cow', 'squirrel', 'flamingo', 'wolf', 'shark', 'gorilla', 'fishy', 'pikachu'];
const locations = ['bangladesh', 'florida', 'australia', 'hong kong', 'thailand', 'sweden', 'texas', 'california'];
const shops = ['Target', 'Walmart', 'GameStop', 'Nvidia', 'Intel', 'Kohls', 'McDonalds', 'Chick Fil A'];
const discount = [0, 0, 0, 0, 0, 0, 0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5];
const options = [
  {
    name: 'Color',
    0: 'blue',
    1: 'red',
    2: 'green',
    3: 'white'
  },
  {
    name: 'Size',
    0: 'small',
    1: 'medium',
    2: 'large',
    3: 'extra large'
  }
];

const materials = ['Wood', 'Metal', 'Glass', 'Cotton', 'Polyester', 'Silk', 'Stone', 'Gold', 'Silver', 'Diamond'];

const description = [
  'Lorem ipsum dolor sit amet, vim at viderer lobortis, eos ubique interesset suscipiantur in. In est omnis disputando, at vis utinam hendrerit eloquentiam. At utroque persequeris vix. Ne ignota semper iriure qui, modus gloriatur abhorreant ei usu',
  'Id eos odio diam nonumy, pro at vero minimum commune. Vim ei essent aliquid oportere, te dicunt aeterno corrumpit cum, sint gloriatur usu ea. Decore periculis complectitur eu per, mel eripuit mediocritatem eu, eos at latine volumus reformidans. At purto oportere cum.',
  'Vim te quem veritus admodum. Mel dicam eruditi appellantur et. Summo ancillae mel cu, no tempor eligendi quo. Vim iriure eloquentiam te, ex has reque quodsi vulputate, qui velit numquam referrentur et. Vel nibh elit delenit at, velit menandri ex his, te ius alia saperet postulant.',
  'Ad eligendi lucilius pri, tacimates sadipscing ad nec. Civibus atomorum in his. Homero veritus no sit. Eam populo probatus ad, eu mea tale primis, no possim virtute delicatissimi eum. Stet eruditi omittam per eu, no zril vocent lobortis est.'
];

function generateItemName() {
  return adj1[Math.floor(Math.random() * adj1.length)] +
    ' ' +
    colors[Math.floor(Math.random() * colors.length)] +
    ' ' +
    items[Math.floor(Math.random() * items.length)];
};

function generateSellerName() {
  return adj2[Math.floor(Math.random() * adj2.length)] +
    nouns[Math.floor(Math.random() * nouns.length)] +
    Math.floor(Math.random() * Math.floor(1000));
};

function generateOptions() {
  var optionsX;
    var x = Math.floor(Math.random() * Math.floor(3));
    if (x === 0) {
      optionsX = options[0];
    } else if (x === 1) {
      optionsX = options[1];
    } else {
      optionsX = options;
    }
  return JSON.stringify(optionsX);
};

function generateRandomMember(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function generateRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)) || 1;
};

function generateHighlights() {
  let thishandMade = Math.random() < 0.75;
  let thisMaterials = [];
  for (let i = 0; i < generateRandomNumber(3); i++){
    let x = generateRandomMember(materials);
    if (!thisMaterials.includes(x)) {
      thisMaterials.push(x);
    }
  }
  let height = generateRandomNumber(100);
  let width = generateRandomNumber(100);
  let depth = generateRandomNumber(100);

  return JSON.stringify({
    isHandmade : thishandMade,
    materials : thisMaterials,
    dimensions : {
      height: height,
      width: width,
      depth: depth
    },
  });
}

const seedDatabase = function() {
  for (let i = 0; i < numberOfEntries; i++) {
    var desc = new Description({
      itemName: generateItemName(),
      listingID: i,
      ItemSeller: {
        sellerName: generateSellerName(),
        sellerLocation: generateRandomMember(locations),
        ownerOf: generateRandomMember(shops)
      },
      itemPrice: generateRandomNumber(1000),
      discountPercent: generateRandomMember(discount),
      averageRating: generateRandomNumber(5),
      options: generateOptions(),
      totalSales: generateRandomNumber(10000),
      stockLeft: generateRandomNumber(20),
      itemDescription: generateRandomMember(description),
      itemHighlights: generateHighlights(),
      shipTime: generateRandomNumber(30),
      deliveryTime: generateRandomNumber(30)
    });
    desc.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Saved ${i}!`);
      }
    });
  }
};

seedDatabase();