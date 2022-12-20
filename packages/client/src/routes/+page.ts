import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const response = await fetch("http://localhost:3000/api/networks/stats");
  const data = await response.json();
  return {
    title: "Hello world!",
    content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
  };
}) satisfies PageLoad;
