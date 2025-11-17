import { Layout } from "../../template";
import { About, Contact, Footer, Intro, NavBar, Publications, Work } from './components';
import { PageContentLayout } from '../utils';

import './Home.css';

export function Home() {
  return (
    <Layout>
      <NavBar/>
      <PageContentLayout>
        <Intro/>
        <About/>
        <Work/>
        <Publications/>
        <Contact/>
        <Footer/>
      </PageContentLayout>
    </Layout>
  );
}