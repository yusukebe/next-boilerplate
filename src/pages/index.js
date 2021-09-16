export default function Index({ message }) {
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export const getStaticProps = async () => {
  const message = 'hello!'
  return {
    props: {
      message: message
    },
  }
}
