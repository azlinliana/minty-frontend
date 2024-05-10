import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "pengguna/admin";

export const useAdminStore = create((set) => ({
  admins: [],
  // Fetch admin
  fetchAdmins: async () => {
    const response = await axiosCustom.get(URL);

    set({ admins: response.data });
  },
  // Create admin
  createAdmin: async (adminInput, closeModalCreateAdmin) => {
    try {
      const response = await axiosCustom.post(
        URL, 
        adminInput
      );

      if (response.status === 200) {
        set((state) => ({
          admins: [
            ...state.admins, 
            response.data.adminData
          ],
        }));

        closeModalCreateAdmin();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
  // Edit admin
  editAdmin: async (adminId, adminInput, closeModalEditAdmin) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${adminId}`, 
        adminInput
      );

      if (response.status === 200) {
        set((state) => ({
          admins: state.admins.map((admin) =>
            admin.id === adminId ? response.data.adminData : admin
          ),
        }));

        closeModalEditAdmin();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete admin
  deleteAdmin: async (adminId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${adminId}`);

        if (response.status === 200) {
          set((state) => ({
            admins: state.admins.filter((admin) => admin.id !== adminId),
          }));

          SuccessAlert(response.data.success);
        } else {
          ErrorAlert(response); // Handle error from the backend or unknown error from the server side
        }
      });
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
}));
