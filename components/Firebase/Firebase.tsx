import { FirebaseProvider } from "@bluesky-digital-labs/next-firebase-auth";
import { site } from "../../site";

export const Firebase: typeof FirebaseProvider = (props) => {

  if (site.services.firebase === false) {
    return <>{props.children}</>
  }

  return (
    <FirebaseProvider {...props} />
  )
}