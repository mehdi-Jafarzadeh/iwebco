import './InfoCard.css'
function InfoCard({icon,number=10,text="test",color}) {
  return <div className="infoCard" style={{color:color}}>
    <p className='icon'>{icon}</p>
    <p className='number'><b>{number}</b></p>
    <h2 className='text'><strong>{text}</strong></h2>
  </div>
}

export default InfoCard