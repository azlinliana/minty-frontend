import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "settings/loan";

export const useLoanStore = create((set) => ({
  loans: [],
  // Fetch loan
  fetchLoans: async () => {
    const response = await axiosCustom.get(URL);
    
    set({ loans: response.data });
  },
  // Create loan
  createLoan: async (loanInput, closeModalCreateLoan) => {
    try {
      const response = await axiosCustom.post(
        URL,
        loanInput
      );

      if (response.status === 200) {
        set((state) => ({
          loans: [
            ...state.loans, 
            response.data.loanData
          ],
        }));

        closeModalCreateLoan();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit loan
  editLoan: async (loanId, loanInput, closeModalEditLoan) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${loanId}`,
        loanInput
      );

      if (response.status === 200) {
        set((state) => ({
          loans: state.loans.map((loan) =>
            loan.id === loanId ? response.data.loanData : loan
          ),
        }));

        closeModalEditLoan();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete loan
  deleteLoan: async (loanId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `${URL}/${loanId}`
        );

        if (response.status === 200) {
          set((state) => ({
            loans: state.loans.filter(
              (loan) => loan.id !== loanId
            ),
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response);
        }
      });
    } catch (error) {
      ErrorAlert(error);
    }
  },
}));
