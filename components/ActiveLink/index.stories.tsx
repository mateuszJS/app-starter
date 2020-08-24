import React from 'react'
import ActiveLink from '.'
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'ActiveLink',
  component: ActiveLink,
  decorators: [withNextRouter],
}

export const ActiveLinkStory = () => {
  return (
    <>
      <ActiveLink activeClassName="active" href="/active">
        <a className="nav-link">Active path</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/non-active">
        <a className="nav-link">Non active path</a>
      </ActiveLink>
      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </>
  )
}

ActiveLinkStory.story = {
  parameters: {
    nextRouter: {
      path: '/active',
      asPath: '/active',
    },
  },
}
