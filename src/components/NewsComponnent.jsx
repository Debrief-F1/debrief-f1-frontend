import ImageComponent from "./ImageComponent"
import Link from "./Link"

const NewsComponnent = (props) => {
  const { article } = props

  return (
    <>
      <div className="bg-black flex rounded-lg justify-between w-11/12 h-24 md:w-[370px] mx-auto">
        <div className="flex justify-between place-items-center w-full">
          <Link href="#">
            <h1 className="text-2 text-red-600 font-bold pl-3">
              {article.title}
            </h1>
          </Link>
          <p className="text-xs text-red-600 pl-3">{article.date}</p>
          <ImageComponent
            style={{ width: 64, height: 64 }}
            src={`/images/logo/${article.name}logo.webp`}
            className="ml-auto mr-4"
          />
        </div>
      </div>
    </>
  )
}
export default NewsComponnent
