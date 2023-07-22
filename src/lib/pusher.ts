import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: '1638079',
  key: '1c0c2395bdcc2ef28303',
  secret: 'b68f2682c33907fa2257',
  cluster: 'eu',
  useTLS: true,
})

export const pusherClient = new PusherClient(
 '1c0c2395bdcc2ef28303',
  {
    cluster: 'eu',
  }
)