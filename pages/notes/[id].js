/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({note}) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.id} </h1>
    </div>
  )
}
export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

  if(!response.ok) {
    res.writeHead(302, {
      Location: '/notes'
    })
    res.end()
    return {
      props: {}
    }
  }

  const { data } = await response.json()
  return {
    props: { note: data }
  }
}