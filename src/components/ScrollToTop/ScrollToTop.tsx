import React from "react"
import { Fragment, useEffect } from "react"
import { useLocation, RoutesProps } from "react-router-dom"

const ScrollToTop = (props: RoutesProps) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <Fragment>{props.children}</Fragment>
}

export default ScrollToTop