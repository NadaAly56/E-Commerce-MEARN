import PropTypes from 'prop-types'

Logo.PropTypes = {
  src : PropTypes.string,
}
export default function Logo({ src = "brand.png" }) {
  return (
    <div>
    <img src={src} alt="logo" width={100} height={120} />
</div>
  )
}
