import React, { useEffect } from "react";
import {useRouter} from 'next/router'
import { useMutation, useQuery } from "../../../lib/graphql";
import { useFormik } from 'formik'
import Layout from "../../../components/layout";
import Title from "../../../components/title";
import Link from "next/link";



const UPDATE_CATEGORY = `
    mutation updateCategory($id: String!, $name: String!, $slug: String!) {
        updateCategory (input:{
            id: $id,
            name: $name,
            slug: $slug
        }) {
          id
          name
          slug
        }
      }
    `


const Edit = () => {
    
    //defined data that comes from the server
    const router = useRouter()
    const {data} = useQuery(`
    query{
        getCategoryById(id:"${router.query.id}"){
            name
            slug
        }
    }
    
    `)
    const [updatedData, updateCategory] = useMutation(UPDATE_CATEGORY)
    //set form data
    const form = useFormik({
        initialValues:{
            name:'',
            slug:''
        },
        //use async to wait category be created and later redirect  
        onSubmit: async values => {
            const category = {
                ...values,
                id: router.query.id
            }
          await  updateCategory(category)
            router.push('/categories')
        }
    })
    //passed data to the form
    useEffect(() => {
        if(data && data.getCategoryById){
            form.setFieldValue('name', data.getCategoryById.name)
            form.setFieldValue('slug', data.getCategoryById.slug)
        }
    },[data])
    // 
    return(
        <>
          <Layout>
            <Title>Editar Categoria</Title>
                        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
             
                       
        
                      
                        <Link className="text-indigo-600 hover:text-indigo-900" href='/categories'>voltar</Link>
        
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
         <div>
          
          {/* {JSON.stringify(data)} */}
          <form onSubmit={form.handleSubmit}>
                                        <input type='text' name='name'onChange={form.handleChange} value={form.values.name}/>
                                       <input type='text' name='slug' onChange={form.handleChange} value={form.values.slug}/>
                                       <button type='submit'>Atualizar Categoria</button>
                                        </form>
            
            </div>
           </div>
         </div>
         </div>
         </Layout>
         

        </>
    ) 
}

export default Edit