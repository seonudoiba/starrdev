import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Starrdev Web agency.png</title>
        <meta name="description" content="Web Agency who Create launchpad for you to take your business into a whole new level" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/StarrdevWebagency.png" />
      </Head>
      <main>
      <section className="hero right">
        <h2>Step Into The Next Generation</h2>
        <img
          src="/undraw_work_together_h63l.svg"
          alt="Step Into The Next Generation"
        />
        <div>
          <p>
            Creating launchpad for you to take your business into a whole new
            level
          </p>
        </div>
        <Link href="/about">Learn More →</Link>
      </section>
      <section className="hero left">
        <hgroup>
          <h2>About us</h2>
          <h3>Who we are</h3>
        </hgroup>
        <img src="/undraw_team_spirit_hrr4.svg" alt="Who we are" />
        <div>
          <p>
            As you can see, we&apos;re a digitial agency. But not just any other
            agency.
          </p>
          <p>
            But not just any other agency. At Starrdev, we&apos;ve gathered
            some of the top marketing minds under one roof. Our purpose? Serving
            the people all around the world.
          </p>
        </div>
        <a href="/about">Learn More →</a>
      </section>
      <section className="skills">
        <div>
          <img src="/undraw_design_sprint_x3eb.svg" alt="Web Design" />
          <h4>Web Design</h4>
          <p>
            We develop distinctive websites that will leave the users with the
            optimal digital.
          </p>
        </div>
        <div>
          <img
            src="/undraw_progressive_app_m9ms.svg"
            alt="Web Development"
          />
          <h4>Web Development</h4>
          <p>
            We develop distinctive websites that will leave the users with the
            optimal digital experience.
          </p>
        </div>
        <div>
          <img src="/undraw_abstract_x68e.svg" alt="Branding" />
          <h4>Branding</h4>
          <p>
            We can assist you to be unique, to be conspicuous, and to be
            prominent.
          </p>
        </div>
        <div>
          <img src="/undraw_fitting_piece_iilo.svg" alt="SEO" />
          <h4>SEO</h4>
          <p>
            We develop distinctive websites that will leave the users with the
            optimal digital.
          </p>
        </div>
        <div>
          <img src="/undraw_process_e90d.svg" alt="UX / UI Design" />
          <h4>UX / UI Design</h4>
          <p>
            We develop distinctive websites that will leave the users with the
            optimal digital.
          </p>
        </div>
        <div>
          <img src="/undraw_noted_pc9f.svg" alt="Content Writing" />
          <h4>Content Writing</h4>
          <p>
            This content can include sales copy, e-books, podcasts, and text for
            graphics.
          </p>
        </div>
      </section>
      <section className="how-we-are">
        <hgroup>
          <h2>How we are</h2>
          <h3>Different</h3>
        </hgroup>
        <div className="description">
          <p>
            We strive to help you to grow your business into what you&apos;ve always
            longed for. To promote your brand and elevate your products right in
            front of your customer&apos;s eye. Our formula to accomplish this is
            pretty simple.
          </p>
        </div>
        <img src="/undraw_master_plan_95wa.svg" alt="Who we are" />
        <div className="counter">
          <div>
            <p>Projects</p>
            <p>236</p>
          </div>
          <div>
            <p>Clients</p>
            <p>2569</p>
          </div>
          <div>
            <p>Country</p>
            <p>017</p>
          </div>
        </div>
      </section>
      <section className="footer reviews">
        <hgroup>
          <h2>We are</h2>
          <h3>Trusted by 100k+</h3>
        </hgroup>
        <div>
          <div className="review">
            <blockquote>
              <p>
                The team was great about jumping into expand the current content
                and rework old and outdated.
              </p>
              <footer>
                <p>
                  Samrat Hossain
                </p>
                <small>Spifffy - CEO</small>
              </footer>
            </blockquote>
          </div>
          <div className="review">
            <blockquote>
              <p>
                The team was great about jumping into expand the current content
                and rework old and outdated.
              </p>
              <footer>
                <p>
                  Samrat Hossain
                </p>
                <small>Spifffy - CEO</small>
              </footer>
            </blockquote>
          </div>
          <div className="review">
            <blockquote>
              <p>
                The team was great about jumping into expand the current content
                and rework old and outdated.
              </p>
              <footer>
                <p>
                  Samrat Hossain
                </p>
                <small>Spifffy - CEO</small>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="footer contact">
        <hgroup>
          <h2>Need Something</h2>
          <h3>Contact Us Anytime</h3>
        </hgroup>
        <form action="#">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email*"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject*"
          />
          <textarea
            name="message"
            id="message"
            cols="q"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input className="link" type="submit" value="Send →" />
        </form>
        <div className="info">
          <p>
            It is very easy to get in touch with us. Just use the contact form or
            pay us a visit for a cofffee at the office. Dynamically innovate
            competitive technology after an.
          </p>
          <p>
            {/* <svg
              enable-background="new 0 0 512.076 512.076"
              version="1.1"
              viewBox="0 0 512.076 512.076"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-1 -1)">
                <path
                  d="m499.64 396.04l-103.65-69.12c-13.153-8.701-30.784-5.838-40.508 6.579l-30.191 38.818c-3.88 5.116-10.933 6.6-16.546 3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453l-3.149-5.743c-3.161-5.612-1.705-12.695 3.413-16.606l38.792-30.182c12.412-9.725 15.279-27.351 6.588-40.508l-69.12-103.65c-8.907-13.398-26.777-17.42-40.566-9.131l-43.341 26.035c-13.618 8.006-23.609 20.972-27.878 36.181-15.607 56.866-3.866 155.01 140.71 299.6 115 115 200.62 145.92 259.46 145.92 13.543 0.058 27.033-1.704 40.107-5.239 15.212-4.264 28.18-14.256 36.181-27.878l26.061-43.315c8.301-13.792 4.281-31.673-9.123-40.585zm-5.581 31.829l-26.001 43.341c-5.745 9.832-15.072 17.061-26.027 20.173-52.497 14.413-144.21 2.475-283.01-136.32s-150.73-230.5-136.32-283.01c3.116-10.968 10.354-20.307 20.198-26.061l43.341-26.001c5.983-3.6 13.739-1.855 17.604 3.959l37.547 56.371 31.514 47.266c3.774 5.707 2.534 13.356-2.85 17.579l-38.801 30.182c-11.808 9.029-15.18 25.366-7.91 38.332l3.081 5.598c10.906 20.002 24.465 44.885 73.967 94.379 49.502 49.493 74.377 63.053 94.37 73.958l5.606 3.089c12.965 7.269 29.303 3.898 38.332-7.91l30.182-38.801c4.224-5.381 11.87-6.62 17.579-2.85l103.64 69.12c5.818 3.862 7.563 11.622 3.958 17.604z"
                />
                <path
                  d="m291.16 86.39c80.081 0.089 144.98 64.986 145.07 145.07 0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533c-0.099-89.503-72.63-162.04-162.13-162.13-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
                />
                <path
                  d="m291.16 137.59c51.816 0.061 93.806 42.051 93.867 93.867 0 4.713 3.821 8.533 8.533 8.533 4.713 0 8.533-3.82 8.533-8.533-0.071-61.238-49.696-110.86-110.93-110.93-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
                />
                <path
                  d="m291.16 188.79c23.552 0.028 42.638 19.114 42.667 42.667 0 4.713 3.821 8.533 8.533 8.533s8.533-3.82 8.533-8.533c-0.038-32.974-26.759-59.696-59.733-59.733-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
                />
              </g>
            </svg> */}
            <span>+234(811)680 9425</span>
          </p>
          <p>
            {/* <svg
              enable-background="new 0 0 511.974 511.974"
              version="1.1"
              viewBox="0 0 511.974 511.974"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m511.87 195.72c-0.053-0.588-0.17-1.169-0.35-1.732-0.117-0.503-0.28-0.994-0.486-1.468-0.239-0.463-0.525-0.901-0.853-1.306-0.329-0.481-0.71-0.924-1.135-1.323-0.137-0.119-0.196-0.282-0.341-0.401l-82.065-63.735v-66.056c0-14.138-11.462-25.6-25.6-25.6h-92.476l-37.027-28.749c-9.147-7.134-21.974-7.134-31.121 0l-37.035 28.749h-92.476c-14.138 0-25.6 11.461-25.6 25.6v66.057l-82.039 63.735c-0.145 0.12-0.205 0.282-0.341 0.401-0.425 0.398-0.806 0.842-1.135 1.323-0.328 0.405-0.614 0.842-0.853 1.306-0.207 0.473-0.369 0.965-0.486 1.468-0.178 0.555-0.295 1.127-0.35 1.707 0 0.179-0.102 0.333-0.102 0.512v290.16c0.012 5.428 1.768 10.708 5.009 15.061 0.051 0.077 0.06 0.171 0.119 0.239 0.06 0.068 0.188 0.145 0.273 0.239 4.794 6.308 12.25 10.027 20.173 10.061h460.8c7.954-0.024 15.441-3.761 20.241-10.103 0.068-0.085 0.171-0.111 0.23-0.196 0.06-0.085 0.068-0.162 0.12-0.239 3.241-4.354 4.997-9.634 5.009-15.061v-290.13c-1e-3 -0.179-0.094-0.333-0.103-0.512zm-261.02-176.9c2.98-2.368 7.2-2.368 10.18 0l19.686 15.283h-49.493l19.627-15.283zm-223.13 476.08l223.13-173.32c2.982-2.364 7.199-2.364 10.18 0l223.19 173.32h-456.5zm467.18-13.304l-223.37-173.48c-9.149-7.128-21.972-7.128-31.121 0l-223.38 173.48v-272.37l139.84 108.59c3.726 2.889 9.088 2.211 11.977-1.515s2.211-9.088-1.515-11.977l-142.06-110.31 60.032-46.652v65.937c0 4.713 3.821 8.533 8.533 8.533 4.713 0 8.533-3.821 8.533-8.533v-153.6c0-4.713 3.82-8.533 8.533-8.533h290.13c4.713 0 8.533 3.82 8.533 8.533v153.6c0 4.713 3.82 8.533 8.533 8.533s8.533-3.821 8.533-8.533v-65.937l60.032 46.652-142.31 110.51c-2.448 1.855-3.711 4.883-3.305 7.928s2.417 5.637 5.266 6.786 6.096 0.679 8.501-1.232l140.08-108.77v272.37z"
              />
              <path
                d="m358.37 204.77v-34.133c0-56.554-45.846-102.4-102.4-102.4s-102.4 45.846-102.4 102.4 45.846 102.4 102.4 102.4c4.713 0 8.533-3.82 8.533-8.533s-3.82-8.533-8.533-8.533c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333 85.333 38.205 85.333 85.333v34.133c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067v-34.133c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533c0 18.851-15.282 34.133-34.133 34.133s-34.133-15.282-34.133-34.133 15.282-34.133 34.133-34.133c4.713 0 8.533-3.82 8.533-8.533s-3.82-8.533-8.533-8.533c-22.915-0.051-43.074 15.13-49.354 37.168s2.847 45.565 22.347 57.601 44.622 9.65 61.507-5.843c1.858 18.046 17.543 31.464 35.659 30.505 18.117-0.96 32.298-15.958 32.241-34.1z"
              />
            </svg> */}
            <span>abiodunigbehinadun17@gmail.com</span>
          </p>
          <p>
            {/* <?xml version="1.0" encoding="UTF-8"?> */}
            {/* <svg
              enable-background="new 0 0 511.751 511.751"
              version="1.1"
              viewBox="0 0 511.751 511.751"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m426.53 281.35c-4.713 0-8.533 3.82-8.533 8.533v196.27c0 4.713-3.821 8.533-8.533 8.533h-85.333v-128c0-14.138-11.462-25.6-25.6-25.6h-85.333c-14.138 0-25.6 11.461-25.6 25.6v128h-85.333c-4.713 0-8.533-3.82-8.533-8.533v-196.27c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v196.27c0 14.138 11.461 25.6 25.6 25.6h307.2c14.138 0 25.6-11.461 25.6-25.6v-196.27c-2e-3 -4.713-3.823-8.533-8.536-8.533zm-119.47 213.33h-102.4v-128c0-4.713 3.82-8.533 8.533-8.533h85.333c4.713 0 8.533 3.82 8.533 8.533v128z"
              />
              <path
                d="m480.32 219.82l-206.27-212.34c-10.071-9.976-26.298-9.976-36.369 0l-206.24 212.34c-7.395 7.623-9.491 18.94-5.316 28.706 3.875 9.556 13.172 15.796 23.484 15.761h2.918c6.103-0.059 11.98-2.316 16.555-6.357 0.609-0.397 1.18-0.848 1.707-1.348l185.08-190.65 185.22 190.75c0.494 0.469 1.028 0.894 1.596 1.271 4.572 4.025 10.438 6.272 16.529 6.332h2.918c10.321 0.045 19.631-6.196 23.509-15.761 4.175-9.766 2.079-21.083-5.316-28.706zm-10.402 22.067c-1.268 3.198-4.35 5.308-7.791 5.333h-2.918c-2.258 1e-3 -4.417-0.925-5.973-2.56-0.06-0.068-0.154-0.085-0.213-0.145-0.06-0.06-0.119-0.154-0.196-0.213l-190.84-196.56-0.102-0.068-0.043-0.128c-0.411-0.328-0.854-0.614-1.323-0.853-0.442-0.353-0.92-0.659-1.425-0.913-0.524-0.169-1.065-0.284-1.613-0.341-1.025-0.375-2.15-0.375-3.174 0-0.548 0.058-1.088 0.172-1.613 0.341-0.505 0.255-0.983 0.561-1.425 0.913-0.469 0.239-0.912 0.525-1.323 0.853l-0.068 0.102-0.102 0.068-190.88 196.59c-0.077 0.06-0.111 0.145-0.188 0.205s-0.162 0.085-0.222 0.154c-1.557 1.635-3.716 2.561-5.973 2.56h-2.901c-3.441-0.025-6.522-2.135-7.791-5.333-1.515-3.451-0.79-7.476 1.835-10.18h-0.018l206.26-212.33c1.573-1.585 3.714-2.477 5.948-2.477 2.233 0 4.374 0.892 5.948 2.477l206.29 212.33c2.625 2.705 3.35 6.729 1.835 10.18z"
              />
              <path
                d="m290 298.42c14.138 0 25.6-11.462 25.6-25.6v-59.733c0-14.139-11.462-25.6-25.6-25.6h-68.267c-14.138 0-25.6 11.461-25.6 25.6v59.733c0 14.138 11.461 25.6 25.6 25.6h68.267zm-76.8-25.6v-59.733c0-4.713 3.82-8.533 8.533-8.533h68.267c4.713 0 8.533 3.821 8.533 8.533v59.733c0 4.713-3.821 8.533-8.533 8.533h-68.267c-4.713 0-8.533-3.821-8.533-8.533z"
              />
              <path
                d="m230.26 417.88h-8.533c-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533h8.533c4.713 0 8.533-3.82 8.533-8.533s-3.821-8.533-8.533-8.533z"
              />
            </svg> */}
            <span>110 W 3rd St Clifton, New Jersey, USA</span>
          </p>
        </div>
      </section>
    </main>
    </>
  )
}
