import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import { useFormik } from 'formik'
import Title from '../../components/title'
import { useRouter } from 'next/router'
import Button from '../../components/Button'

import { useMutation, useQuery } from '../../lib/graphql'



//interface
const CREATE_PRODUCT = `
    mutation createProduct($name: String!, $slug: String!, $description: String!, $category: String!) {
        createProduct (input:{
            name: $name,
            slug: $slug,
            description: $description,
            category: $category
        }) {
          id
          name
          slug
        }
      }
    `
    const GET_ALL_CATEGORIES = `
    query {
        getAllCategories{
          id
          name
          slug
        }
      }
    `

const Index = () => {
    const router = useRouter()
    const [data, createProduct] = useMutation(CREATE_PRODUCT)
    const {data:category, mutate} = useQuery(GET_ALL_CATEGORIES)

    // //WITHOUT USESTATE
    // const [mutate] = useMutation(mutation)
    // const form = useFormik({
    //     initialValues:{
    //         name:'',
    //         slug:''
    //     },
    //     onSubmit: values => {
    //         mutate(values)
    //     }
    // })
         
       //WITH USESTATE()
    const form = useFormik({
        initialValues:{
            name:'',
            slug:'',
            description:'',
            category:''
        },
        //use async to wait category be created and later redirect  
        onSubmit: async values => {
          await  createProduct(values)
            router.push('/products')
        }
    })

    

    return(
        <div >
            
        <Layout>
        <Title>Criar Produto</Title>
                        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
             
                       
        
                        <div className="mt-8">
        
                        </div>
                  
        
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                       
                                     
                                   
                                </div>
                            </div>
                        </div>
                        
                        <form onSubmit={form.handleSubmit}>
                        {JSON.stringify(category, null,2)}
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                Produto
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type='text' name='name'onChange={form.handleChange} values={form.values.name}/>
                            </div>

                            <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Slug da Produto
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type='text' name='slug' onChange={form.handleChange} values={form.values.slug}/>
                           </div>

                            <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Descrição do Produto
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type='text' name='description' onChange={form.handleChange} values={form.values.slug}/>
                           </div>

                             <div className="mb-6">   
                           <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Selecione a categoria
                            </label>
                           <select name='category' onChange={form.handleChange} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" >
                                {category && category.getAllCategories && category.getAllCategories.map(item => { return (<option value={item.id} key={item.id}>{item.name}</option>)})}
                            </select>
                            </div>

                            <div className="flex items-center justify-between">
                            <Button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none" type='submit'>Criar Produto</Button>
                           
                            </div>
                          
                           
                          </div>
                        </form>
                        <Button.Back className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 underline uppercase transition bg-transparent rounded ripple hover:text-blue-900 focus:outline-none" href='/categories'>voltar</Button.Back>
        </Layout>
        </div>
    )
}

export default Index