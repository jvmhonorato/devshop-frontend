import { useState } from 'react'
import useSWR from 'swr'



const fetcher = async query => {
    console.log('fetcher', JSON.stringify(query), query)
    const res = await fetch(process.env.NEXT_PUBLIC_API,{
        headers:{
            'Content-type':'application/json'
        },
        method:'POST',
        body: query
    })
    //return de answer in JSON
    const json = await res.json()
    console.log(json)
    return json
}


//the query interface will be passed dynamically
const useQuery = queryStr => {
    const  query ={
        query:queryStr
    }
    const allData = useSWR(JSON.stringify(query),  fetcher)
    const { data, ...rest} = allData
    return  {data: data? data.data :null, ...rest }
    
}

  // //WITHOUT USESTATE()
// //wait query
// const useMutation = query => {
//     //wait variables come from form.values
//     const mutate = variables => {
//         //will add the two values
//         const mutation = {
//             ...query,
//             variables
//         }
//         //save in postgresSQL
//         return fetcher(JSON.stringify(mutation))
//     }



    // WITH USESTATE()
const useMutation = query => {
    const [data, setData] = useState(null)
    const mutate = async variables => {
        //will add the two values
        const mutation = {
            query,
            variables
        }
        //save in postgresSQL
        try{
         const   returnedData = await  fetcher(JSON.stringify(mutation))
         setData(returnedData)
         return returnedData
        }catch{

        }
        
    }

    return [data, mutate]
}



export  {useQuery, useMutation, fetcher}