import { Layout } from "../../template";
import { About, Intro, LeftSocials, NavBar, RightSocials } from './components';

import './Home.css';

export function Home() {

  return (
    <Layout>
      <NavBar />
      <LeftSocials />
      <RightSocials />

      <Intro />
      <About />

    </Layout>
  );
}