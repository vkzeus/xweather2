import React,{useState} from "react";

function App() {
 const [data,setData]=useState([
  
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  
  
  ]);
  const [sortedData,setSortedData]=useState([]);

const sortbyDate=()=>{
  setSortedData([]);
  const a=[...data].sort((a,b)=> new Date(b.date)-new Date(a.date));
  setSortedData(a);

}
   const sortbyViews=()=>{
    setSortedData([]);
    const b=[...data].sort((a,b)=>b.views-a.views);
    setSortedData(b);


   }






  return (
    <div className="App">
     <h2>Dates and Views Table</h2>
     <button onClick={sortbyDate}>Sort by Date</button>
     <button onClick={sortbyViews}>Sort by Views</button>

     {sortedData.length > 0 && (
        <table  >
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
