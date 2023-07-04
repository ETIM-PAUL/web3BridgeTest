import React from 'react'
import Modal from './Modal'

const Room = ({ title }) => {
  const [persons, setPersons] = React.useState([])
  const [modal, setModal] = React.useState(false)

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body mx-auto">
          <h2 className="card-title justify-center">{title}</h2>
          <div>
            <span className="font-bold text-sm text-start">Facilitator</span>
            <ul className="menu bg-base-200 w-fit rounded-box">
              <li><a>Tony - Smart Contract Developer</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-sm text-start">Developers</span>
            <ul className="menu bg-base-200 w-fit rounded-box">
              <li><a>Tony - Smart Contract Developer</a></li>
              <li><a>Tony - Smart Contract Developer</a></li>
              <li><a>Tony - Smart Contract Developer</a></li>
            </ul>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary" onClick={() => setModal(true)}>Add Person</button>
          </div>
        </div>
      </div>

      {modal &&
        <Modal modal={modal} persons={persons} setPersons={setPersons} setModal={setModal} />
      }
    </div>
  )
}

export default Room