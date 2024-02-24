import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TestComponent from './components/test-component/TestComponent';
import Categories from './components/categories/Categories';
import Search from './components/search/Search';
import './App.css';
import { arrayBuffer } from 'node:stream/consumers';

function App() {
  const [testList, setTestList]: any[] = useState([]);
  const [siteIdList, setSiteIdList]: any[] = useState([]);
  const [searchChange, setSearchChange]: any = useState('');
  const [nameSortStatus, setNameSortStatus]: any = useState(false);
  const lineColors: any = ['#E14165', '#C2C2FF', '#8686FF'];

  useEffect(() => {
    axios.get('http://localhost:3100/tests').then((res) => {
      setTestList(res.data);
    });
    axios.get('http://localhost:3100/sites').then((res) => {
      setSiteIdList(res.data);
    });
  }, []);

  function toggleNameStatus() {
    setNameSortStatus(!nameSortStatus);
  }

  function getTestList(searchChange: string, testsArray: any) {
    let temp: any[] = [];
    
    for(let i = 0; i < testsArray.length; i++) {
      if(testsArray[i].name.includes(searchChange)) {
        temp.push(testsArray[i]);
      }
    }
    
    function sortByNames() {
      if(nameSortStatus === true) {
        temp.sort(function (a: any, b: any) {
          if(a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        })
      } else {
        temp.sort(function (a: any, b: any) {
          if(a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      }
    }

    if(temp.length > 0) {
      sortByNames()
      return <div className='list-categories'>
        <Categories
        nameClick={() => toggleNameStatus()}
        />
        {
          temp.map((el: any, index: number) => {
            return <TestComponent
            key={index}
            id={el.id}
            name={el.name}
            type={el.type}
            status={el.status.charAt(0) + el.status.slice(1).toLowerCase()}
            siteId={siteIdList.map((elSiteId: any) => {return el.siteId === elSiteId.id && el.siteId === 1 ? elSiteId.url.slice(8) : el.siteId === elSiteId.id && el.siteId === 2 ? elSiteId.url.slice(12) : el.siteId === elSiteId.id && el.siteId === 3 ? elSiteId.url.slice(7) : ''})}
            lineColor={lineColors[Math.floor(Math.random() * 3)]}
            />
          })
        }
      </div>
    } else {
      return <div className='no-results'>
        <div className="no-results__title">
          Your search did not match any results.
        </div>
        <button className='no-results-btn' onClick={() => {setSearchChange('')}}>
          <span className='no-results-btn__txt'>Reset</span>
        </button>
      </div>
    }
  }

  return (
    <div className="App">
      <div className="app__title">Dashboard</div>
      <Search testComponentAmount={testList.length} 
      change={(e: any) => {
        setSearchChange(e.target.value);
      }}
      value={searchChange}
      />
      <div>
        {
          getTestList(searchChange, testList)
        }
      </div>
    </div>
  );
}

export default App;
