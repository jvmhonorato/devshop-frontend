import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import { useFormik } from 'formik'
import Title from '../../components/title'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import * as yup from 'yup'
import { useMutation, useQuery, fetcher } from '../../lib/graphql'



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
    const ProductSchema = yup.object().shape({
        name: yup.string()
        .min(3, 'Por favor, informe pelo menos um NOME de  Produto com 4 caracteres.')
        .required('Por favor informe pelo menos um NOME pra o Produto'),
        slug: yup.string()
        .min(3, 'Por favor, informe pelo menos um SLUG com 4 caracteres.')
        .required('Por favor informe pelo menos um SLUG pra o Produto')
        .test('is-unique',  'Por favor, utilize outro slug. Este já está em uso', async(value)=> {
            const ret = await fetcher(JSON.stringify({
                query: `
                query{
                    getProductBySlug(slug:"${value}"){
                        id
                    }
                }`
        }))
        if(ret.errors){
            return true
        }
        return false
    }),
    description: yup.string()
    .min(20, 'Por favor, informe pelo menos uma Descrição com 20 caracteres.')
    .required('Por favor informe uma descrição'),
    })



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
        },validationSchema: ProductSchema,
        //use async to wait category be created and later redirect  
        onSubmit: async values => {
         const data =  await  createProduct(values)
         if(data && !data.errors){
            router.push('/products')
         }
        },
        
    })
const initial= {id:'', label:'Selecione...'}
    

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
                        {data && !!data.errors && <p className="bg-red-100 border border-red-400´mb-6 text-red-700 px-4 py-3 rounded relative" role="alert"> Ocorreu um erro ao salvar os dados</p>}
                        <form onSubmit={form.handleSubmit}>
                        
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                Produto
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type='text' name='name'onChange={form.handleChange} values={form.values.name} errorMessage={form.errors.name}/>
                            {form.errors.name && <p className="text-red-500 text-xs italic">{form.errors.name}</p>}
                            </div>

                            <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Slug da Produto
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type='text' name='slug' onChange={form.handleChange} values={form.values.slug} errorMessage={form.errors.slug}/>
                            {form.errors.slug && <p className="text-red-500 text-xs italic">{form.errors.slug}</p>}
                           </div>

                            <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Descrição do Produto
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type='text' name='description' onChange={form.handleChange} values={form.values.description} errorMessage={form.errors.description}/>
                            {form.errors.description && <p className="text-red-500 text-xs italic">{form.errors.description}</p>}
                           </div>

                             <div className="mb-6">   
                           <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Selecione a categoria
                            </label>
                           <select 
                           name='category' 
                           onChange={form.handleChange} 
                           className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                           errorMessage={form.errors.category}
                            >
                            {initial && <option value={initial.id}>{initial.label}</option>}
                                {category && category.getAllCategories && category.getAllCategories.map(item => { return (<option value={item.id} key={item.id}>{item.name}</option>)})}
                                
                            </select>
                            {!form.values.category && <p className="text-red-500 text-xs italic">Por favor, informe uma categoria!</p>}
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