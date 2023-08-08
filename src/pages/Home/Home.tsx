import { useNavigate } from "react-router-dom";
import { Layout } from "../../template";
import { About, SocialPlatform, UserEmail } from './components';

import './Home.css';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
        <div className="grid grid-flow-col">
          <UserEmail/>
          <About/>
          <SocialPlatform/>
        </div>
    </Layout>
  );
}