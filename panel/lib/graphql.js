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
    return json.data
}


//the query interface will be passed dynamically
const useQuery = query => {
return  useSWR(JSON.stringify(query), fetcher)

}

export  {useQuery}