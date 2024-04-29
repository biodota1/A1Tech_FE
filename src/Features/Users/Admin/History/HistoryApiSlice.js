import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../../App/Api/ApiSlicer";

const historyAdapter = createEntityAdapter({});

const initialState = historyAdapter.getInitialState();

export const historyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => "/history",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedHistories = responseData.map((history) => {
          history.id = history._id;
          return history;
        });
        return historyAdapter.setAll(initialState, loadedHistories);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "History", id: "LIST" },
            ...result.ids.map((id) => ({ type: "History", id })),
          ];
        } else return [{ type: "History", id: "LIST" }];
      },
    }),
    addNewHistory: builder.mutation({
      query: (initialProductData) => ({
        url: "/history",
        method: "POST",
        body: {
          ...initialProductData,
        },
      }),
      invalidatesTags: [{ type: "History", id: "LIST" }],
    }),
    updateProduct: builder.mutation({
      query: (initialProductData) => ({
        url: "/history",
        method: "PATCH",
        body: {
          ...initialProductData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "History", id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: "/history",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "History", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetHistoryQuery,
  useAddNewHistoryMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = historyApiSlice;

// returns the query result object
export const selectHistoryResult =
  historyApiSlice.endpoints.getHistory.select();

// creates memoized selector
const selectHistoryData = createSelector(
  selectHistoryResult,
  (historyResult) => historyResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllHistory,
  selectById: selectHistoryById,
  selectIds: selectHistoryIds,
  // Pass in a selector that returns the products slice of state
} = historyAdapter.getSelectors(
  (state) => selectHistoryData(state) ?? initialState
);
