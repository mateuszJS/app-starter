import dynamic from 'next/dynamic'
import LayoutWrapper from '../components/LayoutWrapper'
import { withTranslation } from '@i18n'
import { WithTranslation } from 'next-i18next'
import { Typo, Button } from '@ui'

// import useSWR from 'swr'
// https://swr.vercel.app/
// const { data, error } = useSWR('/api/user', fetch)

const DynamicComponent = dynamic(() => import('components/DynamicComponent'), {
  loading: () => <Typo skeleton skeletonWidth="250px" />,
  ssr: false, // to avoid rendering on server side
})

const IndexPage = ({ i18n }: WithTranslation) => (
  <LayoutWrapper>
    <DynamicComponent />
    <Typo tKey="title" />
    <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}>
      Change locale
    </Button>
  </LayoutWrapper>
)

export default withTranslation('common')(IndexPage)
