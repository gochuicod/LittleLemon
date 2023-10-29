const Wrapper = ({ margin, classes, children }) => {
  return (
    <div className={margin ? `sm:mx-[25vw] mx-10 ${classes}` : ""}>
      {children}
    </div>
  )
}

export default Wrapper;