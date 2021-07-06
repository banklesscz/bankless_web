import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/globals.scss'

import {
  faAngleUp,
  faBars,
  faGlobe,
  faLink,
  faMoon,
  faSearch,
  faSun,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faReddit,
  faTwitter,
  fab,
} from '@fortawesome/free-brands-svg-icons'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import BackToTop from 'components/Layout/BackToTop'
import Cookies from 'components/Layout/Cookies'
import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import { SessionContextProvider } from 'context/SessionContext'
import SimpleReactLightbox from 'simple-react-lightbox'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'

library.add(
  faSearch,
  faBars,
  faLink,
  faAngleUp,
  faGlobe,
  fab,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
  faReddit,
  faTimes,
  faMoon,
  faSun,
)

export interface ICryptoPrices {
  btcPrice: number
  ethPrice: number
  dotPrice: number
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isCookiesEnabled, setIsCookiesEnabled] = useState(false)
  return (
    <SessionContextProvider>
      <SimpleReactLightbox>
        <div id="mobile-menu-show">
          <Header />
          <Component {...pageProps} isCoockiesEnabled={isCookiesEnabled}/>
          <Footer />
          <Cookies setIsCookiesEnabled={setIsCookiesEnabled} IsCookiesEnabled={isCookiesEnabled}/>
          <BackToTop />
        </div>
      </SimpleReactLightbox>
    </SessionContextProvider>
  )
}

export default MyApp
