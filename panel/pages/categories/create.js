import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import { useFormik } from 'formik'
import Title from '../../components/title'


import { useQuery } from '../../lib/graphql'




const query = {
    query:`
    query {
        getAllCategories{
          id
          name
          slug
        }
      }
    `
}

const Index = () => {
    const {data, error} = useQuery(query)
    const form = useFormik({
        initialValues:{
            name:'',
            slug:''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return(
        <div >
            
        <Layout>
        <Title>Criar Categoria</Title>
                        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
             
                       
        
                        <div className="mt-8">
        
                        </div>
                        <Link className="text-indigo-600 hover:text-indigo-900" href='/categories'>voltar</Link>
        
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                        <form onSubmit={form.handleSubmit}>
                                        <input type='text' name='name'onChange={form.handleChange} values={form.values.name}/><br/>{''}
                                       <input type='text' name='slug' onChange={form.handleChange} values={form.values.slug}/><br/>
                                       <button type='submit'>Criar Categoria</button>
                                        </form>
                                     
                                   
                                </div>
                            </div>
                        </div>
        </Layout>
        </div>
    )
}

export default Index