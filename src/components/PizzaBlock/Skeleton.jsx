import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="276" rx="9" ry="9" width="280" height="28" /> 
    <rect x="-1" y="459" rx="9" ry="9" width="95" height="30" /> 
    <rect x="131" y="451" rx="24" ry="24" width="152" height="45" /> 
    <rect x="0" y="323" rx="9" ry="9" width="280" height="91" />
  </ContentLoader>
)

export default Skeleton

