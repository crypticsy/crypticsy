import { Layout } from "../../template";
import { About, Footer, Intro, LeftSocials, NavBar, Publications, RightSocials, Work } from './components';

import './Home.css';

export function Home() {

  return (
    <Layout>
      <NavBar/>
      <div className="mx-8">
        <LeftSocials/>
        <RightSocials/>

        <Intro/>
        <About/>
        <Work/>
        <Publications/>

        <Footer/>
      </div>
    </Layout>
  );
}