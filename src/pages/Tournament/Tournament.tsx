import './Tournament.sass';

function Tournament() {
  return (
    <div>
      <div className="bracket">

        <section className="round quarterfinals">
          
          <div className="winners">
            <div className="matchups">
              <div className="matchup">
                
                <div className="participants">
                  <div className="participant winner relative">
                    <span>Uno</span>
                    <span className='absolute right-0'>9</span>
                  </div>
                  <div className="participant relative">
                    <span>Ocho</span>
                  
                    <span className='absolute right-0'>3</span>
                  </div>
                </div>
              </div>

              <div className="matchup">
                <div className="participants">
                  <div className="participant"><span>Dos</span></div>
                  <div className="participant winner"><span>Siete</span></div>
                </div>
              </div>
            </div>
            <div className="connector">
              <div className="merger"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="winners">
            <div className="matchups">
              <div className="matchup">
                <div className="participants">
                  <div className="participant"><span>Treis</span></div>
                  <div className="participant winner"><span>Seis</span></div>
                </div>
              </div>
              <div className="matchup">
                <div className="participants">
                  <div className="participant"><span>Cuatro</span></div>
                  <div className="participant winner"><span>Cinco</span></div>
                </div>
              </div>
            </div>
            <div className="connector">
              <div className="merger"></div>
              <div className="line"></div>
            </div>
          </div>
        </section>

        <section className="round semifinals">
          <div className="winners">
            <div className="matchups">
              <div className="matchup">
                <div className="participants">
                  <div className="participant"><span>Uno</span></div>
                  <div className="participant"><span>Dos</span></div>
                </div>
              </div>
              <div className="matchup">
                <div className="participants">
                  <div className="participant winner"><span>Seis</span></div>
                  <div className="participant"><span>Cinco</span></div>
                </div>
              </div>
            </div>
            <div className="connector">
              <div className="merger"></div>
              <div className="line"></div>
            </div>
          </div>
        </section>

        <section className="round finals">
          <div className="winners">
            <div className="matchups">
              <div className="matchup">
                <div className="participants">
                  <div className="participant empty"><span>???</span></div>
                  <div className="participant"><span>Seis</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Tournament;
