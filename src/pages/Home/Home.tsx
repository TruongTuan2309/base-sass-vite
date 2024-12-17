import { CLIENT_ID, SECRET_KEY } from '@/lib/configs/configEnv'
import { createThirdwebClient } from 'thirdweb'
import { useConnect } from 'thirdweb/react'
import { createWallet, injectedProvider } from 'thirdweb/wallets'

const client = createThirdwebClient({ clientId: CLIENT_ID, secretKey: SECRET_KEY })

const Home = () => {
  const { connect } = useConnect()
  return (
    <div>
      <button
        onClick={() =>
          connect(async () => {
            const metamask = createWallet('io.metamask')
            if (injectedProvider('io.metamask')) {
              await metamask.connect({ client })
            } else {
              await metamask.connect({
                client,
                walletConnect: { showQrModal: true }
              })
            }
            return metamask
          })
        }
      >
        Connect
      </button>
    </div>
  )
}

export default Home
