import React, { useState,useEffect } from 'react'
import OuterHeaderRow from './TableComponents/OuterHeaderRow'
import Row from './TableComponents/Row'
import './1table.css'
import axios from 'axios'

export default function Table() {

  // const [data, setData] = useState([{
  //   "_id": {
  //     "$oid": "62ebf1b4eeeb81e0a445e462"
  //   },
  //   "requiredSkills": [
  //     "Figma"
  //   ],
  //   "recommandations": [
  //     {"id": "qsdf", "title": 'ahla ye samir', "description": 'ahla ye samir'},
  //     {"id": "qsdf", "title": 'qsdfsfd', "description": 'ahla qsdfqsdfqye samir'},
     
  //   ],
  //   "title": "DEV java",
  //   "description": "Nous le devons à l'intelligence collective \nportée par nos 190 collaborateurs\n représentant 25 nationalités.\n",
  //   "modedemploi": "CDI",
  //   "companyDescription": "Portalite",
  //   "responsabilities": "Backend",
  //   "expYears": "5",
  //   "createdAt": {
  //     "$date": {
  //       "$numberLong": "1659630004214"
  //     }
  //   },
  //   "updatedAt": {
  //     "$date": {
  //       "$numberLong": "1660434918157"
  //     }
  //   },
  //   "__v": 0,
  //   "status": "cloturee"
  // },{
  //   "_id": {
  //     "$oid": "62f90c18898495b383a7b96a"
  //   },
  //   "requiredSkills": [
  //     "Figma"
  //   ],
  //   "recommandations":[
  //     {"id": "qsdf", "title": 'ahla ye samir', "description": 'ahla ye samir'},
  //     {"id": "qsdf", "title": 'qsdfsfd', "description": 'ahla qsdfqsdfqye samir'},
     
  //   ],
  //   "title": "DEV java",
  //   "description": " Nous le devons à l'intelligence \ncollective portée par nos 190 collaborateurs représentant 25 nationalités.\n",
  //   "modedemploi": "CDI",
  //   "companyDescription": "Portalite",
  //   "responsabilities": "Backend",
  //   "expYears": "5",
  //   "createdAt": {
  //     "$date": {
  //       "$numberLong": "1659630004214"
  //     }
  //   },
  //   "updatedAt": {
  //     "$date": {
  //       "$numberLong": "1660434918157"
  //     }
  //   },
  //   "__v": 0,
  //   "status": "repondu"
  // },{
  //   "_id": {
  //     "$oid": "63055f3773aafeecabcf97ec"
  //   },
  //   "requiredSkills": [
  //     "Figma"
  //   ],
  //   "recommandations": [
  //     {"id": "qsdf", "title": 'ahla ye samir', "description": 'ahla ye samir'},
  //     {"id": "qsdf", "title": 'qsdfsfd', "description": 'ahla qsdfqsdfqye samir'},
     
  //   ],
  //   "title": "DEV WEB",
  //   "description": "Nous le devons à l'intelligence collective \nportée par nos 190 collaborateurs\n représentant 25 nationalités.\n",
  //   "modedemploi": "CDI",
  //   "companyDescription": "Portalite",
  //   "responsabilities": "front",
  //   "expYears": "5",
  //   "createdAt": {
  //     "$date": {
  //       "$numberLong": "1659630004214"
  //     }
  //   },
  // }])

  const [data, setOffres] = useState([]);

  useEffect(() => {
    load();
  });

  const load = async () => {
    const result = await axios.get("http://localhost:5000/api/offer/");
    setOffres(result.data.reverse());
  };

 


  return (
    <table className='outerTable'>
        <OuterHeaderRow />
        <tbody>
          {data.map(d => <Row
            
            title={d.title}
            description={d.description}
            modedemploi={d.modedemploi}
            companyDescription={d.companyDescription}
            responsabilities={d.responsabilities}
            expYears= {d.expYears}
            recommandations={d.recommandations}
          />)}
        </tbody>
    </table>
  )
}
