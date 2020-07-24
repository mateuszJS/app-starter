import dynamic from 'next/dynamic'
import Nav from '../components/Nav'
import * as i18n from '../i18n'
import { Typo } from '@ui'

// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const DynamicComponent = dynamic(() => import('components/DynamicComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // to avoid rendering on server side
})

const IndexPage = ({ t }) => (
  <>
    <Nav />
    <DynamicComponent />
    <div>{t('title')}</div>
    <button onClick={() => i18n.i18n.changeLanguage(i18n.i18n.language === 'en' ? 'pl' : 'en')}>
      Change locale
    </button>
    <Typo tKey="Hello, I'm the index page" />
    <p>{new Date('2020-07-13T10:47:05.541Z').toISOString()}</p>
  </>
)

export default i18n.withTranslation('common')(IndexPage)
