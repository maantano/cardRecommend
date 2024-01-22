import React, { useState } from "react";
import "./rank.css";
const RankTest = () => {
  const [activeSection, setActiveSection] = useState("first");
  // const handleSectionClick = (sectionId) => {
  //   setActiveSection(sectionId);
  // };

  // const sections = ["first", "second", "third", "fourth", "fifth"];

  // const getSectionIndex = (sectionId) => sections.indexOf(sectionId);

  // const getSectionStyle = (sectionId) => {
  //   const currentIndex = getSectionIndex(sectionId);
  //   const activeIndex = getSectionIndex(activeSection);

  //   let transformValue = "translate3d(100%, 0px, 0px)";

  //   console.log("Current Index:", currentIndex);
  //   console.log("Active Index:", activeIndex);

  //   if (currentIndex === activeIndex) {
  //     transformValue = "translate3d(0%, 0px, 0px)";
  //   } else if (currentIndex < activeIndex) {
  //     transformValue = "translate3d(100%, 0px, 0px)";
  //   }

  //   return {
  //     transform: transformValue,
  //     opacity: activeSection === sectionId ? 1 : 0,
  //   };
  // };
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sections = ["first", "second", "third", "fourth", "fifth"];

  const getSectionIndex = (sectionId) => sections.indexOf(sectionId);

  const getSectionStyle = (sectionId) => {
    const currentIndex = getSectionIndex(sectionId);
    const activeIndex = getSectionIndex(activeSection);
    // const matches = sectionId.match(/\d+/); // 정규식을 사용하여 sectionId에서 숫자 추출
    // const currentIndex = matches ? parseInt(matches[0]) : 0; // 숫자를 파싱하고 찾지 못하면 0으로 기본값 설정

    // // 수정: activeSection에서 숫자를 추출하여 사용
    // const activeMatches = activeSection.match(/\d+/);
    // const activeIndex = activeMatches ? parseInt(activeMatches[0]) : 0;

    let transformValue = "translate3d(100%, 0px, 0px)";
    let transOpacity = 0;
    console.log("currentIndex =====>", currentIndex);
    console.log("activeIndex =====>", activeIndex);
    // console.log("matches =====>", matches);

    if (currentIndex === activeIndex) {
      // transformValue = "translate3d(0%, 0px, 0px)";
      transOpacity = 0;
    } else if (currentIndex < activeIndex) {
      // transformValue = "translate3d(100%, 0px, 0px)";
      transOpacity = 1;
    }

    return {
      transform: transformValue,
      // opacity: activeSection === sectionId ? 1 : 0,
      opacity: transOpacity,
    };
  };

  return (
    <>
      <main className="mainComponent">
        <section className="home sectionComponent">
          <div className="container">
            <div className="top">
              <div className="animation left"></div>
              <div className="animation right"></div>
            </div>
            <div className="details">
              <p>
                / Event / Retail / Entertainment
                <br />
                / Scenography / Set Design
                <br />/ Technical Production
              </p>
              <p>
                Paris, France
                <br />
                <br />© 2020
              </p>
            </div>
          </div>
        </section>

        <section
          id="first"
          className={`sectionComponent ${
            activeSection === "first" ? "active" : ""
          }`}
          style={getSectionStyle("first")}
          onClick={() => handleSectionClick("first")}
        >
          <header className="section-header">
            <span className="number">01</span>
            <span className="title">Manifesto</span>
          </header>
          <div className="container">
            <div className="animation"></div>
            <div className="content">
              <div className="introduction">
                <p>
                  Adapting and changing constantly, imagining the possibilities
                  of tomorrow, pushing the boundaries and dismantling the status
                  quo. Thinking outside the box, overcoming every challenge and
                  filling each day with brave, innovative pursuits.
                </p>
              </div>
              <div className="section-body">
                <div className="static-image-container"></div>
                <div className="section-body-copy">
                  <p>
                    G!theimagineers is a hybrid production studio combining
                    creativity, agility and courage. Spanning architecture,
                    scenography, lighting, imagery, sound and all aspects of
                    technology which make up the performing arts.
                  </p>
                  <p>
                    We have proven artistic expertise throughout the industry
                    including events, performance, entertainment, clubbing,
                    festivals, live shows and retail.
                  </p>
                  <p>
                    Our roots in Paris - a beating heart of global activity, our
                    pragmatism and the wealth of our environment have all shaped
                    a collective consciousness that is distinct, divergent, and
                    which instills confidence in our process. By tapping into
                    such a diverse range of subject areas, we are able to
                    reflect deeply and thoroughly on every project.
                  </p>
                  <p>
                    This paradigm is strengthened by our dynamic, hypersensitive
                    approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="second"
          className={`sectionComponent ${
            activeSection === "second" ? "active" : ""
          }`}
          style={getSectionStyle("second")}
          onClick={() => handleSectionClick("second")}
          // style={{ transform: "translate3d(100%, 0px, 0px)", opacity: 1 }}
        >
          <header className="section-header">
            <span className="number">02</span>
            <span className="title">Vision</span>
          </header>
          <div className="container">
            <div className="animation"></div>
            <div className="content">
              <div className="introduction">
                <p>
                  Imagining endlessly | Doing, we are creators, disrupters, and
                  ideators. As Imagineers, we unearth the very best in the cells
                  and chromosomes that make up our DNA. Scientific,
                  technological and human innovation, exceeding and exploring
                  new possibilities - this is what an average day looks like at
                  G!theimagineers!
                </p>
              </div>
              <div className="section-body">
                <div className="static-image-container"></div>
                <div className="section-body-copy">
                  <p>
                    Unprecedented turbulence has jolted our industry but has
                    left us with a stronger workplace, increased values of
                    respect and with tangible, sincere and valued commitments.
                  </p>
                  <p>
                    At G!theimagineers we are committed to production, both
                    on-site and throughout the professional network. As we
                    continue our journey we are striving towards more
                    sustainable design and engineering, adopting more ethical
                    production methods, total cost transparency and a closer
                    relationship with knowledge. Our aspiration of producing
                    tours, events and shows with a reduced carbon footprint is
                    now becoming a reality. Turning an event into a phygital
                    experience by connecting with both live and virtual
                    audiences - then adding our aesthetic and artistic touch.
                    This is what we do.
                  </p>
                  <p>
                    G!theimagineers is engaged in all of these concepts. We can
                    help you bring your vision to life with our impeccable,
                    airtight project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="third"
          className={`sectionComponent ${
            activeSection === "third" ? "active" : ""
          }`}
          style={getSectionStyle("third")}
          onClick={() => handleSectionClick("third")}
          // style={{ transform: "translate3d(100%, 0px, 0px)", opacity: 1 }}
        >
          <header className="section-header">
            <span className="number">03</span>
            <span className="title">Expertise</span>
          </header>
          <div className="container">
            <div className="animation"></div>
            <div className="content">
              <div className="introduction">
                <p>
                  We are agile, independent partners. We adapt our expertise to
                  every project and any constraint, offering you a bespoke
                  solution.
                </p>
              </div>
              <div className="section-body">
                <div className="point">
                  <div className="point-number">01</div>
                  <div className="point-content">
                    <div className="point-title">
                      Skills
                      <div className="point-toggle">
                        <div className="icon">
                          <div className="line1"></div>
                          <div className="line2"></div>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>Artistic Direction /</li>
                      <li>Creation /</li>
                      <li>Ideas /</li>
                      <li>Architecture /</li>
                      <li>Scenography /</li>
                      <li>Set design /</li>
                      <li>Stage design /</li>
                      <li>Light design /</li>
                      <li>Audio /</li>
                      <li>Image /</li>
                      <li>Stagecraft /</li>
                      <li>Production /</li>
                      <li>Management /</li>
                      <li>User experience /</li>
                    </ul>
                  </div>
                </div>
                <div className="point">
                  <div className="point-number">02</div>
                  <div className="point-content">
                    <div className="point-title">
                      What we cover
                      <div className="point-toggle">
                        <div className="icon">
                          <div className="line1"></div>
                          <div className="line2"></div>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>Events /</li>
                      <li>Live shows /</li>
                      <li>TV /</li>
                      <li>Festivals /</li>
                      <li>Clubbing /</li>
                      <li>Performances /</li>
                      <li>Entertainment /</li>
                      <li>Retail /</li>
                      <li>Hôtels /</li>
                      <li>Restaurants /</li>
                      <li>Event Halls /</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="fourth"
          className={`sectionComponent ${
            activeSection === "fourth" ? "active" : ""
          }`}
          style={getSectionStyle("fourth")}
          onClick={() => handleSectionClick("fourth")}
          // style={{ transform: "translate3d(100%, 0px, 0px)", opacity: 1 }}
        >
          <header className="section-header">
            <span className="number">04</span>
            <span className="title">Experience</span>
          </header>
          <div className="container">
            <div className="animation"></div>
            <div className="content">
              <div className="introduction">
                <p>
                  We combine our collective knowledge, instincts and skills into
                  one; using our own perspectives and specialist logic to solve
                  complex problems.
                </p>
              </div>
              <div className="section-body">
                <div className="static-image-container"></div>
                <div className="section-body-copy">
                  <p>
                    Every encounter, smile and collective emotion has helped to
                    shape our outlook as a company, and these experiences have
                    each played a part in perfecting our craft.
                  </p>
                  <p>
                    More than 25 years dedicated to the artistic and technical
                    industries. We have always been in tune with the corporate,
                    rock and electronic scenes across real, virtual and phygital
                    contexts.
                  </p>
                  <p>
                    Power is nothing without control. We say this because we
                    have been pioneering this space for twenty rewarding years,
                    acquiring a catalogue of multidisciplinary skills along the
                    way.
                  </p>
                  <p>
                    From management to electrics | from pixels to lumens | from
                    decibels to network architecture | from crisis management to
                    motion control | from fundraising to music | from design to
                    virtual set production... This is what we love to do and
                    exactly what makes us unique!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="fifth"
          className={`sectionComponent ${
            activeSection === "fifth" ? "active" : ""
          }`}
          style={getSectionStyle("fifth")}
          onClick={() => handleSectionClick("fifth")}
          // style={{ transform: "translate3d(100%, 0px, 0px)", opacity: 1 }}
        >
          <header className="section-header">
            <span className="number">05</span>
            <span className="title">Contact</span>
          </header>
          <div className="container">
            <div className="animation"></div>
            <div className="content">
              <div className="introduction">
                <p>Contact us</p>
              </div>
              <div className="email">
                <a href="mailto:vincent@gtheimagineers.com">
                  vincent@gtheimagineers.com
                </a>
              </div>
              <div className="links">
                <a href="assets/downloads/GTI_mentions.pdf" download="">
                  Mentions
                </a>
                <a
                  href="https://index.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Credits
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RankTest;
