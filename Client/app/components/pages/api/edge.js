// pages/api/edge.js
export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    return new Response('Hello from the edge!');
  }
  