export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  const loggedIn = !!store.state.token
  const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
  // const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)

  if (loggedIn && urlRequiresNonAuth) return redirect('/')
  if (!loggedIn) return redirect('/login')
  return Promise.resolve()
}
