import { defineConfig } from 'cypress';
import { port } from './server';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
    },
    baseUrl: `http://localhost:${port}`,
  },
});
