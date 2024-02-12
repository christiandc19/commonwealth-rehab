import React from "react";
import { Link as LinkRoll } from "react-scroll";
import "./TherapyMH.css";
import { Link } from "react-router-dom";

import Anxiety from "../../assets/mh-anxiety.webp";
import Depression from "../../assets/mh-depression.webp";
import Bipolar from "../../assets/mh-bipolar.webp";
import Stress from "../../assets/mh-stress.webp";


const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">

            <div className="TherapyMH-header">
                <h1>MENTAL HEALTH TREATMENT</h1>
                <p>Renew Hope, Restore Well-being: Our Comprehensive Mental Health Treatment Programs</p>
              </div>



          

          <div className="mh-flex container">

            <div className="card">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/anxiety">
                  <div className="card-icon">
                    <img src={Anxiety} alt="Anxiety" loading="lazy" />
                  </div>   
                  <h1>ANXIETY</h1>
                  </Link>
              </LinkRoll>
              </div>

            <div className="card">
              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/depression">
                    <div className="card-icon">
                      <img src={Depression} alt="Depression" loading="lazy" />
                    </div>                   
                    <h1>DEPRESSION</h1>
                  </Link>
              </LinkRoll>

              </div>
            </div>


            <div className="card">
              <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/bipolar-disorder">
                <div className="card-icon">
                  <img src={Bipolar} alt="Bipolar" loading="lazy" />
                </div>                 
                <h1>BIPOLAR</h1>
                </Link>
              </LinkRoll>

              </div>
            </div>

            <div className="card">
              <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/acute-stress-disorder">

                <div className="card-icon">
                  <img src={Stress} alt="Stress" loading="lazy" />
                </div>                 
                <h1>STRESS DISORDER</h1>
                </Link>
              </LinkRoll>

              </div>
            </div>
          </div>


          <div className='mh-btn'>
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/mental-health">
                <button>VIEW ALL</button>
              </Link>
          </LinkRoll>
          </div>


        </div>
      </div>
    </>
  );
};

export default TherapyMH;
