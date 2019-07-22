import React, { useEffect } from 'react'

export const GroupTitle = ({ groupProps: {title}}) => {
  // console.log(props)

  useEffect(() => {
    // defineLayoutSize()
    defineDecorationTitleSize()
  }, [])


  const defineDecorationTitleSize = () => {

    const containersWidthList = document.getElementsByClassName('container-de-titre-de-groupe')
    const tiltesWidthList = document.getElementsByClassName('titre-de-groupe')

    console.log('ii', containersWidthList)


    Array.prototype.forEach.call(containersWidthList, (item, index) => {
      const containerWidth = item.offsetWidth
      const tilteWidth = tiltesWidthList[index].offsetWidth
      let targetWidth = containerWidth - tilteWidth
      targetWidth = targetWidth/2

      const target = document.getElementsByClassName('avant-titre')[index]
      const target2 = document.getElementsByClassName('après-titre')[index]
      target.style.width = `${targetWidth}px`
      target2.style.width = `${targetWidth}px`
    })
  }


  return (
    <div className="container-de-titre-de-groupe">
      <div className="avant-titre"/>
      <h2 className='titre-de-groupe'>
        {title}
      </h2>
      <div className="après-titre"/>
    </div>
  )
}
