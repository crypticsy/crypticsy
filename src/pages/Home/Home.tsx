import { Layout } from "../../template";
import { Intro, LeftSocials, RightSocials } from './components';

import './Home.css';

export function Home() {

  return (
    <Layout>
      <LeftSocials />
      <RightSocials />

      <Intro />

    </Layout>
  );
}