import React from 'react'

const Modal = ({ setModal, persons, setPersons }) => {
  const [fullName, setFullName] = React.useState("")
  const [proficiency, setProficiency] = React.useState("")
  const addPerson = () => {

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