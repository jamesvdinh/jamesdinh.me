import React, { useEffect } from "react"

const ResumePage = () => {
  useEffect(() => {
    window.location.href = "/James Dinh - Resume.pdf"
  }, [])

  return (
    <div>
      Redirecting to résumé...
      <noscript>
        <a href="/James Dinh - Resume.pdf">Click here to view the résumé.</a>
      </noscript>
    </div>
  )
}

export default ResumePage
