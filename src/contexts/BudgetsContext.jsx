import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
const BudgetsContext = React.createContext();
export function useBudgets() {
  return useContext(BudgetsContext);
}

//{
//id:
//name:
//max
//}
//{
//id:
//budgetId:
//amount:
//description
//}
export const BudgetsProvider = ({ children }) => {
  const [budgets, setButgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.id === budgetId);
  }

  function addExpense({ description, amount, budgetId }) {
    setExpenses((prevExpense) => {
      return [...prevExpense, { id: uuidV4(), description, amount, budgetId }];
    });
  }
  function addBudget({ name, max }) {
    console.log(name, max, budgets, uuidV4());
    setButgets((prevBudget) => {
      if (prevBudget.find((budget) => budget === name)) {
        return prevBudget;
      }
      console.log(uuidV4(), "this must print the id");
      return [...prevBudget, { id: uuidV4(), name, max }];
    });
  }

  function deleteBudget(budgetId) {
    //TODO : deal with expenses
    setButgets((prevBudget) => {
      return prevBudget.filter((budget) => budget.id !== budgetId);
    });
  }

  function deleteExpense(expenseId) {
    setExpenses((prevExpense) => {
      return prevExpense.filter((expense) => expense.id !== expenseId);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {" "}
      {children}
    </BudgetsContext.Provider>
  );
};
