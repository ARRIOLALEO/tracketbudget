import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetsContext.jsx";

function ShowExpensesModal({ show, handleClose, budGetID }) {
  const { getBudgetExpenses } = useBudgets();
  const allExpenses = getBudgetExpenses(budGetID);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>

      <ul>
        {allExpenses.map((expens) => {
          return <li>{expens.description}</li>;
        })}
      </ul>
    </Modal>
  );
}

export default ShowExpensesModal;
