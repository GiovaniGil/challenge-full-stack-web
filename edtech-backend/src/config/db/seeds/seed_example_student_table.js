const { tableNameStudent } = require('../../tables');

exports.seed = function (knex) {
  
  const students = [
    { name: 'Teodor Woodley', academic_registry: '40d10fda', document: '531.276.323-39', email: 'little.michele@konopelski.com' },
    { name: 'Bert Collins', academic_registry: '18600a87', document: '156.113.704-97', email: 'gleason.jakayla@hotmail.com' },
    { name: 'Keanu Leech', academic_registry: '2669d903', document: '723.783.546-73', email: 'brakus.jerrold@hotmail.com' },
    { name: 'Danika Mckinney', academic_registry: '95a950f9', document: '288.308.445-94', email: 'kareem.grimes@hotmail.com' },
    { name: 'Corinne Black', academic_registry: 'a242734a', document: '689.534.665-12', email: 'iking@yahoo.com' },
    { name: 'Daanish Morse', academic_registry: '244c8499', document: '213.253.564-76', email: 'ritchie.nova@marks.org' },
    { name: 'Magdalena Shannon', academic_registry: '5115f022', document: '582.838.365-52', email: 'morar.webster@yahoo.com' },
    { name: 'Maisha Gill', academic_registry: '0d9e27fa', document: '791.314.303-76', email: 'therzog@powlowski.com' },
    { name: 'Clinton Schofield', academic_registry: '1f3736f0', document: '578.186.755-40', email: 'kcasper@gmail.com' },
    { name: 'Hamid Best', academic_registry: '9696660b', document: '382.469.642-83', email: 'lucius73@yahoo.com' },
    { name: 'Arnas Austin', academic_registry: '8c786af4', document: '931.702.516-19', email: 'heathcote.agnes@gmail.com' },
    { name: 'Ashraf Pate', academic_registry: 'f1b3ef14', document: '244.694.124-90', email: 'ezra.berge@yahoo.com' },
    { name: 'Harvey-Lee Dotson', academic_registry: '2b50919a', document: '864.055.043-36', email: 'ressie.mcdermott@feil.com' },
    { name: 'Eryn Ibarra', academic_registry: '16409dac', document: '983.764.132-01', email: 'hhahn@yahoo.com' },
    { name: 'Sol Vaughan', academic_registry: '8ab4ca36', document: '608.037.768-37', email: 'charles38@yahoo.com' },
    { name: 'Jasleen O"Ryan', academic_registry: '714212c9', document: '067.831.089-02', email: 'stroman.kelsie@thompson.net' },
    { name: 'Bailey Duncan', academic_registry: 'ec686f91', document: '589.703.732-92', email: 'conor35@kirlin.com' },
    { name: 'Ptolemy Mackenzie', academic_registry: '49e031bc', document: '443.163.242-50', email: 'wgoodwin@gmail.com' },
    { name: 'Laurie Mcghee', academic_registry: '668f9187', document: '823.520.419-37', email: 'aubree.hackett@stracke.com' },
    { name: 'Yu Coombes', academic_registry: '2d0fd15c', document: '836.821.531-52', email: 'tomas99@kreiger.org' },
  ]
  return knex(tableNameStudent)
    .del()
    .then(function () {
      return knex(tableNameStudent).insert(students);
    });
};
