import React from 'react'
import { useRouter } from 'next/router'
import { keyGen } from '../utils/keyGen'

const Page = () => {
    const router = useRouter()

    const { params } = router.query

    return (
        <div>
            {params ? params.map(el => <h1 key={keyGen()}>Note: {el}</h1>) : null}
        </div>
    )
}
export default Page;