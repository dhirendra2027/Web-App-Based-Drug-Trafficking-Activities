import React from 'react'

function LatestNews({news}) {
  return (
    <div className="w-[90vw] h-[30vh] relative bg-[#313131] hover:bg-[#252525] overflow-hidden h-[30vh] border-b-[1px] hover:border-[1px] hover:rounded-xl hover:my-10 border-zinc-500 flex flex-col whitespace-nowrap transition-all duration-300 ease-in hover:h-[60vh]">
              <div onClick className='h-[30vh] w-full flex justify-between items-center shrink-0 gap-16'>

              <div className="flex flex-col h-full p-4 gap-10">
                <h5 className="text-sm">{news.source.name}</h5>
                <h2 className="text-2xl ml-10 w-[100%] text-wrap text-justify">{news.title}</h2>
                <h5 className="absolute bottom-0 text-sm bottom-4">{news.publishedAt}</h5>
              </div>
              <img className="w-1/4 h-[95%] object-cover mr-10 object-top" src={news.urlToImage} alt="" />
              </div>
              <div className='h-[20vh] bg-[#161616] px-24 flex items-center'>
                <h2 className="text-xl w-[100%] text-wrap text-justify">{news.description}</h2>
              </div>
            </div>
  )
}

export default LatestNews