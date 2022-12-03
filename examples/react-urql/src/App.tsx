import React from 'react'

import { NhostReactProvider, SignedIn, SignedOut } from '@nhost/react'
import { NhostUrqlProvider } from '@nhost/react-urql'

import { ListPrivatePosts } from './components/ListPrivatePosts'
import { ListPublicPosts } from './components/ListPublicPosts'
import { ListPublicPostsSubscription } from './components/ListPublicPostsSubscription'
import { SignIn } from './components/SignIn'
import { nhost } from './utils/nhost'

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostUrqlProvider nhost={nhost}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
          <div className="mx-auto max-w-3xl">
            <SignedIn>
              <ListPublicPostsSubscription />
              <ListPrivatePosts />
              <div className="pt-12 mt-12 border-t-2">
                <button
                  onClick={() => nhost.auth.signOut()}
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Out
                </button>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="space-y-5">
                <ListPublicPosts />
                <hr />
                <SignIn />
              </div>
            </SignedOut>
          </div>
        </div>
      </NhostUrqlProvider>
    </NhostReactProvider>
  )
}

export default App
