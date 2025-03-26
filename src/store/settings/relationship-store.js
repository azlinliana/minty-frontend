import { create } from "zustand";
import axiosCustom from "../../axios";
import SuccessAlert from "../../views/components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../views/components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../views/components/sweet-alert/DeletionAlert";

const URL = "settings/relationship";

export const useRelationshipStore = create((set) => ({
  relationships: [],
  // Fetch relationship
  fetchRelationships: async () => {
    const response = await axiosCustom.get(URL);

    set({ relationships: response.data }); 
  },
  // Create relationship
  createRelationship: async (relationshipInput, closeModalCreateRelationship) => {
    try {
      const response = await axiosCustom.post(
        URL,
        relationshipInput
      );

      if (response.status === 200) {
        set((state) => ({
          relationships: [
            ...state.relationships,
            response.data.relationshipData
          ],
        }));

        closeModalCreateRelationship();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Edit relationship
  editRelationship: async (relationshipId, relationshipInput, closeModalEditRelationship) => {
    try {
      const response = await axiosCustom.put(
        `${URL}/${relationshipId}`,
        relationshipInput
      );

      if (response.status === 200) {
        set((state) => ({
          relationships: state.relationships.map((relationship) =>
            relationship.id === relationshipId ? response.data.relationshipData : relationship
          ),
        }));

        closeModalEditRelationship();

        SuccessAlert(response.data.success);
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  },
  // Delete relationship
  deleteRelationship: async (relationshipId) => {
    try {
      DeletionAlert(async () => {
        const response = await axiosCustom.delete(
          `${URL}/${relationshipId}`
        );

        if (response.status === 200) {
          set((state) => ({
            relationships: state.relationships.filter(
              (relationship) => relationship.id !== relationshipId
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
