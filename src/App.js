import "./App.css";
import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";
import ButgetCard from "./components/butgetCard.jsx";
import AddBudgetModal from "./components/AddBudgetModal.jsx";
import { useBudgets } from "./contexts/BudgetsContext.jsx";

function App() {
  const [showThemodalBudget, setShotTheModalBudget] = useState(false);
  const { budgets } = useBudgets();
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
          <Button variant="outline-primary">Add Expense</Button>
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
            return (
              <ButgetCard
                key={budget.id}
                name={budget.name}
                amount={budget.amount}
                max={budget.max}
                gray
              />
            );
          })}
        </div>
      </Container>
      <AddBudgetModal show={showThemodalBudget} handleClose={() => setShotTheModalBudget(false)} />
    </>
  );
}

export default App;
