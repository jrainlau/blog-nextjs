'use client'

import React from 'react'
import { initializeCount } from '../lib/features/counter/counterSlice'
import { useDispatch } from 'react-redux'

export default function Buttons({ count }) {
  const dispatch = useDispatch()
  dispatch(initializeCount(count))

  return (
    <></>
  )
}
