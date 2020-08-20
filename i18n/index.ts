import * as NextI18Next from './NextI18Next'
import { WithTranslation } from 'next-i18next/types'

export const withTranslation = (defaultNs: string, additionalNs: string[] = []) => <
  P extends WithTranslation
>(
  Component: React.ComponentType<P & { i18nNamespaces: string[] }>,
) => {
  Component.defaultProps = {
    i18nNamespaces: [defaultNs, ...additionalNs],
  } as typeof Component['defaultProps']

  return NextI18Next.withTranslation(defaultNs)(Component)
}
