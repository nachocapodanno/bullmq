import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

// Setup
const QUEUE_NAME = 'pokedex';
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonOrderByName = (pokemonName) =>
  fetch(`${POKEMON_URL}${pokemonName}`)
    .then((res) => res.json())
    .then(({ order }) => order);

// Queue & Worker
const connection = new IORedis();
const todoQueue = new Queue(QUEUE_NAME, { connection });
const worker = new Worker(
  QUEUE_NAME,
  async (job) => {
    const { name } = job.data;
    const order = await getPokemonOrderByName(name);
    console.log(`${name} is in position no. ${order}.`);
  },
  { connection, concurrency: 10 }
);

// Jobs
await todoQueue.add('select pokemon', { name: 'pikachu' });
await todoQueue.add('select pokemon', { name: 'charmander' });
await todoQueue.add('select pokemon', { name: 'bulbasaur' });
await todoQueue.add('select pokemon', { name: 'squirtle' });
await todoQueue.add('select pokemon', { name: 'psyduck' });
await todoQueue.add('select pokemon', { name: 'raichu' });
await todoQueue.add('select pokemon', { name: 'squirtle' });
await todoQueue.add('select pokemon', { name: 'snorlax' });
await todoQueue.add('select pokemon', { name: 'slowpoke' });
await todoQueue.add('select pokemon', { name: 'gastly' });

// Worker events
worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
