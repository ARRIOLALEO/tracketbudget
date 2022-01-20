import { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useBudgets, UNCATEGORIZE_BUDGET_ID } from "../contexts/BudgetsContext.jsx";
const AddExpensesModal = ({ show, handleClose, defaultButgetId }) => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { addExpense, budgets } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title> New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label> Name </Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label> Maximun Expending</Form.Label>
            <Form.Control ref={amountRef} type="number" required min={0} step={0.01} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="idButget">
            <Form.Label> Select Category</Form.Label>
            <Form.Select defaultValue={defaultButgetId} ref={budgetIdRef}>
              <option id={UNCATEGORIZE_BUDGET_ID}>UNCATEGORIZE</option>{" "}
              {budgets.map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              {" "}
              add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddExpensesModal;
