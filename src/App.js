


function Header () {
  return (
      <div>
          <Title/>
          <h1>Header of page</h1>
      </div>

  )
}

function Title () {
    return (
        <div>
            <p className='title'>Title</p>
        </div>
    )
}

function Footer () {
  return (
      <div>
          <Title/>
        <p className='text'>Footer of page</p>
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
        <Title/>
      <h1>DZ1__Aigerim__34-03</h1>
      <Footer/>
    </div>
  );
}

export default App;
