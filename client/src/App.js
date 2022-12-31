
function App() {
  var rows = [], i = 0, len = 30;
  while (++i <= len) rows.push(i);
  return (
    <div>
      <nav className="border-b border-gray-300 bg-sky-100">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl py-3">Appoinment System</h1>
          <div>
            <p>Track Appoinment</p>
          </div>
        </div>
      </nav>

      <div className="container mx-auto my-5 border ">
        <div className="bg-indigo-200 ">
          <h2 className="p-5 text-xxl"><b>March 2022</b></h2>

        </div>
        <div>
          <div >
            <div class="grid grid-cols-7 text-center bg-orange-100">
              <div className="p-2 border">Sunday</div>
              <div className="p-2 border">Monday</div>
              <div className="p-2 border">Tusday</div>
              <div className="p-2 border">Wednesday</div>
              <div className="p-2 border">Thursday</div>
              <div className="p-2 border">Friday</div>
              <div className="p-2 border">Saturday</div>
            </div>
          </div>
          <div >
            <div class="grid grid-cols-7 text-left justify-end grid-flow-row auto-rows-max">

              {rows.map((row) => {
                return <div key={row} className="p-5 border flex flex-col justify-between items-center">

                  <span className="py-1 px-2 bg-yellow-100 w-full text-center mb-1 border">{row < 10 ? "0" + row : row} march 2022, sat</span>
                  <a href="/" className="block py-1 px-2 bg-green-100 w-full text-center mb-1 border"><span >Events</span></a>
                  <a href="/" className="block py-1 px-2 bg-blue-100 w-full text-center mb-1 border"><span>Book now</span></a></div>
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
