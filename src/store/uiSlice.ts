import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProjectCategory } from '../data/portfolio';

type UiState = {
  mode: 'light' | 'dark';
  projectFilter: ProjectCategory;
  selectedProject: string | null;
};

const initialState: UiState = {
  mode: 'dark',
  projectFilter: 'all',
  selectedProject: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setProjectFilter(state, action: PayloadAction<ProjectCategory>) {
      state.projectFilter = action.payload;
    },
    selectProject(state, action: PayloadAction<string | null>) {
      state.selectedProject = action.payload;
    },
  },
});

export const { toggleMode, setProjectFilter, selectProject } = uiSlice.actions;
export default uiSlice.reducer;
