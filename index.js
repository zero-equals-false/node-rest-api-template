// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare an API route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// API route - "Inventory"
fastify.get('/inventory', async (request, reply) => {
  return {
      hat: 5,
      socks: 5,
      shirt: 25,
      pants: 40
    }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
