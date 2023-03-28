import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {

  return (
    <section className='containerInfo'>
        <h1 className='containerInfo__title'>INFOGALAX</h1>

        <article className='containerInfo__phrase'>
          <p>{quote.phrase}</p>
        </article>

        <Button handleNewQuote={handleNewQuote} />

        <div className='container_planet'>
          <img src="/espacio/Group.png" alt=""/>
        </div>

        <article className='containerInfo__author'>
          <h4>Fuente: {quote.author}</h4>
        </article>

      </section>

  )
}

export default ContainerInfo