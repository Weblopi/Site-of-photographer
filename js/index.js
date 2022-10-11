function blockButton(event) {
    event.preventDefault()
  }
  
  document.getElementById('btn-block-list').addEventListener(
    'click', blockButton, false
  )
  