import { useEffect } from "react"
import MessageScreen, { MessageScreenProps } from "../../components/MessageScreen/MessageScreen"

const Page404 = () => {
  useEffect(() => {
    document.title = "Not found"
  }, [])

  const props: MessageScreenProps = {
    message: "Not found"
  }
  return <MessageScreen {...props} />
}

export default Page404
