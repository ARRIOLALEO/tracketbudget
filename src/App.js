import "./App.css";
import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";
import ButgetCard from "./components/butgetCard.jsx";
import AddBudgetModal from "./components/AddBudgetModal.jsx";
import { useBudgets } from "./contexts/BudgetsContext.jsx";
import AddExpensesModal from "../src/components/AddExpensesModal.jsx";
function App() {
  const [showThemodalBudget, setShotTheModalBudget] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();
  const [showTheModalExpenses, setShowTheModalExpenses] = useState(false);
  return (
    <>
      <Container fluid>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Butgets</h1>
          <Button
            variant="primary"
            onClick={() => {
              setShotTheModalBudget(true);
              console.log(showThemodalBudget);
            }}
          >
            Add Butget
          </Button>
          <Button variant="outline-primary" onClick={() => setShowTheModalExpenses(true)}>
            Add Expense
          </Button>
        </Stack>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fil,minmax(300px,1fr))",
            gap: "1rem",
            aligItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (acc, expense) => acc + expense.amount,
              0
            );
            return (
              <ButgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                gray
              />
            );
          })}
        </div>
      </Container>
      <AddExpensesModal
        show={showTheModalExpenses}
        handleClose={() => setShowTheModalExpenses(false)}
        defaultButgetId="bb39a3fa-b891-4c5e-88af-6c3018c4c0d8"
      />
      <AddBudgetModal show={showThemodalBudget} handleClose={() => setShotTheModalBudget(false)} />
    </>
  );
}

export default App;
