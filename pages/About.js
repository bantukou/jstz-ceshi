import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  useRouter.push('htts://baidu.com')
}
