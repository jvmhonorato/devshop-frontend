import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout'
import Table from '../components/Table'
import Title from '../components/title'
import { MdProductionQuantityLimits } from "react-icons/md";

const Index = () => {

    return(
        <div >
        <Layout>
        <Title>Iniciar Categorias</Title>
                        
             {/* Dinamic data card */}
                        <div class="mt-4">
                            <div class="flex flex-wrap -mx-6">
                                <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
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
        
                        <div class="mt-8">
        
                        </div>
        
                        <div class="flex flex-col mt-8">
                            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div
                                    class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                        <Table>
                                            <Table.Head>
                                                <Table.Th>Name</Table.Th>
                                                <Table.Th>Title</Table.Th>
                                                <Table.Th>Status</Table.Th>
                                                <Table.Th>Role</Table.Th>
                                           
                                            </Table.Head>
                                             <Table.Body>
                                              <Table.Tr>
                                              <Table.Td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full"
                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                alt=""/>
                                                        </div>
        
                                                        <div class="ml-4">
                                                            <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                                                            </div>
                                                            <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                                                        </div>
                                                    </div>
                                                </Table.Td>
        
                                                <Table.Td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                                                </Table.Td>
        
                                                <Table.Td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span
                                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                                </Table.Td>
        
                                                <Table.Td
                                                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    Owner</Table.Td>
        
                                                <Table.Td
                                                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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