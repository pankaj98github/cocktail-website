import React from 'react'
import Layout from '../components/Layout'

const PageNotFound = () => {
  const logo =
    "https://media.istockphoto.com/vectors/page-not-found-error-404-system-updates-uploading-computing-operation-vector-id1400809601?k=20&m=1400809601&s=612x612&w=0&h=4BU7Wt0Kc6HjoRpTslFoR-gDYw5bk8VcnIPDN7UzMrs=";
  return (
    <>
    <Layout>
      <div className='container text-center'>
        <img src={logo} alt="logo" />
      </div>
    </Layout>
    </>
  )
}

export default PageNotFound
