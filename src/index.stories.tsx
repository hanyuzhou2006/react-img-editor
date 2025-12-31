import React from 'react'
import ReactImgEditor from './index'

export default {
  title: 'ReactImgEditor',
}

const image1 =
  'https://cvte-dev-public.seewo.com/faq-service-test/4db524ec93324794b983bf7cd78b2ae1'

export const Simple = () => (
  <ReactImgEditor
    src={image1}
    width={736}
    height={414}
    plugins={[]}
    defaultPluginName="text"
    crossOrigin="anonymous"
  />
)

export const GermanTexts = () => (
  <ReactImgEditor
    src={image1}
    width={736}
    height={414}
    plugins={[]}
    defaultPluginName="text"
    crossOrigin="anonymous"
    language="de"
  />
)

export const MulitpleInstances = () => {
  const image1 =
    'https://cvte-dev-public.seewo.com/faq-service-test/4db524ec93324794b983bf7cd78b2ae1'
  const image2 =
    'https://cvte-dev-public.seewo.com/faq-service-test/4db524ec93324794b983bf7cd78b2ae1'

  return (
    <div style={{ display: 'flex' }}>
      <ReactImgEditor
        src={image1}
        width={500}
        height={414}
        plugins={[]}
        defaultPluginName="text"
        crossOrigin="anonymous"
      />
      <div style={{ width: '10px' }}></div>
      <ReactImgEditor
        src={image2}
        width={500}
        height={414}
        plugins={[]}
        defaultPluginName="rect"
        crossOrigin="anonymous"
      />
    </div>
  )
}
