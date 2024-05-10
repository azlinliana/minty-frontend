import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "pengguna/super-admin";

export const useSuperAdminStore = create((set) => ({
  superAdmins: [],
  // Fetch super admin
  fetchSuperAdmins: async () => {
    const response = await axiosCustom.get(URL);

    set({ superAdmins: response.data });
  },
  // Create super admin
  createSuperAdmin: async (superAdminInput, closeModalCreateSuperAdmin) => {
    try {
      const response = await axiosCustom.post(
        URL, 
        superAdminInput
      );

      if (response.status === 200) {
        set((state) => ({
          superAdmins: [
            ...state.superAdmins, 
            response.data.superAdminData
          ],
        }));

        closeModalCreateSuperAdmin();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error); // Handle network error or other errors
    }
  },
  // Edit super admin
  editSuperAdmin: async (
    superAdminId,
    superAdminInput,
    closeModalEditSuperAdmin
  ) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${superAdminId}`,
        superAdminInput
      );

      if (response.status === 200) {
        set((state) => ({
          superAdmins: state.superAdmins.map((superAdmin) =>
            superAdmin.id === superAdminId
              ? response.data.superAdminData
              : superAdmin
          ),
        }));

        closeModalEditSuperAdmin();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete admin
  deleteSuperAdmin: async (superAdminId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(`${URL}/${superAdminId}`);

        if (response.status === 200) {
          set((state) => ({
            superAdmins: state.superAdmins.filter(
              (superAdmin) => superAdmin.id !== superAdminId
            ),
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
