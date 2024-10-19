export default function Friend({ users }) {
  const { id,name, email } = users;
  // console.log(id,name, email);
  return (
    <div className="box">
      <h3>Your ID: {id}</h3>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
    </div>
  )
}