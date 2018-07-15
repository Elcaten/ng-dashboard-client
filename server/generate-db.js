var faker = require('faker');

generateEntityArray = (entityGenerator) => {
  const entities = [];
  for (let i = 0; i < faker.random.number({ min: 10, max: 15 }); i++) {
    entities.push(entityGenerator(i));
  }
  return entities;
}

generateHost = (id) =>
  ({
    id,
    name: faker.internet.ip(),
    status: faker.random.boolean() ? 'online' : 'offline',
    cpu: faker.random.number({ min: 0, max: 100 }),
    disk: faker.random.number({ min: 0, max: 100 }),
    ram: faker.random.number({ min: 0, max: 100 }),
  });

generateProcess = (id) => ({
  id,
  name: faker.system.commonFileName('exe', ''),
  status: faker.random.boolean(),
  hasError: faker.random.boolean(),
  lastStartDate: dxCompatRandomDateString(),
  lastErrorDate: dxCompatRandomDateString(),
  lastErrorText: faker.random.boolean() ? faker.hacker.phrase() : ''
});

generateService = (id) => ({
  id,
  name: `${faker.hacker.verb()}_${faker.hacker.noun()}`,
  status: faker.random.arrayElement(['starting', 'running', 'stopping', 'stopped']),
  releaseVersion: faker.system.semver(),
  tags: faker.random.words().split(' ')
});

dxCompatRandomDateString = () => {
  const d = faker.date.recent(10);
  var datestring = d.getFullYear() + "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
    ("0" + d.getDate()).slice(-2) +
    "T" +
    ("0" + d.getHours()).slice(-2) + ":" +
    ("0" + d.getMinutes()).slice(-2);
  return datestring;
}

module.exports = () => ({
  hosts: generateEntityArray(generateHost),
  processes: generateEntityArray(generateProcess),
  services: generateEntityArray(generateService)
});
