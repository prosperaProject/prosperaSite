import React from 'react'
import { CustomGraphic } from '../../components/graphic/CustomGraphic'
import { CustomHeader } from '../../components/header/CustomHeader'
import { CustomMenu } from '../../components/menu/CustomMenu'


export const PagesCustom = () => {
  return (
      <div className='body'>
          <CustomMenu/>
          <CustomHeader/>
          <CustomGraphic/>
      </div>
      
  )
}
