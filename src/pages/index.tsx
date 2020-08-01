import React from 'react'
import styles from '../styles/App.module.scss'
import EventForm from '../components/EventForm'
import GuestDetails from '../components/GuestDetails'

const index = () => {

  // const getFunction = async () => {
  //   const eventSnapshot = await db.collection("events").get()
  //   eventSnapshot.forEach((doc) => {
  //     console.log(doc.id, '=>', doc.data())
  //   })
  // }

  // getFunction()

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={'/logo.png'} className={styles.logo} alt="logo" />
        <p>
          Create carpools, without the headache.
          <EventForm />
        </p>
      </header>
    </div>
  )
}

export default index

