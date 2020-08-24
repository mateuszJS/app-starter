import dynamic from 'next/dynamic'
import Nav from '../components/Nav'
import { withTranslation } from '@i18n'
import { WithTranslation } from 'next-i18next'
import { Typo } from '@ui'

// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const DynamicComponent = dynamic(() => import('components/DynamicComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // to avoid rendering on server side
})

const IndexPage = ({ i18n }: WithTranslation) => (
  <>
    <Nav />
    <DynamicComponent />
    <Typo tKey="title" />
    <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}>
      Change locale
    </button>
    <p>{new Date('2020-07-13T10:47:05.541Z').toISOString()}</p>
  </>
)

export default withTranslation('common')(IndexPage)
