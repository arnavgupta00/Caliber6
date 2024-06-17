import React from 'react'
import { Icon } from '@iconify/react';

interface ContactInfoWidgetProps {
  withIcon?: boolean;
  title?: string;
}

export default function ContactInfoWidget({withIcon, title}: ContactInfoWidgetProps) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +44 454 7800 112
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          caliber6@gmail.com
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          50 Wall Street Suite, 44150 <br/>Ohio, United States
        </li>
      </ul>
    </>
  )
}
