import React from 'react'
import axios from 'axios'

export default () => {

  const [image, setImage] = React.useState(null)

  const getNewImage = async (event) => {
    const target = event.target
    target.disabled = true
    await axios.get('https://picsum.photos/800')
      .then(res => setImage(res.request.responseURL))
      .finally(() => target.disabled = false)
  }

  return(
    <div className="mw7 center">
      <button 
        onClick={getNewImage}
        className="br2 bn bg-black white outline-0">
        New art
      </button>
      <br />
      <img src={image || "https://picsum.photos/800"} alt="Art" className="w-100 mv2" />
    </div>
  )
}
