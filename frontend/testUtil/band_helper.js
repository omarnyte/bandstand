const band1 = { 
  id: 1, 
  band_name: "testBand",
  location: "Testville",
  mini_bio: "Rivetting bio",
  image_location: "http://images5.fanpop.com/image/photos/29200000/metallica-metallica-29291018-1024-768.jpg"
};

const band2 = { 
  id: 2, 
  band_name: "Jestin Timberlake",
  location: "Los Angeles, CA",
  mini_bio: "Rivetting bio",
  image_location: "https://theworldofcelebrity.files.wordpress.com/2013/02/jt2.jpg"
};

export const testBenches = {
  [band1.id]: band1,
  [band2.id]: band2,
};
