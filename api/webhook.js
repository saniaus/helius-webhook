export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const body = await req.json()
  console.log("Received webhook:", body)

  // Example: Extract token data
  // const { type, account, amount } = body;

  return new Response('OK', { status: 200 })
}
