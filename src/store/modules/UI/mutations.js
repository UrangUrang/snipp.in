import initialState, { PANELS } from "./initialState";

export const types = {
  SET_ACTIVE_PANEL_ID: "SET_ACTIVE_PANEL_ID",
  SET_SHOW_COMMAND_CENTER: "SET_SHOW_COMMAND_CENTER",
  SET_ACTIVE_THEME: "SET_ACTIVE_THEME",
};

export default {
  [types.SET_ACTIVE_PANEL_ID]: (state, panelId) => {
    state.activePanelId = panelId;
  },
  [types.SET_SHOW_COMMAND_CENTER]: (state, flag) => {
    state.showCommandCenter = !!flag;
  },
  [types.SET_ACTIVE_THEME]: (state, theme) => {
    state.activeTheme = theme;
  },
};
