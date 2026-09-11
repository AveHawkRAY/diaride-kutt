const knex = require("knex");
const config = require("./knexfile");

async function start() {
  const db = knex(config);

  try {
    await db.migrate.latest();
    console.log("Database migrations completed");
  } finally {
    await db.destroy();
  }

  require("./server/server");
}

start().catch(error => {
  console.error(error);
  process.exit(1);
});
