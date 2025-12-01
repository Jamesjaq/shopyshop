// API for products
import db from '../../lib/db';
export default async function handler(req, res) {
  await db();
  // Handle product fetching, creation, etc.
}