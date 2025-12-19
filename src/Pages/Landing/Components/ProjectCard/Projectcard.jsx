import './Projectcard.css'
function Projectcard({item}) {

  var pic = item.img
  var link = item.link
  var name = item.title 
  var techstack = ""
  var description = ""
  switch (item.id) {
    case 1:
      techstack = <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Sass</li>
                    <li>Javascript</li>
                    <li>Owl-carousel</li>
                  </ul>
      break;
    case 2:
      techstack = <ul>
                      <li>Front-end:</li>
                        <ul>
                          <li>ReactJs</li>
                          <li>NextJs</li>
                          <li>Sass</li>
                        </ul>
                      <li>Back-end:</li>
                        <ul>
                          <li>nodeJs</li>
                          <li>ExpressJs</li>
                        </ul>
                      <li>Database:</li>
                        <ul>
                          <li>MongoDB</li>
                        </ul>
                  </ul>
      break;
    case 3:
      techstack = <b>3</b>
      break;
    case 4:
      techstack = <b>4</b>
      break;
    case 5:
      techstack = <b>5</b>
      break;
    case 6:
      techstack = <b>6</b>
       break;
  }
    const openModal = () => {
        document.getElementById(name + 'dialog').showModal()
    }
    
    const closeModal = () => {
        document.getElementById(name + 'dialog').close()
    }
    
  return <div className="ProjectCard">
    <img src={pic} alt="" />
    <h4>{name}</h4>
    <button onClick={openModal}>Detailes</button>
    
    {link ? <a href={link}><button>see live</button></a> : "" }
    
    <dialog id={name + 'dialog'}>
      <div>
      <h3>title : {name}</h3>
      <h4>used tech stack:</h4>
      {techstack}
      <h4>description:</h4>
      {description}
      <button onClick={closeModal}>close</button>
    {link ? <a href={link}><button>see live</button></a> : "" }
      </div>
      <div>
        <img src={pic} alt="" />
      </div>

    </dialog>
  </div>
}

export default Projectcard