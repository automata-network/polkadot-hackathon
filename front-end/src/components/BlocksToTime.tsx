// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import BN from 'bn.js'
import React from 'react'
import { Popup } from 'semantic-ui-react'
import { useBlockTime } from 'src/hooks'
import blockToTime from 'src/util/blockToTime'

interface Props {
  blocks: number | BN
  className?: string
}

const DivContent = styled.div`
  font-size: xs;
  color: ${({ theme }) => theme.colors.black_text};
`

const BlocksToTime = ({ blocks, className }: Props) => {
  const { blocktime } = useBlockTime()

  return (
    <Popup
      className={className}
      trigger={<div>{blockToTime(blocks, blocktime)}</div>}
      content={<DivContent>{`${blocks} blocks`}</DivContent>}
      hoverable={true}
      position="top left"
    />
  )
}

export default BlocksToTime
