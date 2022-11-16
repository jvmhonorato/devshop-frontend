import React from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import Table from '../../components/Table'
import Title from '../../components/title'


import { useMutation, useQuery } from '../../lib/graphql'



//interface
const DELETE_CATEGORY = `
mutation deleteCategory($id: String!) {
    deleteCategory (id: $id)
     
      
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
    const {data, mutate} = useQuery(GET_ALL_CATEGORIES)
    const [deleteData, deleteCategory] = useMutation(DELETE_CATEGORY)
    const remove = id => async() => {
        await deleteCategory({ id })
        mutate()
    }

    return(
        <div >
            
        <Layout>
        <Title>Iniciar Categorias</Title>
                        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
             
                       
        
                        <div className="mt-8">
        
                        </div>
                        <Link className="text-indigo-600 hover:text-indigo-900" href='/categories/create'>Criar Categorias</Link>
        
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

                            {data && data.getAllCategories && data.getAllCategories.length === 0 && (
                            <div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                            <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div>
                                <span class="font-medium">Atenção!</span> Nenhuma categoria listada!
                            </div>
                        </div>)}
                          
                            {data && data.getAllCategories && data.getAllCategories.length > 0 && (
                                <div
                                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                         
                                        <Table>
                                            <Table.Head>
                                                <Table.Th>Categorias</Table.Th>
                                                <Table.Th></Table.Th>
                                                <Table.Th></Table.Th>
                                           
                                            </Table.Head>
                                             <Table.Body>
                                                {data && data.getAllCategories && data.getAllCategories.map(item => {
                                                    return (
                                                    <Table.Tr key={item.id}>
                                                    <Table.Td >
                                                          <div className="flex items-center">
                                                             
              
                                                              <div >
                                                                  <div className="text-sm leading-5 font-medium text-gray-900">{item.name}
                                                                  </div>
                                                                  <div className="text-sm leading-5 text-gray-500">{item.slug}</div>
                                                              </div>
                                                          </div>
                                                      </Table.Td>
              
                                                     
              
                                                      <Table.Td>
                                                          <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                                                      </Table.Td>

                                                      <Table.Td>
                                                          <a onClick={remove(item.id)} href="#" className="text-indigo-600 hover:text-indigo-900">Deletar</a>
                                                      </Table.Td>
                                                   </Table.Tr>

                                                )})}
                                              
                                          
                                        </Table.Body>
        
                                       
                                     </Table>
                                   
                                </div>
                                )}
                            </div>
                        </div>
        </Layout>
        </div>
    )
}

export default Index