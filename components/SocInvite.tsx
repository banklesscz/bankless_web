import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocInvite = () => {
  return (
    <ul className="social-icon md-size justify-content-center">
      {/* <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li> */}
      {/* <li><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li> */}
      <li>
        <a href="https://twitter.com/gweicz" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li>
        <a href="https://discord.gg/CYUDRVRt" target="_blank">
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </a>
      </li>
    </ul>
  )
}

export default SocInvite