
export default {
  GO_HOME: 'GO_HOME',
  // modal state
  MODAL_OPEN: 'UI_MODAL_OPEN',
  MODAL_CLOSE: 'UI_MODAL_CLOSE',
  // notification state
  CLOSE_NOTIFICATION_WINDOW: 'CLOSE_NOTIFICATION_WINDOW',
  // sidebar state
  SIDEBAR_OPEN: 'UI_SIDEBAR_OPEN',
  SIDEBAR_CLOSE: 'UI_SIDEBAR_CLOSE',
  // alert state
  ALERT_OPEN: 'UI_ALERT_OPEN',
  ALERT_CLOSE: 'UI_ALERT_CLOSE',
  QR_CODE_DETECTED: 'UI_QR_CODE_DETECTED',
  // network dropdown open
  NETWORK_DROPDOWN_OPEN: 'UI_NETWORK_DROPDOWN_OPEN',
  NETWORK_DROPDOWN_CLOSE: 'UI_NETWORK_DROPDOWN_CLOSE',
  // transition state
  TRANSITION_FORWARD: 'TRANSITION_FORWARD',
  // remote state
  UPDATE_METAMASK_STATE: 'UPDATE_METAMASK_STATE',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  CLOSE_WELCOME_SCREEN: 'CLOSE_WELCOME_SCREEN',
  // unlock screen
  UNLOCK_IN_PROGRESS: 'UNLOCK_IN_PROGRESS',
  UNLOCK_FAILED: 'UNLOCK_FAILED',
  UNLOCK_SUCCEEDED: 'UNLOCK_SUCCEEDED',
  LOCK_METAMASK: 'LOCK_METAMASK',
  // error handling
  DISPLAY_WARNING: 'DISPLAY_WARNING',
  HIDE_WARNING: 'HIDE_WARNING',
  // accounts screen
  SET_SELECTED_TOKEN: 'SET_SELECTED_TOKEN',
  SHOW_ACCOUNT_DETAIL: 'SHOW_ACCOUNT_DETAIL',
  SHOW_ACCOUNTS_PAGE: 'SHOW_ACCOUNTS_PAGE',
  SHOW_CONF_TX_PAGE: 'SHOW_CONF_TX_PAGE',
  SET_CURRENT_FIAT: 'SET_CURRENT_FIAT',
  // account detail screen
  SHOW_SEND_TOKEN_PAGE: 'SHOW_SEND_TOKEN_PAGE',
  SHOW_PRIVATE_KEY: 'SHOW_PRIVATE_KEY',
  SET_ACCOUNT_LABEL: 'SET_ACCOUNT_LABEL',
  // tx conf screen
  COMPLETED_TX: 'COMPLETED_TX',
  TRANSACTION_ERROR: 'TRANSACTION_ERROR',
  UPDATE_TRANSACTION_PARAMS: 'UPDATE_TRANSACTION_PARAMS',
  SET_NEXT_NONCE: 'SET_NEXT_NONCE',
  // send screen
  UPDATE_GAS_LIMIT: 'UPDATE_GAS_LIMIT',
  UPDATE_GAS_PRICE: 'UPDATE_GAS_PRICE',
  UPDATE_GAS_TOTAL: 'UPDATE_GAS_TOTAL',
  UPDATE_SEND_HEX_DATA: 'UPDATE_SEND_HEX_DATA',
  UPDATE_SEND_TOKEN_BALANCE: 'UPDATE_SEND_TOKEN_BALANCE',
  UPDATE_SEND_TO: 'UPDATE_SEND_TO',
  UPDATE_SEND_AMOUNT: 'UPDATE_SEND_AMOUNT',
  UPDATE_SEND_ERRORS: 'UPDATE_SEND_ERRORS',
  UPDATE_MAX_MODE: 'UPDATE_MAX_MODE',
  UPDATE_SEND: 'UPDATE_SEND',
  CLEAR_SEND: 'CLEAR_SEND',
  GAS_LOADING_STARTED: 'GAS_LOADING_STARTED',
  GAS_LOADING_FINISHED: 'GAS_LOADING_FINISHED',
  UPDATE_SEND_ENS_RESOLUTION: 'UPDATE_SEND_ENS_RESOLUTION',
  UPDATE_SEND_ENS_RESOLUTION_ERROR: 'UPDATE_SEND_ENS_RESOLUTION_ERROR',
  // config screen
  SET_RPC_TARGET: 'SET_RPC_TARGET',
  SET_PROVIDER_TYPE: 'SET_PROVIDER_TYPE',
  SET_PREVIOUS_PROVIDER: 'SET_PREVIOUS_PROVIDER',
  UPDATE_TOKENS: 'UPDATE_TOKENS',
  SET_HARDWARE_WALLET_DEFAULT_HD_PATH: 'SET_HARDWARE_WALLET_DEFAULT_HD_PATH',
  // loading overlay
  SHOW_LOADING: 'SHOW_LOADING_INDICATION',
  HIDE_LOADING: 'HIDE_LOADING_INDICATION',
  // buy Eth with coinbase
  BUY_ETH: 'BUY_ETH',

  TOGGLE_ACCOUNT_MENU: 'TOGGLE_ACCOUNT_MENU',

  SET_USE_BLOCKIE: 'SET_USE_BLOCKIE',
  SET_USE_NONCEFIELD: 'SET_USE_NONCEFIELD',
  UPDATE_CUSTOM_NONCE: 'UPDATE_CUSTOM_NONCE',
  SET_IPFS_GATEWAY: 'SET_IPFS_GATEWAY',

  SET_PARTICIPATE_IN_METAMETRICS: 'SET_PARTICIPATE_IN_METAMETRICS',
  SET_METAMETRICS_SEND_COUNT: 'SET_METAMETRICS_SEND_COUNT',

  // locale
  SET_CURRENT_LOCALE: 'SET_CURRENT_LOCALE',

  // Feature Flags
  UPDATE_FEATURE_FLAGS: 'UPDATE_FEATURE_FLAGS',

  // Preferences
  UPDATE_PREFERENCES: 'UPDATE_PREFERENCES',

  // Onboarding
  COMPLETE_ONBOARDING: 'COMPLETE_ONBOARDING',

  SET_MOUSE_USER_STATE: 'SET_MOUSE_USER_STATE',

  // Network
  SET_PENDING_TOKENS: 'SET_PENDING_TOKENS',
  CLEAR_PENDING_TOKENS: 'CLEAR_PENDING_TOKENS',

  SET_FIRST_TIME_FLOW_TYPE: 'SET_FIRST_TIME_FLOW_TYPE',

  SET_SELECTED_SETTINGS_RPC_URL: 'SET_SELECTED_SETTINGS_RPC_URL',
  SET_NETWORKS_TAB_ADD_MODE: 'SET_NETWORKS_TAB_ADD_MODE',

  LOADING_METHOD_DATA_STARTED: 'LOADING_METHOD_DATA_STARTED',
  LOADING_METHOD_DATA_FINISHED: 'LOADING_METHOD_DATA_FINISHED',

  LOADING_TOKEN_PARAMS_STARTED: 'LOADING_TOKEN_PARAMS_STARTED',
  LOADING_TOKEN_PARAMS_FINISHED: 'LOADING_TOKEN_PARAMS_FINISHED',

  SET_REQUEST_ACCOUNT_TABS: 'SET_REQUEST_ACCOUNT_TABS',
  SET_CURRENT_WINDOW_TAB: 'SET_CURRENT_WINDOW_TAB',
  SET_OPEN_METAMASK_TAB_IDS: 'SET_OPEN_METAMASK_TAB_IDS',
}
