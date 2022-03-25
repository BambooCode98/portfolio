


export default function ThirdSection() {

  

  return(
    <div className="body3">
      <h1 className="header3">Projects I Have Created</h1>
      {/* <div className='proContainer'> */}
        <img 
        src={ require('../images/projects/dcvillains.png')}
        className='dc'
        // onMouseEnter={}
        />
        <img 
        src={ require('../images/projects/storepage.png')}
        className='storepage'
        />
        <img 
        src={ require('../images/projects/todolist.png')}
        className='todolist'
        />
        <img 
        src={ require('../images/projects/weatherapp.png')}
        className='weatherapp'
        />
      {/* </div> */}
    </div>
  );
}