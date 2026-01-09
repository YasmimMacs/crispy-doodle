export async function jsonHandler(req, res) {
  const buffers = []

    for await (const chunk of req) {
      buffers.push(chunk)
    }

    const raw = Buffer.concat(buffers).toString()

    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString())
    }   catch (err) {
      req.body = null
    }

    res.setHeader('Content-Type', 'application/json')}