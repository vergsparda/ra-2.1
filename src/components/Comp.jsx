import React from 'react'
import PropTypes from 'prop-types'

function Comp(props) {
 const {user} = props;
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

Comp.propTypes = {

}

export default Comp

