import React from 'react'
import { Tag } from './Tag'

export default {
  title: 'Tag',
  component: Tag,
}

export const Primary = () => <Tag roundedStyle="light">Välj 1 av 3</Tag>
export const Secondary = () => <Tag roundedStyle="heavy">Obligatorisk</Tag>