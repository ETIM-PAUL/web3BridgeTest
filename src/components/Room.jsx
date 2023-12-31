import React from 'react'
import Modal from './Modal'

const Room = ({ title, type, allPersons, setAllPersons }) => {
  const [persons, setPersons] = React.useState([])
  const [modal, setModal] = React.useState(false)

  // shows modal for adding a person to a room
  const showModal = () => {
    if (persons.length === 4 && type === "room") {
      window.alert("This Room is fully occupied")
      return;
    }
    if (persons.length === 500 && type === "conference room") {
      window.alert("This Room is fully occupied")
      return;
    }
    else
      setModal(true)
  }

  //return role of person
  const returnRole = (role) => {
    switch (role) {
      case "facilitator":
        return "Facilatator"
        break;
      case "smart_contract":
        return "Smart Contract Developer"
        break;
      case "frontend":
        return "Front-End Developer"
        break;
      case "server_side":
        return "Server-Side Architect"
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <div className="card w-fit sm:w-[300px] bg-base-100 shadow-xl">
        <div className="card-body mx-auto">
          <h2 className="card-title justify-center">{title}</h2>
          <div>
            <span className="font-bold text-sm text-start">Facilitator{type === "room" ? "" : "s"}</span>
            <ul className="menu bg-base-200 w-fit mx-auto rounded-box">
              {persons.length > 0 && persons.filter((person) => person.proficiency === "facilitator").map((person, index) => (
                <li className="mx-auto" key={index}><a className="hover:cursor-default">{person.fullName} - {returnRole(person.proficiency)}</a></li>
              ))}
              {persons.filter((person) => person.proficiency === "facilitator").length === 0 &&
                <span className="text-red-600">No Facilitators in this {type === "room" ? "room" : "conference room"}</span>
              }
            </ul>
          </div>
          <div>
            <span className="font-bold text-sm text-start">Developer{type === "room" ? "" : "s"}</span>
            <ul className="menu bg-base-200 w-fit mx-auto rounded-box">
              {persons.length > 0 && persons.filter((person) => person.proficiency !== "facilitator").map((person, index) => (
                <li className="" key={index}><a className="hover:cursor-default">{person.fullName}  - {returnRole(person.proficiency)}</a></li>
              ))}
              {persons.filter((person) => person.proficiency !== "facilitator").length === 0 &&
                <span className="text-red-600">No Developers in this {type === "room" ? "room" : "conference room"}</span>
              }
            </ul>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary" onClick={showModal}>Add Person</button>
          </div>
        </div>
      </div>

      {modal &&
        <Modal type={type} modal={modal} persons={persons} setPersons={setPersons} setAllPersons={setAllPersons} allPersons={allPersons} setModal={setModal} />
      }
    </div>
  )
}

export default Room