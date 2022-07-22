import PlausibleProvider from 'next-plausible';
import { site } from '../../../site';

type PlausibleProps = Parameters<typeof PlausibleProvider>[0]
type Plausible = (props: Omit<PlausibleProps, "domain">) => JSX.Element

export const Plausible: Plausible = (props) => {

  if (site.services.plausible === false) {
    return <>{props.children}</>
  }

  return (
    <PlausibleProvider {...props} domain={site.domain} />
  )
}