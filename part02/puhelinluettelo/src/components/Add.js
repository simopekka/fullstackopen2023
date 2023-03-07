const Add = ({ addName, newName, handle }) => (
    <form onSubmit={addName}>
        <div>name:
        <input 
            name="name"
            value={newName.name}
            onChange={handle}
        />
        </div>
        <div>number:
        <input
            name="number"
            value={newName.number}
            onChange={handle}
        />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
    </form>
)

export default Add