import React from "react"
import { Header, Table, Button, Modal } from "semantic-ui-react";

import OfferForm  from "../components/OfferForm";

import useQuery from "../hooks/useQuery";

import {getAll} from "../services/orders";

export default () => {
  const {data: orders, loading} = useQuery(getAll);

  if(loading) return <h1>loading</h1>

  const handleSendOffer = () => {}

  return(
  <>
    <Header as="h1" content="Operations" />
    {/* TODO: Sortable by issued at */}
    <Table celled padded unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell content="No." collapsing />
          <Table.HeaderCell content="Order No." />
          <Table.HeaderCell content="Status" />
          <Table.HeaderCell content="Issued At" />
          <Table.HeaderCell content="Actions" />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {orders.map(({id, status, issuedAt, type, products}, i) => (
          <Table.Row key={id}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>{issuedAt}</Table.Cell>
            <Table.Cell>
              {
                type === "Inquiry" ?
                  <Modal 
                    trigger={<Button content="Confirm" primary />} 
                    content={<OfferForm id={id} products={products} handleSendOffer={handleSendOffer} />} 
                  /> :
                  <Button content="No actions" disabled />
              }
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </>
)}