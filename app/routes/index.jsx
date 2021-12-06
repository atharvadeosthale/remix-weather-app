import { useLoaderData, json, Link } from "remix";

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Weather app",
    description: "We fetch weather here!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div>
      <form action="/weather" method="GET">
        City: <input type="text" name="city" />
        <input type="submit" value="Fetch Weather" />
      </form>
    </div>
  );
}
