// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react'

import DiscussionsListing from '../../../components/Listings/DiscussionsListing'
import { useLatestDiscussionPostsQuery } from '../../../generated/graphql'
import FilteredError from '../../../ui-components/FilteredError'
import Loader from '../../../ui-components/Loader'

interface Props {
  className?: string
}

const DiscussionContainer = ({ className }: Props) => {
  const { data, error, refetch } = useLatestDiscussionPostsQuery({
    variables: { limit: 5 }
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  if (error?.message) return <FilteredError text={error.message} />

  if (data) return <DiscussionsListing className={className} data={data} />

  return <Loader />
}

export default DiscussionContainer
