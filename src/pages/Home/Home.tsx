import { Layout } from "../../template";
import { About, Intro, LeftSocials, NavBar, RightSocials } from './components';

import './Home.css';

export function Home() {

  return (
    <Layout>
      <NavBar />
      <div className="mx-8">
        <LeftSocials />
        <RightSocials />

        <Intro />
        <About />
      </div>
    </Layout>
  );
}