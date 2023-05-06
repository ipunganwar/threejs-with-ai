import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers'

function CustomButton({ type, title, customStyles, handleClick }) {
  const snap = useSnapshot(state)

  const generatedStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: getContrastingColor(snap.color),
        color: getContrastingColor(snap.color)
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generatedStyle(type)}
      onClick={handleClick}
      >
      {title}
    </button>
  )
}

export default CustomButton