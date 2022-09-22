import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='jokes'>Click me for Jokes!</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
