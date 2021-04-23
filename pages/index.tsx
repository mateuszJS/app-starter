import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LayoutWrapper from '../components/LayoutWrapper'
import { Typo } from '@ui'

// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const DynamicComponent = dynamic(() => import('components/DynamicComponent'), {
  loading: () => <Typo skeleton skeletonWidth="250px" />,
  ssr: false, // to avoid rendering on server side
})

interface Props {
  title: string
}

// const updateLocale = (locale: string) => {
//   const date = new Date()
//   const expireMs = 100 * 365 * 24 * 60 * 60 * 1000 // 100 days
//   date.setTime(date.getTime() + expireMs)
//   document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
//   setLanguage(locale)
// }

const langs = ['en-US', 'pl', 'fr']

const IndexPage = (props: Props) => {
  const { t } = useTranslation('home')

  return (
    <LayoutWrapper>
      <DynamicComponent />
      <Typo>{t('title')}</Typo>
      <Typo>{t('variable-example', { count: 42 })}</Typo>
      <Typo>{t('common:continue')}</Typo>
      {/* <label htmlFor="lang">Language:</label> */}
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      {/* <select name="lang" id="lang" value={lang} onChange={(e) => updateLocale(e.target.value)}>
        {langs.map((loc) => (
          <option value={loc} key={loc}>
            {loc}
          </option>
        ))}
      </select> */}
    </LayoutWrapper>
  )
}

export const getStaticProps = async ({ locale }: { locale?: string }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en-US', ['common', 'home'])),
  },
})

export default IndexPage
