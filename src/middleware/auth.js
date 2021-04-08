import routes from '@/pages/index'

export default function({ store, route, redirect }) {
  // If route does not exist
  const currentRoute = routes.filter((r) => r.name === route.name)
  if (currentRoute.length <= 0) {
    return redirect('/')
  }
  // If the user is not authenticated
  if (currentRoute[0].authAccess !== 'free') {
    if (!store.state.authenticated) {
      return redirect('/login')
    }
    // if it's not staged on session
    // const stage = store.state.stages.filter(
    //   (s) => s.path === currentRoute[0].path
    // )
    // if (stage.length && !stage[0].isAvailable) {
    //   return redirect('/main')
    // }
  }
}
