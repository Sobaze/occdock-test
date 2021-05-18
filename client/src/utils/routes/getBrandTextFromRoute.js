  
const getBrandText = (routes, path) => {
  for (let i = 0; i < routes.length; i++) {
    if (path === routes[i].path) {
      return routes[i].name
    }
  }
  
  return 'Brand'
}

export default getBrandText
