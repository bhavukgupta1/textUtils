import React from 'react'

export default function Alert(props) {
  console.log(props);
  return (
    props.alert && <div className='container'>
      <div class={`alert alert-${props.alert.title}  alert-dismissible fade show`} role="alert">
        <strong>{props.alert.title}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}
