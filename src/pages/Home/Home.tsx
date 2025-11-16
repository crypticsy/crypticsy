import { Layout } from "../../template";
import { About, Footer, Intro, LeftSocials, NavBar, Publications, RightSocials, Work } from './components';

import './Home.css';

export function Home() {
  return (
    <Layout>
      <NavBar/>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]">
        <LeftSocials/>
        <div>
          <Intro/>
          <About/>
          <Work/>
          <Publications/>
          <Footer/>
        </div>
        <RightSocials/>
      </div>
    </Layout>
  );
}