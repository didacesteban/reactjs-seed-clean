const ServiceLocator = require('./servicelocator');
//const Config = require('./config');

/**
 * @description Init Service Configuration
 */
//const AppConfig = Config.init();
const AppConfig = null;

/**
 * @description Init app
 */
ServiceLocator.provideRoot(AppConfig).loadView();
