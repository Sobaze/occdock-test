import PerfectScrollbar from 'perfect-scrollbar'

const scrollbar = {}
let ps = null
scrollbar.init = (ref) => {
    if (navigator.platform.indexOf('Win') > -1) {
        document.documentElement.className += ' perfect-scrollbar-on'
        document.documentElement.classList.remove('perfect-scrollbar-off')
        ps = new PerfectScrollbar(ref.current, {
            suppressScrollX: true
        })

        const tables = document.querySelectorAll('.table-responsive')
        for (let i = 0; i < tables.length; i++) {
            ps = new PerfectScrollbar(tables[i])
        }
    }
}

scrollbar.update = (ref) => {
  if (navigator.platform.indexOf('Win') > -1) {
    const tables = document.querySelectorAll('.table-responsive')
  
    for (let i = 0; i < tables.length; i++) {
      ps = new PerfectScrollbar(tables[i])
    }
  }

  document.documentElement.scrollTop = 0
  document.scrollingElement.scrollTop = 0

  if (ref.current) ref.current.scrollTop = 0
}

scrollbar.cleanup = () => {
  if (navigator.platform.indexOf('Win') > -1) {
    ps && ps.destroy()
    document.documentElement.classList.add('perfect-scrollbar-off')
    document.documentElement.classList.remove('perfect-scrollbar-on')
  }
}

export default scrollbar
