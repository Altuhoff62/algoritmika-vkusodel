import React from 'react'
import { chiefs } from '../arrays_files/chiefs'
import { whyWe } from '../arrays_files/whyWe'
import { contacts } from '../arrays_files/contacts'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main>
        <div>
          <h2>Для вас готовят наши лучшие повара</h2>
          <div className='chiefs-info'>
            {chiefs.map((chief, index) => (
            <div className='chief-card' key={chief.id}>
                <img src={chief.image} alt="" />
                <h4>{chief.name}</h4>
                <p>{chief.description}</p>
            </div>
          ))}
          </div>
        </div>
        <div className='whyWe'>
          <h2>Почему мы</h2>
          {whyWe.map((cause, index) => (
            <section>
                <h4>{cause.title}</h4>
                <p>{cause.description}</p>
            </section>
          ))}
        </div>
        <div className='contacts'>
            <h2>Мы в соцсетях</h2>
            <div className="contactsField">
              {contacts.map((contact, index)=>(
             <Link to={"algoritmika-vkusodel/"+contact.src} key={index} className="contactLink">
              <img width={150} src={contact.logo} alt="" /><br/>
              <p>{contact.name}</p>
             </Link>
            ))}
            </div>
            
        </div>
    </main>
  )
}
