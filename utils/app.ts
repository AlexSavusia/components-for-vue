export interface IApp {
  name: string
  // author: {
  //   name: string
  //   link: string
  // }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Awesome Starter'
  }
  useState('app', () => app)


  // vue transition bug handle
  const messages = [
    `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
    `NotFoundError: The object can not be found here.`, // safari
  ]
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (ev) => {
      if (messages.includes(ev.message)) {
        ev.preventDefault()
        window.location.reload()
      }
    })
  }

  // return
  return {
    app
  }
}
