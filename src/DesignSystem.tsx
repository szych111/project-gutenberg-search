import { FC } from "react";

import "./DesignSystem.css";

export const DesignSystem: FC = () => {
  return (
    <div className="container">
      <h1 className="text-white uppercase">Design System</h1>
      <section id="colors">
        <h2 className="numbered-title">
          <span>01 </span>Colors
        </h2>
        <div className="flex">
          <div className="flex-basis-100">
            <div className="color-box">#012626</div>
            <p>
              <span className="text-accent">RGB</span> 1, 38, 38
            </p>
          </div>
          <div className="flex-basis-100">
            <div className="bg-accent text-dark color-box">#04BFAD</div>
            <p>
              <span className="text-accent">RGB</span> 4, 191, 173
            </p>
          </div>
          <div className="flex-basis-100">
            <div className="bg-white text-dark color-box">#F2F2F2</div>
            <p>
              <span className="text-accent">RGB</span> 252, 252, 252
            </p>
          </div>
        </div>
      </section>
      <section id="typography" className="flow typography">
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div className="flow flex-basis-100">
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Poe</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Dumas</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Balzac</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Vanity Fair
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 ff-sans-cond letter-spacing-2 uppercase">
                Search by author
              </p>
            </div>
          </div>

          <div className="flow flex-basis-100">
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="ff-serif fs-500 uppercase">Lorem Ipsum</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="ff-sans-cond fs-300 letter-spacing-3 uppercase">
                Lorem ipsum
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="ff-sans-cond fs-400 letter-spacing-2 uppercase">
                Authors search
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p className="ff-sans-normal fs-200">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flow" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        {/* <!-- navigation --> */}
        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex ff-sans-cond">
              <li className="active">
                <a className="uppercase text-white letter-spacing-2" href="https://fonts.google.com/">
                  <span>00</span>Active
                </a>
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="https://fonts.google.com/">
                <span>01</span>Hovered
                </a>
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="https://fonts.google.com/">
                <span>02</span>Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <div>
            {/* explore button */}
            <a
              href="https://fonts.google.com/"
              className="large-button uppercase ff-serif fs-600 text-dark bg-white"
            >
              Explore
            </a>
            <a
              href="https://fonts.google.com/"
              className="large-button uppercase ff-serif fs-600 text-dark bg-accent"
            >
              Explore
            </a>
          </div>

          <div>
            {/* <!-- Tabs --> */}
            <div className="tab-list underline-indicator">
                <button className="uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond ">Moon</button>
                <button className="uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond">Mars</button>
                <button className="uppercase text-accent letter-spacing-2 bg-dark ff-sans-cond">Europa</button>
            </div>
            {/* <!-- Dots --> */}

            {/* <!-- Numbers --> */}
          </div>
        </div>
      </section>
    </div>
  );
};
