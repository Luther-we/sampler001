import React, { useEffect } from 'react'

const groupTitleConst = {
  marginTitle: 3
}

export const GroupTitle = ({ groupProps: {title}}) => {

  useEffect(() => {
    defineDecorationTitleSize()
  }, [])


  const defineDecorationTitleSize = () => {

    const containersWidthList = document.getElementsByClassName('container-de-titre-de-groupe')
    const tiltesWidthList = document.getElementsByClassName('titre-de-groupe')

    console.log('ii', containersWidthList)


    Array.prototype.forEach.call(containersWidthList, (item, index) => {
      const containerWidth = item.offsetWidth
      const titleWidth = tiltesWidthList[index].offsetWidth
      let targetWidth = containerWidth - titleWidth
      targetWidth = targetWidth/2 - targetWidth*groupTitleConst.marginTitle/100

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
