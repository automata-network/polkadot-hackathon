// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import React from 'react'
import { Form as SUIForm, FormProps as SUIFormProps } from 'semantic-ui-react'

import Field from './Field'
import Group from './Group'
import Input from './Input'

type FormProps = SUIFormProps & {
  className?: string
  standalone?: boolean
}

Form.Input = Input
Form.Field = Field
Form.Group = Group

export function Form({ className, standalone = true, ...props }: FormProps): React.ReactElement {
  return <StyledForm className={standalone ? `${className} standalone` : className} {...props} />
}

const StyledForm = styled(SUIForm)`
  &.standalone {
    background-color: white;
    padding: 2rem 3rem 3rem 3rem;
    border-radius: 3px;
    box-shadow: box_shadow_card;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  .field {
    label {
      font-weight: 500;
    }
  }

  .text-muted {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.grey_primary};
    margin-bottom: 1.2rem;

    a {
      color: ${({ theme }) => theme.colors.grey_primary};
      cursor: pointer;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.grey_primary};
    }
  }

  .error-text {
    color: red_secondary;
  }

  &.ui.form {
    font-size: ${({ theme }) => theme.fontSizes.sm};

    .field {
      > label {
        font-size: input_text_size;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black_primary};
        margin-bottom: 0.6rem;
      }
    }

    .fields {
      margin-bottom: 1.2rem;

      @media only screen and (max-width: 767px) {
        margin-bottom: 1.25rem;
      }
    }

    input:not([type]),
    input[type='date'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='file'],
    input[type='number'],
    input[type='password'],
    input[type='search'],
    input[type='tel'],
    input[type='text'],
    input[type='time'],
    input[type='url'] {
      font-family: font_default;
      font-size: input_text_size;
      color: ${({ theme }) => theme.colors.black_primary};
      border-style: solid;
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.grey_light};
      border-radius: input_border_radius;
      text-indent: 0rem;
      padding: 1rem;
      margin-bottom: 1.2rem;
      &:focus {
        font-family: font_default;
        font-size: input_text_size;
        color: ${({ theme }) => theme.colors.black_text};
        border-color: ${({ theme }) => theme.colors.grey_primary};
        border-radius: input_border_radius;
      }
      &:hover {
        border-color: ${({ theme }) => theme.colors.grey_secondary};
      }
    }

    input::selection,
    textarea::selection {
      color: ${({ theme }) => theme.colors.black_text};
      background-color: ${({ theme }) => theme.colors.grey_light};
    }

    input[type='checkbox'] {
      position: relative;
      bottom: 0.2rem;
      margin-right: 1rem;
      vertical-align: middle;
    }

    @media only screen and (max-width: 576px) {
      margin-top: 0rem;
      padding: 2rem;
    }
  }

  .ui.toggle.checkbox {
    label {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: 400;
      color: black_text !important;
    }

    input:checked ~ label:before {
      background-color: pink_primary !important;
    }
  }

  .ui.dropdown,
  .ui.selection.dropdown {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 1.2rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.grey_light};
    border-radius: input_border_radius;

    .menu {
      border-color: ${({ theme }) => theme.colors.grey_light};
    }

    .menu .active.item {
      font-weight: 500;
    }

    .menu > .item {
      padding: 1rem !important;
    }

    .menu > .item:hover {
      background-color: ${({ theme }) => theme.colors.grey_light};
    }

    .visible.menu.transition {
      border-radius: input_border_radius;
    }
  }

  .ui.selection.dropdown:focus,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu {
    border-color: ${({ theme }) => theme.colors.grey_light};
  }

  .ui.horizontal.divider {
    color: black_text !important;
    margin: 3rem 0;
    font-weight: 400;
  }
`
