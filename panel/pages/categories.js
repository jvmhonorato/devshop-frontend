import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout'
import Table from '../components/Table'
import Title from '../components/title'
import { MdProductionQuantityLimits } from "react-icons/md";
import { useQuery } from '../lib/graphql'




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
    console.log(data, error)

    return(
        <div >
        <Layout>
        <Title>Iniciar Categorias</Title>
                        
             {/* Dinamic data card */}
                        <div className="mt-4">
                            <div className="flex flex-wrap -mx-6">
                                
                                <Card>
                                <Card.Icon>
                                   <MdProductionQuantityLimits className="h-8 w-8 text-white" />
                                </Card.Icon>
                                <Card.Data>
                                    <Card.Title>2000</Card.Title>
                                    <Card.Description>Produtos</Card.Description>
                                </Card.Data>
                                </Card>
                                
        

                       
                               <Card>
                                <Card.Icon>
                                <MdProductionQuantityLimits className="h-8 w-8 text-white" />
                                </Card.Icon>
                                <Card.Data>
                                    <Card.Title>2000</Card.Title>
                                    <Card.Description>Produtos</Card.Description>
                                </Card.Data>
                                </Card>
                                <Card>
                                <Card.Icon>
                                <MdProductionQuantityLimits className="h-8 w-8 text-white" />
                                </Card.Icon>
                                <Card.Data>
                                    <Card.Title>2000</Card.Title>
                                    <Card.Description>Produtos</Card.Description>
                                </Card.Data>
                                </Card>
                            </div>
                        </div>
        
                        <div className="mt-8">
        
                        </div>
        
                        <div className="flex flex-col mt-8">
                            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                        <Table>
                                            <Table.Head>
                                                <Table.Th>Name</Table.Th>
                                                <Table.Th>Title</Table.Th>
                                                <Table.Th>Status</Table.Th>
                                                <Table.Th>Role</Table.Th>
                                           
                                            </Table.Head>
                                             <Table.Body>
                                              <Table.Tr>
                                              <Table.Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full"
                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                alt=""/>
                                                        </div>
        
                                                        <div className="ml-4">
                                                            <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                                                            </div>
                                                            <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                        </div>
                                                    </div>
                                                </Table.Td>
        
                                                <Table.Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                    <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                </Table.Td>
        
                                                <Table.Td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                                </Table.Td>
        
                                                <Table.Td
                                                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    Owner</Table.Td>
        
                                                <Table.Td
                                                    className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                </Table.Td>
                                             </Table.Tr>
                                          
                                        </Table.Body>
        
                                       
                                     </Table>
                                   
                                </div>
                            </div>
                        </div>
        </Layout>
        </div>
    )
}

export default Index