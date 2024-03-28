import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LandingPage = () => {
  return (
    <>
      <header>
        <img src="/images/logo.svg" alt="Huddle Logo" />
      </header>
      <main>
        <section>
          <article>
            <img
              src="/images/illustration-mockups.svg"
              alt="Illustration Mockup"
            />
          </article>
          <article>
            <strong> Build The Community Your Fans Will Love</strong>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
          </article>
        </section>
      </main>
      <footer>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </footer>
    </>
  )
}
export default LandingPage
