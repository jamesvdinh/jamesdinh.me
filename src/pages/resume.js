import React, { useEffect } from "react"

const ResumePage = () => {
  useEffect(() => {
    window.location.href = "/Resume.pdf"
  }, [])

  return (
    <div>
      Redirecting to résumé...
      <noscript>
        <a href="/Resume.pdf">Click here to view the résumé.</a>
      </noscript>
    </div>
  )
}

export default ResumePage
