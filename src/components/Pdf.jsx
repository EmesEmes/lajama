/* eslint-disable react/prop-types */

const Pdf = ({ description, source }) => {
  return (
    <a href={`/docs/${source}.pdf`} target="_blank" className="flex flex-col items-center gap-4 mb-10">
      <img  src="/images/icons/pdf.png" alt="pgf icon" className="w-10"/>
      <p>{ description }</p>
    </a>
  )
}

export default Pdf