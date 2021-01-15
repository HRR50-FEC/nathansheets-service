const db = require('./index.js');
const Description = require('./description.js');

const numberOfEntries = 100;
const adj1 = ['big', 'little', 'fuzzy', 'small', 'large', 'gigantic', 'tiny', 'smooth', 'furry'];
const adj2 = ['suspicious', 'talkative', 'generous', 'sketchy', 'powerful', 'sneaky', 'cool', 'yummy'];
const colors = ['blue', 'green', 'maroon', 'silver', 'turqoise', 'yellow', 'red', 'purple', 'white', 'black', 'orange', 'pink', 'brown'];
const items = ['table', 'iPod', 'chair', 'desk', 'necklace', 'toothbrush', 'laptop', 'ring', 'shirt'];
const animals = ['dog', 'kitten', 'cow', 'squirrel', 'flamingo', 'wolf', 'shark', 'gorilla', 'fishy'];
const locations = ['bangladesh', 'florida', 'australia', 'hong kong', 'thailand', 'sweden', 'texas', 'california'];
const shops = ['Target', 'Walmart', 'GameStop', 'Nvidia', 'Intel', 'Kohls', 'McDonalds', 'Chick Fil A'];
const discount = [0, 0, 0, 0, 0, 0, 0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5];
const options = [
  {
    name: 'Colors',
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
const description = [
  'Lorem ipsum dolor sit amet, vim at viderer lobortis, eos ubique interesset suscipiantur in. In est omnis disputando, at vis utinam hendrerit eloquentiam. At utroque persequeris vix. Ne ignota semper iriure qui, modus gloriatur abhorreant ei usu',
  'Id eos odio diam nonumy, pro at vero minimum commune. Vim ei essent aliquid oportere, te dicunt aeterno corrumpit cum, sint gloriatur usu ea. Decore periculis complectitur eu per, mel eripuit mediocritatem eu, eos at latine volumus reformidans. At purto oportere cum.',
  'Vim te quem veritus admodum. Mel dicam eruditi appellantur et. Summo ancillae mel cu, no tempor eligendi quo. Vim iriure eloquentiam te, ex has reque quodsi vulputate, qui velit numquam referrentur et. Vel nibh elit delenit at, velit menandri ex his, te ius alia saperet postulant.',
  'Ad eligendi lucilius pri, tacimates sadipscing ad nec. Civibus atomorum in his. Homero veritus no sit. Eam populo probatus ad, eu mea tale primis, no possim virtute delicatissimi eum. Stet eruditi omittam per eu, no zril vocent lobortis est.'
];


const seedDatabase = function() {
  for (let i = 0; i < numberOfEntries; i++) {
    var itemName = adj1[Math.floor(Math.random() * adj1.length)] + ' ' + colors[Math.floor(Math.random() * colors.length)] + ' ' + items[Math.floor(Math.random() * colors.length)];
    var sellerName = adj2[Math.floor(Math.random() * adj2.length)] + ' ' + animals[Math.floor(Math.random() * animals.length)];
    var optionsX;
    var x = Math.floor(Math.random() * Math.floor(3));
    if (x === 0) {
      optionsX = options[0];
    } else if (x === 1) {
      optionsX = options[1];
    } else {
      optionsX = options;
    }

    var desc = new Description({
      itemName: itemName,
      listingID: i,
      ItemSeller: {
        sellerName: sellerName,
        sellerLocation: locations[Math.floor(Math.random() * locations.length)],
        ownerOf: shops[Math.floor(Math.random() * shops.length)]
      },
      itemPrice: Math.floor(Math.random() * Math.floor(1000)),
      discountPercent: discount[Math.floor(Math.random * discount.length)],
      averageRating: Math.floor(Math.random() * Math.floor(5)),
      options: JSON.stringify(optionsX),
      totalSales: Math.floor(Math.random() * Math.floor(100)),
      stockLeft: Math.floor(Math.random() * Math.floor(100)),
      itemDescription: description[Math.floor(Math.random() * description.length)],
      shipTime: Math.floor(Math.random() * Math.floor(30)),
      deliveryTime: Math.floor(Math.random() * Math.floor(30))
    });
    desc.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Saved ${i}!`);
      }
    });
  }
}

seedDatabase();