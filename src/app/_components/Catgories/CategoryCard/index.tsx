'use client'
import React from 'react'

import classes from './index.module.scss'
import { Category, Media } from '../../../../payload/payload-types'
import Link from 'next/link'
import { useFilter } from '../../../_providers/Filter'
import { useContext } from 'react'
import { FilterContext } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media
  const { setCategoryFilters } = useContext(FilterContext)

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
