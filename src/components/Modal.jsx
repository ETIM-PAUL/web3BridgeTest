import React from 'react'

const Modal = ({ setModal, persons, setPersons, allPersons, setAllPersons, type }) => {
  const [fullName, setFullName] = React.useState("")
  const [proficiency, setProficiency] = React.useState("")
  const addPerson = () => {
    let newPerson = {
      fullName: fullName,
      proficiency: proficiency
    }

    // check if name is added
    if (fullName.length < 2) {
      window.alert("No name was added or name is too short")
      return;
    }

    // check if proficiency is added
    if (proficiency.length === 0) {
      window.alert("No Proficiency was selected")
      return;
    }

    // check if room has facilitator
    const is_facilitator_present = persons.find((person) => person.proficiency === "facilitator")
    // check if facility has exceeded capacity of facilitators
    const max_facilitator_present = allPersons.filter((person) => person.proficiency === "facilitator")

    // check if room has frontend developer
    const is_frontend_present = persons.find((person) => person.proficiency === "frontend")
    // check if facility has exceeded capacity of frontend
    const max_frontend_present = allPersons.filter((person) => person.proficiency === "frontend")

    // check if room has smart contract developer
    const is_smart_contract_present = persons.find((person) => person.proficiency === "smart_contract")
    // check if facility has exceeded capacity of smart contract
    const max_smart_present = allPersons.filter((person) => person.proficiency === "smart_contract")


    // check if room has smart contract developer
    const is_server_side_present = persons.find((person) => person.proficiency === "server_side")
    // check if facility has exceeded capacity of server_side
    const max_server_side_present = allPersons.filter((person) => person.proficiency === "server_side")

    if (is_facilitator_present && newPerson.proficiency === "facilitator" && type === "room") {
      window.alert("This Room has a facilitator present")
      return;
    }
    if (max_facilitator_present.length === 5 && newPerson.proficiency === "facilitator" && type === "room") {
      window.alert("This Facility has admitted the maximum number of facilitators")
      return;
    }

    if (is_frontend_present && newPerson.proficiency === "frontend" && type === "room") {
      window.alert("This Room has a FrontEnd Developer present")
      return;
    }
    if (max_frontend_present.length === 5 && newPerson.proficiency === "frontend" && type === "room") {
      window.alert("This Facility has admitted the maximum number of frontend developers")
      return;
    }

    if (is_smart_contract_present && newPerson.proficiency === "smart_contract" && type === "room") {
      window.alert("This Room has a Smart Contract Developer present")
      return;
    }
    if (max_smart_present.length === 10 && newPerson.proficiency === "smart_contract" && type === "room") {
      window.alert("This Facility has admitted the maximum number of smart contract developers")
      return;
    }

    if (is_server_side_present && newPerson.proficiency === "server_side" && type === "room") {
      window.alert("This Room has a Server-Side Architect present")
      return;
    }
    if (max_server_side_present.length === 5 && newPerson.proficiency === "server_side" && type === "room") {
      window.alert("This Facility has admitted the maximum number of server-side architects")
      return;
    }

    setPersons([...persons, newPerson])
    setAllPersons([...allPersons, newPerson])
    setModal(false)
  }
  return (
    <div>
      <><input type="checkbox" defaultChecked={true} id="my-modal-2" className="modal-toggle" /><div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-2" onClick={() => setModal(false)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="grid">
            <span className="label-text text-lg">New Person Details</span>
          </div>
          <div className="my-3">
            <div className="mb-3">
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="mb-3">
              <select className="select select-bordered w-full max-w-xs" required onChange={(e) => setProficiency(e.target.value)}>
                <option disabled selected>Pick Proficiency</option>
                <option value="facilitator">Facilitator</option>
                <option value="smart_contract">Smart Contract Developer</option>
                <option value="frontend">Front-End Developer</option>
                <option value="server_side">Server-Side Architect</option>
              </select>
            </div>
            <button className="btn btn-sm" onClick={() => addPerson()}>Add</button>
          </div>
        </div>
      </div></>
    </div>
  )
}

export default Modal