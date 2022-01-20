import "./App.css";
import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";
import ButgetCard from "./components/butgetCard.jsx";
import AddBudgetModal from "./components/AddBudgetModal.jsx";
import { UNCATEGORIZE_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext.jsx";
import AddExpensesModal from "../src/components/AddExpensesModal.jsx";
import UndefinedBudgetCard from "./components/undefinedBudgetCard.jsx";
function App() {
  const [showThemodalBudget, setShotTheModalBudget] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();
  const [showTheModalExpenses, setShowTheModalExpenses] = useState(false);
  const [budgetExpenseDefault, setbudgetExpenseDefault] = useState("");
  function showModalExpenses(id) {
    setShowTheModalExpenses(true);
    setbudgetExpenseDefault(id);
  }
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
          <Button variant="outline-primary" onClick={() => showModalExpenses("")}>
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
                modalExpense={() => showModalExpenses(budget.id)}
              />
            );
          })}
        </div>
      </Container>
      <AddExpensesModal
        show={showTheModalExpenses}
        handleClose={() => setShowTheModalExpenses(false)}
        defaultButgetId={budgetExpenseDefault}
      />
      <UndefinedBudgetCard modalExpense={() => showModalExpenses(UNCATEGORIZE_BUDGET_ID)} />
      <AddBudgetModal show={showThemodalBudget} handleClose={() => setShotTheModalBudget(false)} />
    </>
  );
}

export default App;
