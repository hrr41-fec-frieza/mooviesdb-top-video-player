const faker = require('faker');


const data = [
  {
    title: 'Cows grazing in a Field',
    description: 'Cows grazing in a greenish brown field.',
    running_time: 7,
    date: new Date(2019, 9, 4).getFullYear(),
    ratings: 221062,
    averageRating: 8.1,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/CowsGrazingInField.jpg",
    video_url: "https://pixabay.com/videos/download/video-15508_large.mp4"
  },
  {
    title: 'Black and White Cow',
    description: 'A cow hanging out in Switzerland amongst its friends.',
    running_time: 21,
    date: new Date(2019, 9, 4).getFullYear(),
    ratings: 5004,
    averageRating: 7.6,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/BlackWhiteCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-3864_large.mp4"
  },
  {
    title: 'Red Haired Cow',
    description: 'The Beautiful Cow grazing in the pasture.',
    running_time: 7,
    date: new Date(2017, 9, 4).getFullYear(),
    ratings: 243,
    averageRating: 8.2,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/RedHairedCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-10270_large.mp4"
  },
  {
    title: 'Cow in the Countryside',
    description: 'A wonderful cow grazing in the country, with the forest in the background.',
    running_time: 23,
    date: new Date(2016, 5, 4).getFullYear(),
    ratings: 2243,
    averageRating: 7.9,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/CowCountryside.jpg",
    video_url: "https://pixabay.com/videos/download/video-8439_large.mp4"
  },
  {
    title: 'Two Cows',
    description: 'Two cows playing together in the pasture.',
    running_time: 20,
    date: new Date(2016, 5, 4).getFullYear(),
    ratings: 2243,
    averageRating: 6.8,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/TwoCows.jpg",
    video_url: "https://pixabay.com/videos/download/video-1278_medium.mp4"
  },
  {
    title: 'Boi Cow',
    description: 'Reddish Brown cow grazing in pasture.',
    running_time: 10,
    date: new Date(2016, 1, 4).getFullYear(),
    ratings: 2843,
    averageRating: 4.5,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/BoiCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-17880_large.mp4"
  },
  {
    title: 'Green Pasture',
    description: 'A green saga of menu hungry cows.',
    running_time: 16,
    date: new Date(2016, 1, 4).getFullYear(),
    ratings: 555553,
    averageRating: 9.1,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/GreenPasture.jpg",
    video_url: "https://pixabay.com/videos/download/video-1026_medium.mp4"
  },
  {
    title: 'Cow Grub',
    description: 'Cattle enjoying a beautiful fall day of grazing.',
    running_time: 9,
    date: new Date(2017, 1, 7).getFullYear(),
    ratings: 5553,
    averageRating: 6.9,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/CowGrub.jpg",
    video_url: "https://pixabay.com/videos/download/video-17876_large.mp4"
  },
  {
    title: 'White Cow (Fang)',
    description: 'An adaptation of the classic White Fang involving cows.',
    running_time: 10,
    date: new Date(2017, 8, 7).getFullYear(),
    ratings: 253,
    averageRating: 6.7,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/WhiteFangCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-17877_large.mp4"
  },
  {
    title: 'The Invisible One',
    description: 'Mostly a field with a split second of cow.',
    running_time: 8,
    date: new Date(2018, 8, 17).getFullYear(),
    ratings: 53,
    averageRating: 5.1,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/InvisibleCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-25876_medium.mp4"
  },
  {
    title: 'Afternoon Delight',
    description: 'Different cows enjoying the heck out of their afternoon.',
    running_time: 7,
    date: new Date(2018, 8, 14).getFullYear(),
    ratings: 557,
    averageRating: 4.6,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/AfternoonDelight.jpg",
    video_url: "https://pixabay.com/videos/download/video-17899_large.mp4"
  },
  {
    title: 'Blue Sky',
    description: 'A beautiful blue sky. Cows may or may not be here.',
    running_time: 7,
    date: new Date(2012, 8, 14).getFullYear(),
    ratings: 5357,
    averageRating: 6.8,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/BlueSky.jpg",
    video_url: "https://pixabay.com/videos/download/video-25735_large.mp4"
  },
  {
    title: 'Rabbit Cow II',
    description: 'Cows and a bunny, enjoying the countryside.',
    running_time: 18,
    date: new Date(2012, 1, 14).getFullYear(),
    ratings: 507,
    averageRating: 8.4,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/RabbitCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-5273_large.mp4"
  },
  {
    title: 'Forrest Cow',
    description: 'Forrest Gump. But with cows.',
    running_time: 59,
    date: new Date(2014, 11, 14).getFullYear(),
    ratings: 5075,
    averageRating: 7.3,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/ForrestCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-17121_large.mp4"
  },
  {
    title: 'The Dog',
    description: 'A dog hanging out with some cows, and sniffing.',
    running_time: 7,
    date: new Date(2014, 12, 14).getFullYear(),
    ratings: 175,
    averageRating: 8.7,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/TheDog.jpg",
    video_url: "https://pixabay.com/videos/download/video-17901_large.mp4"
  },
  {
    title: 'The Black Cowllion',
    description: 'The black sheep in the cow family.',
    running_time: 33,
    date: new Date(2019, 1, 19).getFullYear(),
    ratings: 1754,
    averageRating: 6.7,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/BlackCowllion.jpg",
    video_url: "https://pixabay.com/videos/download/video-190_large.mp4"
  },
  {
    title: 'The Herd',
    description: 'Nurturing happens with cows, too.',
    running_time: 39,
    date: new Date(2019, 1, 20).getFullYear(),
    ratings: 1798,
    averageRating: 7.7,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/TheHerd.jpg",
    video_url: "https://pixabay.com/videos/download/video-2359_medium.mp4"
  },
  {
    title: 'Holy Cow',
    description: 'Some sacred cows in India.',
    running_time: 10,
    date: new Date(2011, 7, 22).getFullYear(),
    ratings: 118,
    averageRating: 7.0,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/HolyCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-9626_large.mp4"
  },
  {
    title: 'Every Rose Has Its Horns',
    description: 'A saga of the red haired cow.',
    running_time: 10,
    date: new Date(2011, 7, 22).getFullYear(),
    ratings: 118,
    averageRating: 6.4,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/EveryRoseHorns.jpg",
    video_url: "https://pixabay.com/videos/download/video-10267_large.mp4"
  },
  {
    title: 'Livestock',
    description: 'A day in the life of livestock.',
    running_time: 26,
    date: new Date(2017, 7, 22).getFullYear(),
    ratings: 6018,
    averageRating: 7.2,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/Livestock.jpg",
    video_url: "https://pixabay.com/videos/download/video-5694_large.mp4"
  },
  {
    title: 'The Great Divide',
    description: 'Cows, so close to one another, yet so far.',
    running_time: 11,
    date: new Date(2010, 7, 2).getFullYear(),
    ratings: 68,
    averageRating: 8.9,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/GreatDivide.jpg",
    video_url: "https://pixabay.com/videos/download/video-13229_large.mp4"
  },
  {
    title: 'Browny',
    description: 'A brown cow, chilling with his buddies in the fields',
    running_time: 3,
    date: new Date(2011, 5, 2).getFullYear(),
    ratings: 68,
    averageRating: 6.0,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/Browny.jpg",
    video_url: "https://pixabay.com/videos/download/video-6536_large.mp4"
  },
  {
    title: 'The Cowfather',
    description: 'Daddy, chewing some food.',
    running_time: 41,
    date: new Date(2010, 5, 21).getFullYear(),
    ratings: 408,
    averageRating: 9.4,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/CowFather.jpg",
    video_url: "https://pixabay.com/videos/download/video-5646_large.mp4"
  },
  {
    title: 'True Love',
    description: 'A bonding adventure in the pasture.',
    running_time: 10,
    date: new Date(2019, 5, 5).getFullYear(),
    ratings: 9408,
    averageRating: 7.2,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/TrueLove.jpg",
    video_url: "https://pixabay.com/videos/download/video-27236_medium.mp4"
  },
  {
    title: 'A Real Mate',
    description: 'A giant cow and some ones behind it, mating.',
    running_time: 12,
    date: new Date(2019, 5, 14).getFullYear(),
    ratings: 4038,
    averageRating: 6.5,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/ARealMate.jpg",
    video_url: "https://pixabay.com/videos/download/video-27259_medium.mp4"
  },
  {
    title: 'The Cow Bunch',
    description: 'A crazy crew of cows!',
    running_time: 16,
    date: new Date(2019, 5, 22).getFullYear(),
    ratings: 4038,
    averageRating: 4.8,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/CowBunch.jpg",
    video_url: "https://pixabay.com/videos/download/video-23123_large.mp4"
  },
  {
    title: 'Sunset Cow',
    description: 'A beautiful evening, if you are a cow!',
    running_time: 14,
    date: new Date(2019, 5, 26).getFullYear(),
    ratings: 4138,
    averageRating: 5.6,
    yourRating: [],
    thumbnail_url: "https://cowthumbnailphotos.s3-us-west-1.amazonaws.com/FEC+thumbnail+photos/SunsetCow.jpg",
    video_url: "https://pixabay.com/videos/download/video-10737_large.mp4"
  }
]
let dataCopy = data.slice();
var sampleData = [];
for (let i = 100; i < 200; i++) {
  if (!dataCopy.length) {
    dataCopy = data.slice();
  }
  let randomIdx = Math.floor(Math.random() * dataCopy.length)
  let movie = dataCopy[randomIdx];
  sampleData.push({id: i, title: faker.lorem.words(), description: faker.lorem.sentence(), running_time: movie.running_time, date: movie.date, ratings: faker.random.number(),averageRating: Math.round(Math.random() * 100)/10, yourRating: [], thumbnail_url: movie.thumbnail_url, video_url: movie.video_url});

  dataCopy.splice(randomIdx, 1)
}

module.exports.sampleData = sampleData;